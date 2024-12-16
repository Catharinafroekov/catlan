import Nav from "@/components/Nav";
import BandsNames from "@/components/BandsNames";
import Footer from "@/components/Footer";

export default function Lineup() {
    return <div>
      <Nav/>
      <h1 className="text-center text-darkblue uppercase text-3xl font-bold m-4">Lineup</h1>
      <BandsNames/>
      <Footer/>
    </div>;
  }