import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Image from "next/image";
import Button from "@/components/Button";
import Formel from "@/components/Formel";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Banner />
      <Button />
      <Formel />
      <Footer />
    </div>
  );
}
