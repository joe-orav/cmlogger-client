import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
    margin: 10px 0;
    color: #707070;
    font-size: 1.1rem;
`;

export default () => {
  return (
    <Content>
      <Text>No Data Available</Text>
    </Content>
  );
};
