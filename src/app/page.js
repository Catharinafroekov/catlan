import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import Image from "next/image";
import Button from "@/components/Button";
import Formel from "@/components/Formel";
import Carrousel from "@/components/Carrousel";
import Kurv from "@/components/Kurv";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <div>
      {/*      <Formel /> */}
      <Carrousel />
      {/*       <Kurv />
      <Ticket /> */}
    </div>
  );
}
