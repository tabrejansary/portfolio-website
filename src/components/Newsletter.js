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

    const serviceID = 'service_yomakl9gmail';
    const templateID = 'template_634w6wj';
    const userID = 'rMHefcFD5evprxooR';

    const templateParams = {
      email: email,
      to_email: 'tbrz92648@gmail.com'
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
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5} className="mb-3 mb-md-0">
            <h3>Subscribe to Newsletter<br /> & Never Miss Latest BlogPost Updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx d-flex flex-column flex-md-row gap-2">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="form-control form-control-lg"
                  style={{
                    padding: '15px 25px',
                    borderRadius: '50px',
                    border: 'none',
                    outline: 'none',
                    flex: '1',
                    minWidth: '250px',
                    fontSize: '16px',
                    height: 'auto',
                    boxShadow: 'none',
                    backgroundColor: '#f8f9fa'
                  }}
                />
                <button 
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    padding: '15px 30px',
                    borderRadius: '50px',
                    border: 'none',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    fontSize: '16px'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}