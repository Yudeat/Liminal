import Navbar from "./Navbar";
import {ModeToggle}  from "./Main";
import { Newspaper } from "lucide-react";
export default function Home() {
  return (<>
  {/* main component */}
 <Navbar />
<ModeToggle />
<Newspaper/>
    

    </>
  );
}
