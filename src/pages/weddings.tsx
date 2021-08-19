import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from "../components/pageHeader";
import ReactGA from 'react-ga';
import Wedding from "../../content/assets/wedding.jpeg";
import { Form, Button } from "react-bootstrap";
import Honeypot from "../components/honeypot";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactGA.initialize(process.env.GOOGLE_ID);

export default function Contact(props) {
    const siteTitle = "Weddings";
    const [data, setData] = useState({ name: "", email: "", message: "", date: "", });

    useEffect(() => {
        if (typeof "window" !== "undefined") {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, []);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const notify = () => toast("Your form is on the way. Congrats!");

    const handleSubmit = e => {

        try {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": process.env.WEDDING_FORM_NAME, ...data })
            })
                .then(() => notify())
                .catch(error => alert(error));
        } catch (e) {
            console.log(e);
        }
        e.preventDefault();
    };

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const { name, email, message, date } = data;
    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO
                title="Weddings"
                keywords={[`rage against the supremes`, `park city music`, `utah wedding bands`, `salt lake city bands`]}
            />
            <Honeypot />
            <ToastContainer />
            <PageHeader title="Weddings" />
            <div className="row">
                <div className="col-12 col-lg-7">
                    <p>When it comes to entertaining your closest friends and family on your
                        wedding day we spare no expense. We play every genre, take requests, and play your 
                        special song. 
                    </p>
                    <form name={process.env.WEDDING_FORM_NAME} onSubmit={handleSubmit} data-netlify="true" method="POST">
                        <input type="hidden" name="form-name" value={process.env.WEDDING_FORM_NAME} />
                        <Form.Group controlId="date">
                            <Form.Label>Date of Wedding</Form.Label>
                            <Form.Control type="date" placeholder="Enter date" name="date" value={date} onChange={handleChange} />

                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="enter your name" type="text" value={name} onChange={handleChange} name="name" />

                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" value={message} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
                <div className="col-12 col-lg-5">
                    <img src={Wedding} />
                </div>
            </div>
        </Layout>
    )
}
