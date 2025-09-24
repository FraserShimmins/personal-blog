import supabase from "../../supabase-client";
import { notFound } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

// Revalidate the page every 10 minutes (ISR)
export const revalidate = 600;

// ------------ Types ------------
type Contributor = {
  name: string;
  url?: string | null;
  role?: string | null;
};

type Post = {
  id: number;
  slug: string;
  title: string;
  blurb: string | null;
  content: string | null;
  date_published: string | null; // ISO string in DB
  tags: string[] | null;         // JSON array in DB
  contributors: Contributor[] | null; // JSON array in DB
};

type Params = { slug: string };

// ------------ Data fetch ------------
async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, slug, title, blurb, content, date_published, tags, contributors"
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("getPost error:", error.message);
    return null;
  }

  // Supabase returns JSON columns as `unknown`; cast into our Post shape.
  return data as unknown as Post;
}

// (Optional) Pre-generate static pages for all slugs at build time
export async function generateStaticParams() {
  const { data } = await supabase.from("posts").select("slug");
  return (data ?? []).map(({ slug }) => ({ slug }));
}

// (Optional) SEO metadata per post
export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.blurb ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

// ------------ Page ------------
export default async function Page({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#1f2439] overflow-x-hidden">
      <NavBar/>

      <div className="pt-20 mx-5 sm:mx-15 pb-20">
        <Article
          title={post.title}
          datePublished={post.date_published}
          tags={post.tags}       
          content={post.content}
          contributors={post.contributors}
        />
      </div>
      
      <Footer/>
    </main>
  );
}
