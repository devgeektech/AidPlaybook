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
              <h4>Register Your Work. Receive Your Token</h4>
              <p>
                Register your digital artwork and receive a unique token as
                proof of ownership, recorded on our immutable
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
              <h4>Proof of Authenticity With Our Digital Seal</h4>
              <p>
                Every registration includes a piece is returned with a Playbook AID seal, showing your commitment to responsible and ethical AI.
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
              <h4>Monitoring Unauthorized Use</h4>
              <p>
                Stay informed with alerts with our premium monitoring whenever your digital creation is used to train AI models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
