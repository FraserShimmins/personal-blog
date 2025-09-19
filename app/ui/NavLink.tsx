import Link from "next/link";

type propsType = {
    href: string;
    text: string;
}

export default function NavLink({href, text}: propsType){
    return(
        <Link href={href} className="text-1xl md:text-2xl text-[#a2b8b1] text-center font-semibold py-2 md:py-3 
                                    rounded-sm hover:bg-slate-800 px-2 hover:text-white active:bg-slate-900">
            {text}                                           
        </Link>
    );
};