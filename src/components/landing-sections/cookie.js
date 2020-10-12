import React from "react"
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import useLocalStorage from "../../hooks/useLocalStorage"

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`

const ContentContainer = styled.div`
  background: #212529;
  padding: 20px 15px;
  color: #fff;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 25px 15px;
    max-width: 750px;
    justify-content: center;
  }
`

const TextContainer = styled.div`
  margin-bottom: 25px;

  @media (min-width: 768px) {
    max-width: 400px;
    margin-bottom: 0;
  }
`

const ConsentText = styled.p`
  font-size: 1.05rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const BtnContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 30px;
  }
`

const AcceptBtn = styled(Button)`
  margin-right: 20px;
`

const PrivacyLink = styled(Button)`
  color: #fff;

  &:hover {
    color: #000;
  }
`

export default () => {
  const [cookieConsentAccepted, setCookieConsentAcceptance] = useLocalStorage(
    "cookieConsentAccepted",
    false
  )

  function handleCookieAcception() {
    setCookieConsentAcceptance(true)
  }

  return !cookieConsentAccepted ? (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          <ConsentText>
            We use cookies to personalize your experience. By using this site
            you agree to our use of cookies.
          </ConsentText>
        </TextContainer>
        <BtnContainer>
          <AcceptBtn variant="light" onClick={handleCookieAcception}>
            Got It!
          </AcceptBtn>
          <PrivacyLink
            forwardedAs={Link}
            to="/privacy-policy"
            variant="outline-light"
            target="_blank"
          >
            Learn More
          </PrivacyLink>
        </BtnContainer>
      </ContentContainer>
    </Wrapper>
  ) : null
}
