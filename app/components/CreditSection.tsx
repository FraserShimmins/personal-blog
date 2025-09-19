import Link from "next/link";

export default function CreditSection() {

    return (
        <section className="text-[#a2b8b1] min-h-screen">
            <div className="flex flex-col items-start textl-xl md:text-3xl gap-7">
                
                <h1 id="credit-section" className="text-3xl md:text-6xl scroll-mt-24">
                    Credits
                </h1>
                
                <div className="w-full p-3 md:p-10 bg-[#19374b] rounded-sm textl-xl md:text-3xl">
                    <p>
                        - Inspiration Image for Parallax Effect:  <Link className="text-white underline italic" href="https://www.reddit.com/r/PixelArt/comments/1ait1vj/balcony/#lightbox">click here</Link>
                    </p>
                    <p>
                        - Grammer Check and wording checks: <span className="text-white">Matthew Balogun</span>
                    </p>
                    <p>
                        - General Coding Advice: <span className="text-white">Dylan Kainth</span>
                    </p>
                </div>

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

                <p>
                    If you believe you should be credited and I have not yet done so, please let me know
                </p>
            </div>
        </section>
    );
};