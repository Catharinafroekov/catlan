import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import Image from "next/image";
import Button from "@/components/Button";
import Formel from "@/components/Formel";
import LineupBands from "@/components/LineupBands";

export default function Home() {
  return (
    <div>
      {/*       <Carrousel /> */}
      <Nav />
      <Arrow />
      <Banner />
      <LineupBands/>
      <Button />
      <Formel />
      <Footer />
    </div>
  );
}
