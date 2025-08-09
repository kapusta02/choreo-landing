import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Footer.css'

export const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div className="bg-dark py-3">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <a
                            className="logo link"
                            onClick={scrollTop}
                            style={{ display: 'inline-block' }}
                        >
                            <img
                                src="../../../public/images/logo.png"
                                alt="logo"
                                className="img-fluid"
                                style={{ maxWidth: '200px', height: 'auto' }}
                            />
                        </a>
                    </Col>

                    <Col
                        xs={12}
                        md={6}
                        className="d-flex flex-column flex-md-row justify-content-md-end align-items-center text-center text-md-start"
                    >
                        <div
                            style={{
                                marginRight: '20px',
                                color: 'white',
                                display: 'flex',
                                gap: '15px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px',
                                marginTop: '10px'
                            }}
                        >
                            <Link
                                to="https://wa.me/77478114235"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                <FaWhatsapp size={24} color="white" />
                            </Link>
                            <Link
                                to="https://www.instagram.com/choreographers.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                <FaInstagram size={24} color="white" />
                            </Link>
                        </div>

                        <div>
                            <a
                                href="mailto:choreographerkz@mail.ru"
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                choreographerkz@mail.ru
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}