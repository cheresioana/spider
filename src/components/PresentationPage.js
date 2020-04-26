import React from 'react';
import title from '../res/title.png';
import thinker from '../res/thinking.png';
import '../css/presentationpage.css';
import business from '../res/business.png';
import phone from '../res/phone.png';
import web from '../res/web-serv.png';
import cart from '../res/cart.png';
import call from '../res/call.png';
//reactstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

class PresentationPage extends React.Component {
	render(){
		return(
			
			<Container fluid >
				<Row className="mt-lg-5">
				<Col lg={{span:1, offset:1}} >
					<Image src={title} alt="titlu" className="title"/>
				</Col>
				</Row>
				<Row>
					<Col lg={{span:5, offset:4}} sm={12}>
					<p className="title-text text-center">SpiderWeb</p>
					</Col>
				</Row>
				<Row lg={3} className="mt-lg-4 align-items-center">
					<Col lg={{span:1, offset:1}}>
						<Image src={thinker} alt="thinker" className="thinker"/>
					</Col>
					<Col lg={{span:5, offset:2}}>
						<p className="soft-text">Do you have trouble reaching your clients and customers online? Poor web design might be the reason why! We live in a digital era where everything can be done on the Internet. Modern users value their time. They go online to shop and book services, and if they cannot find their way around your website – you are losing money.
						</p><p className="soft-text mt-1"> 
SpiderWeb offers a wide range of web development services that will help you put your business on the map and start making a profit. 
						</p>
					</Col>
				</Row>

				<Row>
					<Image src={business} alt="titlu" className="business"/>
				</Row>
				<Row className="justify-content-center">
					<Col lg={2}><p className="intro-text mt-4 services">About us</p></Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={6}>
					<p className="soft-text mt-1 "> 
					We are a beautiful team of developers and we enjoy creating websites and mobile apps. Our goal is to help business develop an online identity, because in the era of thechnology, every beautiful business deserves a beautiful website. We work together, designers and developers, in order to give you the best product in the market. </p>
					<p className="soft-text mt-1 text-center"> Join us and lets give your business the most artsy user-friendly look in the online world!</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col lg={2}><p className="intro-text mt-4 services">Our services</p></Col>
				</Row>
				<Row className="justify-content-center mt-5">
					<Col lg={2} className="m-2">
						<Row className="justify-content-center"><Image src={phone} alt="titlu" className="service-icon"/></Row>
						<Row className="justify-content-center"><p className="services-text mt-1 services-title">Mobile Apps</p><p className="services-text mt-1"> We will develop iOS and Android applications for your business, test them for performance and efficiency, and upload to Google Play and Apple Store.</p></Row>
					</Col>
					<Col lg={2} className="m-2">
						<Row className="justify-content-center"><Image src={web} alt="titlu" className="service-icon"/></Row>
						<Row className="justify-content-center"><p className="services-text mt-1 services-title">Webdesign</p><p className="services-text mt-1">Our team will give your website a new responsive, eye-catching, and user-friendly design that will attract visitors and persuade them to buy.</p></Row>
					</Col>
					<Col lg={2} className="m-2">
						<Row className="justify-content-center"><Image src={cart} alt="titlu" className="service-icon"/></Row>
						<Row className="justify-content-center"><p className="services-text mt-1 services-title">Ecommerce</p><p className="services-text mt-1">We can create an e-commerce website for you that will help you triple the sales of your products and services online.</p></Row>
					</Col>
				</Row>	
				<Row className="justify-content-center">
					<Col lg={4}><p className="intro-text mt-5 services">Contact us!</p></Col>
				</Row>
				
				
				<Row className="justify-content-center align-items-center mt-4">
					<Col lg={1} className="justify-content-right"><Image src={call} alt="titlu" className="call"/></Col>
					<Col lg={1}><Row><p className="intro-text text-left call-text">+400758055598</p></Row>
								<Row><p className="intro-text text-left call-text">+400758055598</p></Row>
					</Col>
				</Row>
			
			
				<Row className="justify-content-center align-items-center mt-5">
				<Col lg={6}>
					<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
					    <Form.Label className="soft-text">Your email address</Form.Label>
					    <Form.Control type="email" placeholder="name@gmail.com" className="input-email"/>
					  </Form.Group>
					  <Form.Group controlId="exampleForm.ControlTextarea1">
					    <Form.Label className="soft-text">Your message</Form.Label>
					    <Form.Control as="textarea" rows="4" />
					  </Form.Group>
					<Button className="submit-btn" type="submit">
					    Send
					 </Button>
					</Form>

				</Col>
				</Row>
				
			</Container>
			)
	}
} 

export default PresentationPage;