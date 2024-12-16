import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import Image from "next/image";
import Button from "@/components/Button";
import Formel from "@/components/Formel";
import Carrousel from "@/components/Carrousel";
import Ticket from "@/components/Ticket";
import Camping from "@/components/Camping";
import Kurv from "@/components/Kurv";
import LineupBands from "@/components/LineupBands";
export default function Home() {
  return (
    <div>
      <Nav />
      <img
        className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150"
        src="/img/logo.svg"
        alt="logo ikon"
      ></img>

      <Arrow />
      <Banner />
      <LineupBands />
      <Button />
      <Formel />
      <Footer />

      <Camping />
      <Kurv />
    </div>
  );
}
