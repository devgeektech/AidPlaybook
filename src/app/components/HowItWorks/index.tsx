"use client";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import UploadIcon from "@/app/icons/UploadIcon";
import BlockchainIcon from "@/app/icons/BlockchainIcon";
import DigitalStampIcon from "@/app/icons/DigitalStampIcon";
import AiIcon from "@/app/icons/AiIcon";
export default function Howitworks() {
  return (
    <section className="HowItWorksSection" id="HowItWorks">
      <div className="container">
        <div className="text-center">
          <h3>How It Works</h3>
          <p>How to Register Your Creation</p>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="timelineWrapper">
              <div className="timeline">
                <div className="">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="contentBlock left">
                        <div className="content">
                          <div className="d-flex align-items-center">
                            <strong>01</strong>
                            <span>
                              <UploadIcon/>
                              <label className="zoomEffect"></label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Sign Up and Upload Your Digital Creation.</h3>
                        <p>
                          {/* Join us, unleash your creativity! Sign up now and upload your creation to inspire the world with your unique talent. */}
                          Join our community by signing up today.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center even">
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Receive Your Blockchain Token</h3>
                        <p>
                          Protect your work. Your unique blockchain token is secure and proof of your registration.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contentBlock right">
                        <div className="content">
                          <div className="d-flex align-items-center">
                            <span>
                              <BlockchainIcon/>
                              <label className="zoomEffect"></label>
                            </span>
                            <strong>02</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="contentBlock left third">
                        <div className="content">
                          <div className="d-flex align-items-center">
                            <strong>03</strong>
                            <span>
                              <DigitalStampIcon/>
                              <label className="zoomEffect"></label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Declare your Ownership</h3>
                        <p>
                          When registering your digital creation, you receive a Playbook AID Digital Seal that lets others know you have authenticated your work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center even">
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Feel Secure. We’re Monitoring.</h3>
                        <p> Our advanced technology confuses LLMs making your work less vulnerable. Stay informed with premium alerts if your work is being used without your permission.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contentBlock right">
                        <div className="content">
                          <div className="d-flex align-items-center">
                            <span>
                              <AiIcon/>
                              <label className="zoomEffect"></label>
                            </span>
                            <strong>04</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
