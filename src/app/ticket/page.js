import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Ticket from "@/components/Ticket";
import Camping from "@/components/Camping";
import Kurv from "@/components/Kurv";

export default function TicketS() {
  return (
    <div>
      <Nav></Nav>
      <Camping />
      <Ticket />
      <Kurv />
    </div>
  );
}
