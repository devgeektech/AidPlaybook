"use client";
import Image from "next/image";
import "./style.scss";
import whyPlaybook from "../../../../public/images/whyPlaybook.png";
import SecureIcon from "@/app/icons/SecureIcon";
import StampIcon from "@/app/icons/StampIcon";
import MonitorIcon from "@/app/icons/MonitorIcon";
import SecureWhiteIcon from "@/app/icons/SecureWhiteIcon";
import StampWhiteIcon from "@/app/icons/StampWhiteIcon";
import MonitorWhiteIcon from "@/app/icons/MonitorWhiteIcon";
export default function Features() {
  return (
    <section className="FeaturesSection" id="FeaturesSection">
      <div className="container">
        <div className="text-center">
          <h3>Powerful Features</h3>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="icon_content">
              <div className="iconsWrap">
                <label className="dark">
                  <SecureIcon />
                </label>
                <label className="white">
                  <SecureWhiteIcon />
                </label>
              </div>
              <h4>Secure Your Work, Gain Your Token</h4>
              <p>
                Register your digital artwork and receive a unique token as
                proof of ownership, recorded forever on our immutable
                blockchain.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon_content">
              <div className="iconsWrap">
                <label className="dark">
                  <StampIcon />
                </label>
                <label className="white">
                  <StampWhiteIcon />
                </label>
              </div>
              <h4>Proof of Authenticity with Our Digital Stamp</h4>
              <p>
                Every registered piece is returned with a Playbook AID stamp,
                showcasing your commitment to innovation and authenticity.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon_content">
              <div className="iconsWrap">
                <label className="dark">
                  <MonitorIcon />
                </label>
                <label className="white">
                  <MonitorWhiteIcon />
                </label>
              </div>
              <h4>Advanced AI Monitoring</h4>
              <p>
                Stay informed with our AI monitoring technology that alerts you
                whenever your digital creation is used to train AI models,
                keeping you in control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
