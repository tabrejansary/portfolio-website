import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-image1.PNG";
import projImg2 from "../assets/img/project-image2.png";
import projImg3 from "../assets/img/project-image1.PNG";
import vaultflowImg from "../assets/img/vaultflow-project.png";
import digitalAgencyImg from "../assets/img/digital-agency-project.png";
import healnetImg from "../assets/img/healnet-project.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Frontend Projects for Tab 1
  const frontendProjects = [
    {
      title: "VaultFlow",
      description: "Modern Analytics Landing Page",
      imgUrl: vaultflowImg,
      details: {
        fullDescription: "A modern, responsive landing page built with React and TailwindCSS, based on a Figma design.",
        techStack: ["React 18", "TailwindCSS", "Lucide Icons"],
        features: [
          "🎨 Pixel-perfect implementation of Figma design",
          "📱 Fully responsive design",
          "⚡ Built with React 18",
          "🎭 Styled with TailwindCSS",
          "🎯 Modern UI components with Lucide icons",
          "🌈 Beautiful gradients and animations"
        ],
        github: "https://github.com/tabrejansary/VaultFlow--Modern-analytics-design-1",
        vercel: "https://vault-flow-modern-analytics-design.vercel.app/"
      }
    },
    {
      title: "Digital Agency",
      description: "Digital Agency Landing Page",
      imgUrl: digitalAgencyImg,
      details: {
        fullDescription: "A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme with neon green accents matching the Figma design.",
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
        features: [
          "✨ Modern and clean design",
          "🎨 Dark theme with neon green accents",
          "📱 Fully responsive",
          "⚡ Built with Next.js 14 and TypeScript",
          "🎯 Tailwind CSS for styling",
          "🔥 Smooth animations and transitions"
        ],
        github: "https://github.com/tabrejansary/Digital-Agency-design-2",
        vercel: "https://digital-agency-design-2.vercel.app/"
      }
    },
    {
      title: "HealNet",
      description: "Healthcare Landing Page",
      imgUrl: healnetImg,
      details: {
        fullDescription: "A modern, responsive healthcare landing page built with React, featuring a beautiful UI design inspired by the Figma mockup.",
        techStack: ["React", "Lucide Icons", "CSS3"],
        features: [
          "🎨 Modern and clean design with gradient backgrounds",
          "📱 Fully responsive layout",
          "🏥 Hero section with doctor showcase",
          "🏥 Easy 3-step booking process",
          "🏥 Services overview",
          "🏥 Patient testimonials"
        ],
        github: "https://github.com/tabrejansary/Healthcare-landing-page-design-3",
        vercel: "https://healthcare-landing-page-design-3.vercel.app/"
      }
    }
  ];

  // Original projects for Tab 2
  const otherProjects = [
    {
      title: "NepYatra",
      description: "A Smart Travel Itinerary Planner",
      imgUrl: projImg1,
    },
    {
      title: "Fee Management System",
      description: "A Fee Management Portal",
      imgUrl: projImg2,
    },
    {
      title: "NepYatra",
      description: "A Smart Travel Itinerary Planner",
      imgUrl: projImg1,
    },
    {
      title: "NepYatra",
      description: "A Smart Travel Itinerary Planner",
      imgUrl: projImg1,
    },
    {
     title: "Fee Management System",
      description: "A Fee Management Portal",
      imgUrl: projImg2,
    },
    {
  title: "NepYatra",
      description: "A Smart Travel Itinerary Planner",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of projects showcasing my skills, creativity, and technical expertise.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3 className="text-center mb-4">Frontend Projects</h3>
                      <Row>
                        {
                          frontendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          otherProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
