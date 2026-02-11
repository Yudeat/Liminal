import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";  
import CallMenu from "./callMenu";
export default function Home() {
  return (<>
  {/* main component */}
 <Navbar />
<Newsletter/>
<CallMenu/>
    <Footer/>

    </>
  );
}
