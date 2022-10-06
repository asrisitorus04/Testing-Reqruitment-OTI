import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Head from "next/head";
import Card from "react-bootstrap/Card";


export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <div>
        <Card className="box">
          <Card.Body>
            <div className="log">
              <Card.Title className="login">login</Card.Title>
              <Card.Subtitle className="content mb-2 text-muted">
              Welcome back, enter your credentials to continue.
              </Card.Subtitle>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="tittle-form">Email</Form.Label>
                <Form.Control className="box-form" type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="tittle-form">Password</Form.Label>
                <Form.Control className="box-form" type="password" placeholder="Enter Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="check" type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="submit" variant="primary" type="submit">
                <p className="klik-submit">login</p>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
