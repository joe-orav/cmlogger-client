import React from "react";
import styled, { keyframes } from "styled-components";

const IconContainer = styled.div`
  width: 100%;
`;

const LdsRingKeyFrames = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LdsRing = styled.div`
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 5px solid #686868;
    border-radius: 50%;
    animation: ${LdsRingKeyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #686868 transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const LoadingIcon = () => {
  return (
    <IconContainer>
      <LdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsRing>
    </IconContainer>
  );
};

export default LoadingIcon;
