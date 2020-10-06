import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import setPageTitle from "../utils/pageTitle";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { SDLink } from "../components/defaultLink";
import logo from "../img/logo.png";

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  max-width: 400px;
  margin: 40px auto 20px;
`;

const PageHeader = styled.h3`
  padding-top: 20px;
  margin: 0;
  padding-bottom: 30px;
`;

const Para = styled.p`
  font-size: 1.1rem;
  padding-bottom: 30px;
  margin: 0;
`;

function PrivacyPolicy() {
  useEffect(() => {
    setPageTitle("Privacy Policy");
  });
  return (
    <Row className="bg-light">
      <Col>
        <ContentContainer>
          <ImageContainer>
            <Image src={logo} fluid />
          </ImageContainer>
          <PageHeader>Privacy Policy</PageHeader>
          <Para>
            Your privacy is important to us. It is CMLogger's policy to respect
            your privacy regarding any information we may collect from you
            across our website,{" "}
            <SDLink href="https://cmlogger.com/">
              https://cmlogger.com/
            </SDLink>
            , and other sites we own and operate.
          </Para>
          <Para>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </Para>
          <Para>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </Para>
          <Para>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </Para>
          <Para>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </Para>
          <Para>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </Para>
          <Para>
            Your continued use of the website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to{" "}
            <SDLink href="https://josephoravbiere.com/#contact">
              contact the developer
            </SDLink>
            .
          </Para>
          <Para>This policy is effective as of 16 June 2020.</Para>
        </ContentContainer>
      </Col>
    </Row>
  );
}

export default PrivacyPolicy;
