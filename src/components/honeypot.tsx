import React from "react";

const Honeypot = () =>
    <div className="d-none">
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <p>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <p>
                <label>Email: <input type="text" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </div>

    export default Honeypot;
