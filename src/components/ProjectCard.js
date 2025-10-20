import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export const ProjectCard = ({ title, description, imgUrl, details }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={details ? handleShow : undefined} style={{ cursor: details ? 'pointer' : 'default' }}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {details && (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="project-details">
              <p className="project-description">{details.fullDescription}</p>
              
              {details.techStack && (
                <div className="tech-stack mb-4">
                  <h5>Tech Stack</h5>
                  <div className="tech-badges">
                    {details.techStack.map((tech, idx) => (
                      <span key={idx} className="badge bg-primary me-2 mb-2">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {details.features && (
                <div className="features mb-4">
                  <h5>Features</h5>
                  <ul>
                    {details.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {details.sections && (
                <div className="sections mb-4">
                  <h5>Sections Included</h5>
                  <ul>
                    {details.sections.map((section, idx) => (
                      <li key={idx}><strong>{section.name}</strong> - {section.description}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-links d-flex gap-3 mt-4 flex-wrap">
                {details.github && details.github !== "#" && (
                  <a href={details.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Github size={20} style={{ marginRight: '8px' }} />
                    View on GitHub
                  </a>
                )}
                {details.vercel && details.vercel !== "#" && (
                  <a href={details.vercel} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <ExternalLink size={20} style={{ marginRight: '8px' }} />
                    Live Demo
                  </a>
                )}
                {details.github === "#" && (
                  <span className="text-muted" style={{ padding: '10px 0' }}>GitHub link coming soon</span>
                )}
                {details.vercel === "#" && (
                  <span className="text-muted" style={{ padding: '10px 0' }}>Live demo coming soon</span>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}
