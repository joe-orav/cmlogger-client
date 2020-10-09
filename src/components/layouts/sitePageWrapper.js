import React, { useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import setPageTitle from "../../utils/pageTitle"
import styled from "styled-components"

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
`

const PageHeader = styled.h1`
  padding-top: 20px;
  margin: 0;
  padding-bottom: 30px;
  font-size: 1.8rem;
`

export const PageHeader2 = styled.h2`
  font-size: 1.5rem;
  padding-bottom: 20px;
  margin: 0;
`

export const Para = styled.p`
  font-size: 1.1rem;
  padding-bottom: 30px;
  margin: 0;
`

export const ListItem = styled.li`
  margin-bottom: 10px;
`

export default ({ title, children }) => {
  useEffect(() => {
    setPageTitle(title)
  })
  return (
    <Row>
      <Col>
        <ContentContainer>
          <PageHeader>{title}</PageHeader>
          {children}
        </ContentContainer>
      </Col>
    </Row>
  )
}
