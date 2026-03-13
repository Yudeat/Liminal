import Footer from "./Footer";
import { auth } from "@/auth";
import HireaPerson from "./HireaPerson";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";  
import CallMenu from "./callMenu";
import FAQ from "./FAQ";
import Rating from "./Rating";
import HowItWorks from "./howitWork";
import PricingPage from "./PricingMenu";
import WhatIsLiminal from "./whatIsIt";
export default async function Home() {
   const session=await auth();
  return (<>
 
  {/* main component */}
 <Navbar session={session} />
 <WhatIsLiminal/>
<HireaPerson/>
<HowItWorks/>
<FAQ/>
<PricingPage/>
<CallMenu/>
<Rating/>
<Newsletter/>
    <Footer/>

    </>
  );
}
