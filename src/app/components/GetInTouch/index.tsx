"use client";
import ArrowrightwhiteBgIcon from "@/app/icons/ArrowrightwhiteBgIcon";
import ArrowupWhiteIcon from "@/app/icons/ArrowupWhiteIcon";
import EnvlopeIcon from "@/app/icons/EnvlopeIcon";
import LocationIcon from "@/app/icons/LocationIcon";
import PhoneIcon from "@/app/icons/PhoneIcon";
import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.scss";

export default function Gettouch() {
  return (
    <section className="getTouchSection" id="getTouchSection">
      <div className="container">
        <div className="text-center">
          <h3>Get in Touch</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="formContent">
              <div className="form-group d-flex flex-column">
                <label>Call us on</label>
                <Link href={"tel:+11234567890"}>
                  <PhoneIcon />
                  +1 123 456 7890
                </Link>
              </div>
              <div className="form-group d-flex flex-column">
                <label>Email</label>
                <Link href={"mailTo:Support@playbookaid.com"}>
                  <EnvlopeIcon /> Support@playbookaid.com
                </Link>
              </div>
              <div className="form-group d-flex flex-column">
                <label>Contact information</label>
                <p>
                  <LocationIcon /> 715 Broadway, New York, NY 10003, USA
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="formWrapper">
              <Form>
                <div className="row">
                    <div className="col-sm-6">
                        <Form.Group className="mb-20" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="mb-20" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="mb-20" controlId="formBasicSubject">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                    </div>
                    <div className="col-sm-6">
                        <Form.Group className="mb-20" controlId="formBasicNumber">
                            <Form.Control type="text" placeholder="Phone number" />
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mb-30" controlId="formBasicMessage">
                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button type='submit' className="secondaryBtn"><span>Send Message</span><label className="arrowUp"><ArrowupWhiteIcon/></label><label className="arrowRight"><ArrowrightwhiteBgIcon/></label></Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
