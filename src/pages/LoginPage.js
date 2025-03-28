import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../styles/login.scss";
import ForgotPasswordForm from "../forms/ForgotPasswordForm.js";
import WebAuthnLoginForm from "../forms/WebAuthnLoginForm.js";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [useWebAuthn, setUseWebAuthn] = useState(true);

  return (
    <Container fluid className="login-container" style={{ height: "100vh" }}>
      <Row className="login-row">
        <Col className="login-left-col"></Col>
        <Col className="login-right-col">
          <div className="login-right-col-inner-container">
            <img
              src="https://paymaster-document.s3.ap-south-1.amazonaws.com/logo.webp"
              alt="logo"
              width="100%"
            />
            {!forgotPassword ? (
              <>
                {useWebAuthn ? (
                  <WebAuthnLoginForm
                    setUseWebAuthn={setUseWebAuthn}
                    username={username}
                    setUsername={setUsername}
                    setIsTwoFactorEnabled={setIsTwoFactorEnabled}
                  />
                ) : (
                  <LoginForm
                    username={username}
                    isTwoFactorEnabled={isTwoFactorEnabled}
                  />
                )}
              </>
            ) : (
              <>
                <ForgotPasswordForm setForgotPassword={setForgotPassword} />
              </>
            )}
          </div>

          {/* Conditionally render "Forgot Password" and "Login Instead" */}
          {!useWebAuthn &&
            (!forgotPassword ? (
              <span
                className="span-text"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password
              </span>
            ) : (
              <span
                className="span-text"
                onClick={() => setForgotPassword(false)}
              >
                Login Instead
              </span>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
