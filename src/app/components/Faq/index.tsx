"use client";
import Image from "next/image";
import {
  Accordion,
} from "react-bootstrap";
import Link from "next/link";
import "./style.scss";
export default function Faq() {
  return (
    <section className="faqSection" id="faqSection">
      <div className="container">
      <div className="text-center">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Who can use Playbook AID?</Accordion.Header>
                <Accordion.Body>
                  Playbook AID is great for families, the casual artist, creative enthusiasts, and professional artists who want to ensure their intellectual property is secured and kept uniquely theirs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What types of digital creations can I register?</Accordion.Header>
                <Accordion.Body>
                  Any photographs, visual art, literary works, musical scores.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I utilize my Playbook AID Seal?</Accordion.Header>
                <Accordion.Body>
                  You can use this on social media, your website and any other platform to share your work. It is your public declaration that you have registered your work and support responsible AI.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How do I sign up for Playbook AID?</Accordion.Header>
                <Accordion.Body>
                  It’s easy and just takes a few minutes to complete. Click on the Register button to start.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
