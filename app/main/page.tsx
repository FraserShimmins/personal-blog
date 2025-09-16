import HeroSection from "../components/HeroSection";
import NavBar from ".././components/NavBar";
import ArticleSection from ".././components/ArticleSection";
import Footer from ".././components/Footer";

export default function Page() {

  return (
    <main className="min-h-screen bg-[#1f2439]">
        <NavBar/>

        <div className="pt-20 mx-10 sm:mx-15 pb-20">
            <HeroSection/>
            <ArticleSection/>
        </div>

        <Footer/>
    </main>
  );
}
