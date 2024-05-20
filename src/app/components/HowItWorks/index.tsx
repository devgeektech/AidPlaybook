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
                        <h3>Sign Up and Upload Your Creation</h3>
                        <p>
                          {/* Join us, unleash your creativity! Sign up now and upload your creation to inspire the world with your unique talent. */}
                          Join us and unleash your creativity! Sign up now and upload your work
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center even">
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Receive Your Blockchain Token</h3>
                        <p>
                          {/* Unlock your digital assets! Sign up today to receive your blockchain token and enter the world of secure, decentralized transactions. */}
                          Sign up today to receive your blockchain token.
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
                        <h3>Get Your Digital Stamp</h3>
                        <p>
                          {/* Step into your digital world confidently. Sign up now to get your digital stamp and authenticate your online presence with confidence. */}
                          Leverage AID's advanced AI technology with all of your registered work.
                          </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center even">
                    <div className="col-md-6">
                      <div className="timelineRight">
                        <h3>Monitor Usage with Our AI Technology</h3>
                        <p>Empower your insights! Utilize our advanced AI technology to monitor usage efficiently and optimize performance effortlessly.{" "}</p>
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
