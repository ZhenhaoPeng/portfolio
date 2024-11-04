import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 检查邮箱有效性
    if (email && email.indexOf("@") > -1) {
      sendSubscriptionEmail(email);
    } else {
      setStatus("error");
      setMessage("Please enter a valid email address.");
    }
  };

  const sendSubscriptionEmail = (email) => {
    setStatus("sending");

    // EmailJS 配置 - 使用环境变量代替硬编码
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // 检查是否正确获取环境变量
    if (!serviceID || !templateID || !publicKey) {
      console.error(
        "Missing EmailJS configuration. Check your environment variables."
      );
      setStatus("error");
      setMessage("Configuration error. Please try again later.");
      return;
    }

    // 模板参数
    const templateParams = {
      to_name: "Your Name", // 您的名字
      from_email: email, // 用户的邮箱地址
      message: `Please subscribe this email to your newsletter: ${email}`, // 消息内容
    };

    // 使用 EmailJS 发送邮件
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setMessage("Subscription request sent successfully!");
      },
      (error) => {
        console.error("FAILED...", error);
        setStatus("error");
        setMessage(
          "Failed to send subscription request. Please try again later."
        );
      }
    );
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br /> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
