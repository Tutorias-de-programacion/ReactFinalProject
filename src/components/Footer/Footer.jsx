import { Link /*Or NavLink */} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import logo from '../../Assets/img/reactflixLogo.png'
import './Footer.css'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"


//Please use <Link> or <NavLink> instead of <a> for more information:
//Link https://reactrouter.com/en/main/components/link
//NavLink https://reactrouter.com/en/main/components/nav-link

const Footer = () => {
    return (
        <Container fluid className="footBg pt-3">
            <Container>
                <Row>
                    <Col>
                        <p><BsLinkedin /> <BsGithub /> <BsInstagram /> <BsTwitter /> <BsYoutube /></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}><p>About Reactflix</p></Col>
                    <Col xs={12} md={3}><p>Github Repo</p></Col>
                    <Col xs={12} md={3}><p>API</p></Col>
                    <Col xs={12} md={3}><p>Other Resources</p></Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="mb-3 b">Back to top</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>©2022-2023 Reactflix Inc.</p>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src={logo} fluid alt="Netflix Logo" />
                    </Col>
                    <Col></Col>    
                </Row>   
            </Container>
        </Container>
    );
}
 
export default Footer;  