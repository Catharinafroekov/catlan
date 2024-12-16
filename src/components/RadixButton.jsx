import "@radix-ui/themes/styles.css";
import { Theme, Button } from "@radix-ui/themes";
import '../app/globals.css';
import Link from "next/link";
const Radixbutton = () => {
  return (
    <Theme className="min-h-0 relative z-0 w-auto">
      <div className="flex justify-center items-center my-6">
        <Button
          color="blue"
          variant="outline"
          size="3"
          radius="large"
          trim="both"
          className="p-0 m-0 inline-block"
          
        >
            <Link href="/ticket">Buy your ticket here</Link>
          
        </Button>
      </div>
    </Theme>
  );
};

export default Radixbutton;
