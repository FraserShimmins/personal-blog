
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
        <section className="text-[#a2b8b1] min-h-screen">
            <h1>{title}</h1>

            {datePublished && (
                <p className="text-sm opacity-70">
                {new Date(datePublished).toLocaleDateString()}
                </p>
            )}

            {Array.isArray(tags) && tags.length > 0 && (
                <p className="text-sm opacity-70">Tags: {tags.join(", ")}</p>
            )}

            {/* If your content is Markdown, swap this for a Markdown renderer */}
            <div className="mt-8 whitespace-pre-wrap">{content}</div>

            {Array.isArray(contributors) && contributors.length > 0 && (
                <section className="mt-12">
                <h2>Contributors</h2>
                <ul className="list-disc pl-5">
                    {contributors.map((c: Contributor, i: number) => (
                    <li key={i}>
                        {c.url ? (
                        <a
                            href={c.url}
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {c.name}
                        </a>
                        ) : (
                        c.name
                        )}
                        {c.role ? ` — ${c.role}` : null}
                    </li>
                    ))}
                </ul>
                </section>
            )}
        </section>
    )
}