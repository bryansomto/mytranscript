import React, {useEffect} from 'react';
import $ from 'jquery';
import { Form, Button, Nav, Row, Col } from 'react-bootstrap';





const Login = () => {

// 	const [data, setData] = React.useState(null);
//     React.useEffect(() => {
//       fetch("/").then((res) => res.json()).then((data) => setData(data.error));
//     }, []);

	
	$(document).ready(function() {
		$("#submitButton").click(function(event) {
			event.preventDefault();
			console.log('still here');

			let formData = {
				username: $("[name = 'username']").val(),
				password: $("[password = 'password']").val(),
			};

			console.log(formData);

			$.ajax({
				url: 'http://localhost:3001/api',
				method: 'POST',
				data: formData,
				dataType: 'json',
			})
			.done(function(result) {
				// $("#error").html(result);
				console.log('success');
			})
			.fail(function(result) {
				// $("#error").html(result);
				console.log('fail');
			});
		});
	});
    
	return(
		<section  className="pt-5" style={{backgroundImage: 'url(./image/man.jpg)', height: '40em', backgroundRepeat: 'repeat'}}>
			<input type='submit' id='button1' />
			<Form action='./' method='POST' className="form col-10 col-md-4 m-auto rounded p-5" style={{background: 'rgba(0,0,0,.4)', backgroundRepeat: 'repeat'}}>
				<Form.Group as={Row} controlId="formUsername" className="mb-3">
				<Col xs=''>
					<Form.Control type="text" name="username" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Username"  />
					<Form.Text></Form.Text>
				</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formPassword" className="mb-3">
				<Col xs=''>
					<Form.Control type="password" name="password" placeholder="Password" className="rounded-pill" style={{color: '#fff', background: 'rgba(0,0,0,.1)'}} placeholder="Password" />
					<Form.Text></Form.Text>
				</Col>
				</Form.Group>
				<Button type='submit' id='submitButton' variant='btn btn-primary' className="rounded-pill col-12 mb-1"> Login </Button>
				<div className='text-muted text-center'>
					<small className='inline'> Don't have an account? <Nav.Link href="/createaccount" id='signup' className='d-inline-block p-0'>Sign Up</Nav.Link> </small>
				</div>
				<small id='error'></small>
			</Form>
			
		</section>
	)
}

export default Login;