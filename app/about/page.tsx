import NavBar from ".././components/NavBar";
import AboutSection from "../components/AboutSection";
import Footer from ".././components/Footer";

export default function Page() {

  return (
    <main className="min-h-screen bg-[#1f2439] overflow-x-hidden">
        <NavBar/>

        <div className="pt-20 mx-10 sm:mx-15 pb-20">
            <AboutSection/>
        </div>

        <Footer/>
    </main>
  );
}
