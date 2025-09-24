import Image from "next/image";

type Contributor = {
  name: string;
  url?: string | null;
  role?: string | null;
};

type props = {
  title: string;
  datePublished: string | null;
  tags: string[] | null;
  content: string | null;
  contributors: Contributor[] | null;
};

export default function Article({ title, datePublished, tags, content, contributors } : props){

    return(
        <section className="text-slate-900 min-h-screen font-roboto">
            <div className="w-full p-3 md:p-10 bg-[#e9f0ee] rounded-sm flex flex-col items-start textl-xl md:text-3xl gap-7">

                {/* Title of the Article */}
                <h1 className="text-4xl md:text-6xl scroll-mt-24 mb-6">{title}</h1>

                <div className="relative w-full aspect-[16/6] bg-white">
                    <Image
                        src="/images/EntranceCover.svg"
                        alt="Article Image"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Descriptive Data */}
                <div className="w-full md:w-fit  p-3 md:p-10 bg-[#a2b8b1] rounded-sm flex flex-col items-start gap-2">
                    
                    {/* Date of Publishing */}
                    {datePublished && (
                        <p className="textl-lg md:text-2xl">
                            <span className="font-bold underline">Date Published:</span> {new Date(datePublished).toLocaleDateString()}
                        </p>
                    )}

                    {/* Tags Used to Identify the contents of the article */}
                    {Array.isArray(tags) && tags.length > 0 && (
                        <p className="textl-lg md:text-2xl">
                            <span className="font-bold underline">Tags:</span> {tags.join(", ")}
                        </p>
                    )}
                </div>
                

                {/* If your content is Markdown, swap this for a Markdown renderer */}
                <div className="mt-8 whitespace-pre-wrap">{content}</div>

                {Array.isArray(contributors) && contributors.length > 0 && (
                    <div className="w-full p-3 md:p-10 bg-[#a2b8b1] rounded-sm flex flex-col gap-3 mt-12 textl-lg md:text-2xl">
                        <h2 className="textl-lg md:text-2xl font-bold underline">
                            Key Contributors:
                        </h2>

                        <ul className="list-disc pl-5">
                            {contributors.map((c: Contributor, i: number) => (
                            <li key={i}>
                                <span className="font-extrabold">{c.name}</span>
                                {c.role ? ` — ${c.role}` : null}
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}