import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {

    return (
        <section className="text-[#a2b8b1] min-h-screen">
            <div className="flex flex-col items-start textl-xl md:text-3xl gap-7">
                
                <div className="flex flex-col items-start gap-2">
                    <h1 id="article-section" className="text-4xl md:text-6xl scroll-mt-24 mb-6">
                        About
                    </h1>

                    <p>
                        This site is the <span className="text-white">personal blog</span> of <span className="text-white">Fraser Shimmins</span>. Here I publish articles and writing on random topics that peak my interest.
                        These can <span className="font-extrabold">range from</span> academic topics to video games and movies, or even documenting of my 3D print projects and creation of my
                        cosplays.
                    </p>

                    <p>
                        Feel Free to <span className="text-white">check out</span> the GitHub repository below to see what&apos;s going on under the hood.
                    </p>
                </div>
 
                <div className="flex flex-col md:flex-row justify-start gap-6 w-full mt-10">
                    {/* Contact Button */}
                    <Link href="https://github.com/FraserShimmins/personal-blog" className="relative block items-center w-full md:w-fit px-12 py-3 bg-[#19374b] text-[#a2b8b1] hover:bg-slate-900 hover:text-white active:bg-slate-950">
                        
                        <div className="flex justify-center items-center w-full gap-4">
                            <div className="relative w-[1.5em] h-[1.5em]">
                                <FontAwesomeIcon icon={faGithub}/> 
                            </div>
                            <p className="relative z-10 whitespace-nowrap">Personal-Blog</p>
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

                    {/* Contact Button */}
                    <Link href="/about" className="relative block w-full md:w-fit px-12 py-3 bg-[#19374b] text-[#a2b8b1] hover:bg-slate-900 hover:text-white active:bg-slate-950">
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
                </div>

                
               
            </div>
        </section>
    );
};