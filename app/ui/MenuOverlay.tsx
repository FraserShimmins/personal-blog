import Link from "next/link";

type NavLinkItem = {
  id: number;
  text: string;
  link: string;
};

interface MenuOverlayProps {
  pLinksData: NavLinkItem[];
}

export default function MenuOverlay({ pLinksData } : MenuOverlayProps){
    
    return(
        <div className="flex flex-col gap-3 items-center">
            {
                pLinksData.map((navLink) => 
                <Link key={navLink.id} href={navLink.link} className="text-1xl md:text-2xl text-white text-center font-semibold py-2 md:py-3 
                                    rounded-sm hover:bg-slate-800 w-full hover:text-[#4ba351] active:bg-slate-900">
                  {navLink.text}                              
                </Link>
                )
            }
        </div>
    );
};