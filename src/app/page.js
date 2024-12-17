import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import LineupBands from "@/components/LineupBands";
import Timer from "@/components/Timer";
import CountdownFestival from "@/components/CountdownFestival";
<<<<<<< HEAD
import StandardButton from "@/components/StandardButton";
import Link from "next/link";
=======
>>>>>>> kurv-mandag-pt2

export default function Home() {
  return (
    <div>
      <Nav />
<<<<<<< HEAD
      {/* <Timer /> */}
=======
>>>>>>> kurv-mandag-pt2
      <CountdownFestival />
      <img
        className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150 mx-auto"
        src="/img/logo.svg"
        alt="logo ikon"
      />
<<<<<<< HEAD
      <Link href="/ticket"><StandardButton label="Buy your ticket here"/></Link>
      <Banner />
      <Arrow />
      <LineupBands />
      <Link href="/lineup"><StandardButton label="Read more here"/></Link>
=======
      <RadixButton />
      <Formel />
      <Arrow />
      <Banner />
      <LineupBands />
>>>>>>> kurv-mandag-pt2
      <Footer />
    </div>
  );
}
