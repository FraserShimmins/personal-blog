import Link from "next/link";
import BlogCard from "../ui/BlogCard";
import supabase from "../supabase-client";

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("title, blurb, date_published, slug") // or list columns if you want type safety

  if (error) {
    console.error("Error fetching posts:", error.message)
    return []
  }

  return data
}

export default async function ArticleSection() {
    const posts = await getPosts()

    return (
        <section className="text-[#a2b8b1] min-h-screen">
            <div className="flex flex-col items-start textl-xl md:text-3xl gap-7">
                
                <h1 id="article-section" className="text-3xl md:text-6xl scroll-mt-24">
                    Articles
                </h1>

                {/* Contact Button */}
                <Link href="/contact" className="relative block w-full md:w-fit px-12 py-3 bg-[#19374b] text-[#a2b8b1] hover:bg-slate-900 hover:text-white active:bg-slate-950">
                    <div className="flex justify-center items-center h-full w-full">
                        <p className="relative z-10 text-center">Contact Me</p>
                    </div>

                    {/* notch (left)*/}
                    <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2
                                w-0 h-0 border-y-[30px] border-y-transparent
                                border-l-[12px] border-l-[#1f2439]"
                    />

                    {/* notch (right)*/}
                    <span
                        aria-hidden
                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2
                                w-0 h-0 border-y-[30px] border-y-transparent
                                border-r-[12px] border-r-[#1f2439]" 
                    />
                </Link>
                
                {/* All of the Blog post cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            imgUrl="/placeholder.jpg" // or your cover_image column later
                            pageUrl={`/blog/${post.slug}`}
                            title={post.title}
                            description={post.blurb}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};