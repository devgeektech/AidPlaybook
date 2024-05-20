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
import Logo from "../../../../public/images/logo.svg";
import Arrowup from "@/app/icons/Arrowup";
import Arrowright from "@/app/icons/Arrowright";
import TwitterIcon from "@/app/icons/TwitterIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import SendIcon from "@/app/icons/SendIcon";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="row">
            <div className="col-lg-5">
              <div className="logo_socailMedia">
                <div className="footerLogo">
                  <Link href={"/"}>
                    <Image src={Logo} alt="Logo" />
                  </Link>
                </div>
                <p>
                  Playbook AID leverages advanced blockchain technology to
                  register digital creations, ensuring your intellectual
                  property is secured and uniquely yours.
                </p>
                <ul className="socialMedia">
                  <li>
                    <Link href={"/"}>
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/"}>
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/"}>
                      <YoutubeIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footerLinks">
                <h4>Quick links</h4>
                <ul>
                  <li>
                    <Link href={"#empowerSection"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"#playbookAidSection"}>About</Link>
                  </li>
                  <li>
                    <Link href={"#FeaturesSection"}>Feature</Link>
                  </li>
                  <li>
                    <Link href={"#HowItWorks"}>How It Works</Link>
                  </li>
                  <li>
                    <Link href={"#faqSection"}>Faq</Link>
                  </li>
                  <li>
                    <Link href={"#getTouchSection"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="subscribeBlock">
                <h3>Subscribe to our newsletter</h3>
                <p>
                  Join our community for Blockchain, news, and special offers
                  tailored just for you!
                </p>
                <Form>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <Button className="subscribeBtn"><SendIcon/><span>Subscribe</span></Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightWrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>© Playbook AID 2024. All Rights Reserved</p>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/"}>Terms of Use</Link>
                </li>
                <li>
                  <Link href={"/"}>Legal</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
