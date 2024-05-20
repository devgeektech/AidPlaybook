import "./global.scss";
import "./style.scss";
import Empower from "./components/Empower";
import PlaybookAid from "./components/PlaybookAid";
import Features from "./components/Features";
import Gettouch from "./components/GetInTouch";
import Faq from "./components/Faq";
import Howitworks from "./components/HowItWorks";
export default function Home() {
  return (
   <>
    <div className="homepage">
      <Empower/>
      <PlaybookAid/>
      <Features/>
      <Howitworks/>
      <Faq/>
      <Gettouch/>
    </div>
   </>
  );
}
