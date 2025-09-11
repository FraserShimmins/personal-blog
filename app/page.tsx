import ParallaxEffect from "./components/ParallaxEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#230019]">

      <ParallaxEffect/>

      <div className="pt-20 mx-10 sm:mx-15">
        <section className="pt-10 text-white">
            <h1 className="text-4xl">
                <span className="font-extrabold">HELLO</span> This is a test run of the font
            </h1>

            <p className="text-2xl">
                HELLO, This is a test run of the font
            </p>
        </section>
      </div>
    </main>
  );
}
