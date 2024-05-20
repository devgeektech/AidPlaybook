"use client";
import Image from "next/image";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Link from "next/link";
import "./style.scss";
import Logo from "../../../../public/images/logo.svg";
import Arrowup from "@/app/icons/Arrowup";
import Arrowright from "@/app/icons/Arrowright";
export default function Header() {
  return (
    <header className="header sticky1">
      <Navbar collapseOnSelect expand="lg"  fixed="top">
        <Container>
          <Link className="navbar-brand" href={"/"}>
            <Image src={Logo} alt='Logo'/>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#playbookAidSection">About</Nav.Link>
              <Nav.Link href="#FeaturesSection">Features</Nav.Link>
              <Nav.Link href="#works">How It Works</Nav.Link>
              <Nav.Link href="#faqSection">FAQ</Nav.Link>
              <Nav.Link href="#getTouchSection">Contact</Nav.Link>
              <Link className="primaryBtn" href={"/registration"}><span>Get Started</span><label className="arrowUp"><Arrowup/></label><label className="arrowRight"><Arrowright/></label></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
