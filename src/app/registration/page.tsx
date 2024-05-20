"use client";
import React, { useState } from "react";
import "./style.scss";
import { Button, Form, Spinner } from "react-bootstrap";
import ArrowrightwhiteBgIcon from "../icons/ArrowrightwhiteBgIcon";
import ArrowupWhiteIcon from "../icons/ArrowupWhiteIcon";
import nodemailer from 'nodemailer';

export default function Page() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        titleOfWork: '',
        typeOfWork: '',
        author: '',
        dateOfCreation: '',
        equipment: '',
        genAI: '',
        copyrightClaimant: '',
        previousCopyright: '',
        feePayment: '',
        address: '',
        declaration: false,
    });
    const [loaderHide, setLoader] = useState(false);

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        setLoader(true);
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
        setLoader(false);
    };

    return (
        <div className="resgistrationPage">
            <div className="text-center m-auto">
                <h1 className="text-center">Register</h1>
            </div>
            <div className="formWrapper">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name="fullName" placeholder="Enter your Full Name" value={formData.fullName} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title of the Work</Form.Label>
                                <Form.Control type="text" name="titleOfWork" placeholder="Title of the Work" value={formData.titleOfWork} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Type of Work</Form.Label>
                                <Form.Select name="typeOfWork" aria-label="Select Type of Work" value={formData.typeOfWork} onChange={handleChange} required>
                                    <option>Select Type of Work</option>
                                    <option value="Literary Work">Literary Work</option>
                                    <option value="Visual Art">Visual Art</option>
                                    <option value="Musical Composition">Musical Composition</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Author(s) or Creator(s)</Form.Label>
                                <Form.Control type="text" name="author" placeholder="Author(s) or Creator(s)" value={formData.author} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date of Creation</Form.Label>
                                <Form.Control type="date" name="dateOfCreation" placeholder="Date of Creation" value={formData.dateOfCreation} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Type of Equipment, Software and/or Tools used to create work (including which version of the software)</Form.Label>
                                <Form.Control type="text" name="equipment" placeholder="Type of Equipment, Software and/or Tools used to create work" value={formData.equipment} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Did you use Gen AI? What percentage of work? Which programs and/or tools? Please identify software versions and for all Gen AI materials, including prompts used.</Form.Label>
                                <Form.Control type="text" name="genAI" placeholder="Please identify software versions and for all Gen AI materials, including prompts used" value={formData.genAI} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Copyright Claimant</Form.Label>
                                <Form.Control type="text" name="copyrightClaimant" placeholder="Identify the entity or person claiming copyright ownership" value={formData.copyrightClaimant} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Previous Copyright Registration</Form.Label>
                                <Form.Control type="text" name="previousCopyright" placeholder="Enter registered for copyright previously, provide information about the previous registration." value={formData.previousCopyright} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Fee Payment</Form.Label>
                                <Form.Control type="text" name="feePayment" placeholder="Fee Payment" value={formData.feePayment} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" name="address" placeholder="Enter your Address" value={formData.address} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" name="declaration" label="Sign a declaration stating that the information provided is accurate and that you are the rightful owner of the copyright or have permission to register the copyright on behalf of the owner." checked={formData.declaration} onChange={handleChange} required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button type="submit" className="secondaryBtn">
                            <span>Submit</span>
                            <label className="arrowUp"><ArrowupWhiteIcon /></label>
                            <label className="arrowRight"><ArrowrightwhiteBgIcon /></label>
                        </Button>
                    </div>
                </Form>
                {loaderHide && 
                    <div className="loaderWrapper">
                        <Spinner animation="border" variant="light" />
                    </div>
                }
            </div>
        </div>
    );
}
