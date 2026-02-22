import Footer from "./Footer";
import HireaPerson from "./HireaPerson";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";  
import CallMenu from "./callMenu";
import FAQ from "./FAQ";
export default function Home() {
  return (<>
  {/* main component */}
 <Navbar />
<HireaPerson/>
<FAQ/>
<CallMenu/>
<Newsletter/>
    <Footer/>

    </>
  );
}
