import Footer from "./Footer";
import HireaPerson from "./HireaPerson";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";  
import CallMenu from "./callMenu";
export default function Home() {
  return (<>
  {/* main component */}
 <Navbar />
<HireaPerson/>
<CallMenu/>
<Newsletter/>
    <Footer/>

    </>
  );
}
