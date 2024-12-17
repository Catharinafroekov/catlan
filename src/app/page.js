import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import LineupBands from "@/components/LineupBands";
import RadixButton from "@/components/RadixButton";
import Formel from "@/components/Formel";
import CountdownFestival from "@/components/CountdownFestival";

export default function Home() {
  return (
    <div>
      <Nav />
      <CountdownFestival />
      <img
        className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150 mx-auto"
        src="/img/logo.svg"
        alt="logo ikon"
      />
      <RadixButton />
      <Formel />
      <Arrow />
      <Banner />
      <LineupBands />
      <Footer />
    </div>
  );
}
