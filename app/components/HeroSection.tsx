import Image from "next/image";

export default function HeroSection() {
    
    return (
        <section className="text-[#a2b8b1] min-h-screen">
            <div className="flex flex-col items-center pt-10 text-3xl md:text-6xl gap-7">
                <h1 className="text-center">Welcome to the Blog Dungeon!</h1>

                <div className="relative w-[6em] h-[6em]">
                    <Image
                        src="/images/EntranceCover.svg"
                        fill
                        alt="Logo"
                    />
                </div>
            </div>
        </section>
    );
};