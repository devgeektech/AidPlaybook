"use client";
import Image from "next/image";
import "./style.scss";
import whyPlaybook from "../../../../public/images/whyPlaybook.png";
export default function PlaybookAid() {
  return (
    <section className="playbookAidSection" id="playbookAidSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="bannerImage">
                  <Image className="w-100 h-auto" src={whyPlaybook} alt='whyPlaybook'/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bannerContent">
                <h2>With our pioneering AI monitoring system, track where and how your art powers the future of AI.</h2>
                <p>Playbook AID leverages advanced blockchain technology to register <strong>Your</strong> digital creations, ensuring your intellectual property is secured and uniquely yours. 
                 {/* With our pioneering AI monitoring system, track where and how your art powers the future of AI. */}
                  With our pioneering AI monitoring system, you can be confident that your digital creation is registered and identified.
                 </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
