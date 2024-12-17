import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import LineupBands from "@/components/LineupBands";
import Timer from "@/components/Timer";
import CountdownFestival from "@/components/CountdownFestival";
import StandardButton from "@/components/StandardButton";

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Timer /> */}
      <CountdownFestival />
      <img
        className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150 mx-auto"
        src="/img/logo.svg"
        alt="logo ikon"
      />
      <StandardButton label="Buy your ticket here"/>
      <Banner />
      <Arrow />
      <LineupBands />
      <StandardButton label="Read more here"/>
      <Footer />
    </div>
  );
}
