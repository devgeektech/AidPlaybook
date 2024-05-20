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
                <Accordion.Header>What types of digital creations can I register?</Accordion.Header>
                <Accordion.Body>
                  Any original artwork created digitally, such as illustrations, graphic designs, and digital paintings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How does the AI monitoring work?</Accordion.Header>
                <Accordion.Body>
                  Any original artwork created digitally, such as illustrations, graphic designs, and digital paintings.
                </Accordion.Body>
              </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What do I do if I find my work being used without permission?</Accordion.Header>
                <Accordion.Body>
                  Any original artwork created digitally, such as illustrations, graphic designs, and digital paintings.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
