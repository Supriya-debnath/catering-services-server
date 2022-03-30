import { Button } from 'bootstrap';
import { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth/useAuth';
import './Login.css';

const Login = () => {
    const { logInError, loading, handleUserLogin, signInWithGoogle } =
        useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        handleUserLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <>
            <div className="login-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6}>
                                {!loading && (
                                    <>
                                        <Form
                                            className="mx-auto pt-4 pb-4 w-75"
                                            onSubmit={handleLoginSubmit}
                                        >
                                            <h2 className="text-center fw-bold">
                                                LOG IN
                                            </h2>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Email"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="BasicPassword"
                                            >
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Pass"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            <div className="d-grid gap-2 my-4 login-input">
                                                <Button
                                                    variant="secondary"
                                                    type="submit"
                                                    className="submit-forms"
                                                >
                                                    Sign In
                                                </Button>
                                            </div>
                                            <p className="text-center text-primary">
                                                New User?
                                                <Link
                                                    to="/register"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    &nbsp;Please Register
                                                </Link>
                                            </p>
                                        </Form>
                                        <div className="google-btn">
                                            <button 
                                                onClick={handleGoogleSignIn}
                                            >
                                                Google Sign in
                                            </button>
                                        </div>
                                    </>
                                )}

                                {loading && (
                                    <div className="text-center">
                                        <Spinner
                                            animation="border"
                                            variant="info"
                                        />
                                    </div>
                                )}
                                {logInError && (
                                    <Alert
                                        variant="danger"
                                        className="w-75 mx-auto"
                                    >
                                        {logInError}
                                    </Alert>
                                )}
                            </Col>
                            <Col xs={12} md={6}>
                                <img
                                    className="img-fluid imag"
                                    src="https://login.gov/assets/img/login-gov-600x314.png"
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Login;