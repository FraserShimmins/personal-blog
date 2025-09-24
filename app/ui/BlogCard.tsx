import Link from 'next/link';
import Image from "next/image";

type propsType = {
    imgUrl: string;
    pageUrl: string;
    title: string;
    description: string;
}

export default function BlogCard({ imgUrl, pageUrl, title, description } : propsType){
    
    return(
        <Link href={pageUrl} className="flex flex-col justify-start bg-[#a2b8b1] border-slate-950 border-12
                transform-gpu transition-transform duration-450 ease-in-out
                hover:-translate-y-8 overflow-hidden h-100">
            {/* Photo*/}
            <div className="p-2">
                {/* Image box with fixed ratio */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#557b78] border-2 border-slate-950">
                <Image
                    src={imgUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                </div>
            </div>

            {/* Text Content */}
            <div className="py-4 px-6 text-slate-950">
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </Link>
    );
};