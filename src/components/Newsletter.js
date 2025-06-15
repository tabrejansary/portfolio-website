import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || email.indexOf("@") === -1) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('sending');
    setMessage('');

 const serviceID = 'service_yomakl9gmail';      // Replace with your EmailJS service ID
    const templateID = 'template_634w6wj';    // Replace with your EmailJS template ID
    const userID = 'rMHefcFD5evprxooR';         // Replace with your EmailJS user/public key

    const templateParams = {
      email: email,
      to_email: 'tbrz92648@gmail.com' // You can pass this to your EmailJS template if you want dynamic recipient
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        clearFields();
      }, (err) => {
        setStatus('error');
        setMessage('Failed to send. Please try again later.');
      });
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to Newsletter<br /> & Never Miss Latest BlogPost Updates</h3>

            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
