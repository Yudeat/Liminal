import Footer from "./Footer";
import HireaPerson from "./HireaPerson";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";  
import CallMenu from "./callMenu";
import FAQ from "./FAQ";
import Rating from "./Rating";
import HowItWorks from "./howitWork";
import PricingPage from "./PricingMenu";
import WhatIsLiminal from "./whatIsIt";
import LoginPage from "./Authentication/page";
export default function Home() {
  return (<>
  {/* main component */}
 <Navbar />
 <WhatIsLiminal/>
<HireaPerson/>
<HowItWorks/>
<FAQ/>
<PricingPage/>
<CallMenu/>
<Rating/>
<LoginPage/>
<Newsletter/>
    <Footer/>

    </>
  );
}
