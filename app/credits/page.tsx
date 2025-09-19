import NavBar from ".././components/NavBar";
import CreditSection from "../components/CreditSection";
import Footer from ".././components/Footer";

export default function Page() {

  return (
    <main className="min-h-screen bg-[#1f2439] overflow-x-hidden">
        <NavBar/>

        <div className="pt-20 mx-10 sm:mx-15 pb-20">
            <CreditSection/>
        </div>

        <Footer/>
    </main>
  );
}

