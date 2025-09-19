import DungeonEntrance from "../ui/DungeonEntrance";
export default function HeroSection() {

  return (
    <section className="text-[#a2b8b1] min-h-screen">
      <div className="flex flex-col items-center pt-10 text-3xl md:text-6xl gap-7">
        <h1 id="#welcome-section" className="text-center scroll-mt-24">Welcome to the Blog Dungeon!</h1>

        <DungeonEntrance href="/"/>
        
      </div>
    </section>
    );
};