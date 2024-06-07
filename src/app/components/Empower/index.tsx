"use client";
import Image from "next/image";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Link from "next/link";
import "./style.scss";
import bannerImg from "../../../../public/images/bannerImg.png";
import Arrowup from "@/app/icons/Arrowup";
import Arrowright from "@/app/icons/Arrowright";
import TwitterIcon from "@/app/icons/TwitterIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import SendIcon from "@/app/icons/SendIcon";
import ArrowupWhiteIcon from "@/app/icons/ArrowupWhiteIcon";
import ArrowrightwhiteBgIcon from "@/app/icons/ArrowrightwhiteBgIcon";
export default function Empower() {
  return (
    <section className="empowerSection" id="empowerSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="bannerContent">
                <h1>Your Digital Creation, Your Ownership, Our Blockchain Registration</h1>
                <p>Register, Protect, and Track Your Digital Creations with Blockchain Technology</p>
                <div className="btnsWrap">
                  <Button className="secondaryBtn"><span>Get Started</span><label className="arrowUp"><ArrowupWhiteIcon/></label><label className="arrowRight"><ArrowrightwhiteBgIcon/></label></Button>
                  <Button className="primaryBtn"><span>Learn More</span><label className="arrowUp"><Arrowup/></label><label className="arrowRight"><Arrowright/></label></Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bannerImage">
                  <Image className="w-100 h-auto" src={bannerImg} alt='bannerImg'/>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
