import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {

    
    
    return (
        <section className="relative text-[#a2b8b1] w-full h-50 py-0 px-5 md:px-0 md:py-10 bg-[#19374b] text-2xl md:text-4xl grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-stretch md:items-center border-t-3 border-[#a2b8b1] divide-y-3 md:divide-y-0 md:divide-x-3 divide-[#a2b8b1]">
            
            {/* Section 1 Credit */}
            <div className="flex items-center justify-start md:justify-center h-full">
                <h2>Fraser Shimmins</h2>
            </div>
        
            {/* Section 2 Socails*/}
            <div className="flex flex-row md:flex-col w-full h-full items-center gap-6 md:gap-4 whitespace-nowrap">
                <p>All About Me</p>
                    
                <div className="flex gap-2 md:gap-4 w-full justify-start md:justify-center row-start-2">
                     
                    <Link href="/" className="relative w-[1.5em] h-[1.5em] m-3">
                        <Image
                            src="/images/instagram.svg"
                            fill
                            alt="Logo"
                        /> 
                    </Link>

                    <Link href="/" className="relative w-[1.5em] h-[1.5em] m-3">
                        <Image
                            src="/images/github.svg"
                            fill
                            alt="Logo"
                        /> 
                    </Link>

                    <Link href="/" className="relative w-[1.5em] h-[1.5em] m-3">
                        <Image
                            src="/images/buymeacoffee.svg"
                            fill
                            alt="Logo"
                        /> 
                    </Link>
                </div>
            </div>
                
            {/* Section 3 Navigation */}
            <div className="flex flex-row md:flex-col w-full h-full justify-center items-center gap-4 whitespace-nowrap">
                <p>Site Links</p>
                    
                <div className="row-start-2 w-full px-6 md:px-12 text-lg md:text-4xl">
                    <div className="flex w-full items-center">
                        <Link className="flex-1 basis-0 text-center hover:text-white" href="">About</Link>
                        <span className="mx-4 block h-1.5 w-1.5 rounded-full bg-[#a2b8b1]" />
                        <Link className="flex-1 basis-0 text-center hover:text-white" href="">Articles</Link>
                        <span className="mx-4 block h-1.5 w-1.5 rounded-full bg-[#a2b8b1]" />
                        <Link className="flex-1 basis-0 text-center hover:text-white" href="">Credits</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}