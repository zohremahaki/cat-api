import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;
const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  max-width: 40rem;
  z-index: 100;
  overflow: hidden;
`;
const Header = styled.h2`
  background: #4f005f;
  color: white;
  padding: 1rem;
  text-align: center;
`;
const Content = styled.p`
  padding: 1rem;
`;
const Actions = styled.p`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = () => {
  return (
    <div>
      <BackdropStyle />
    </div>
  );
};
const ModalOverlay = (props) => {
  <ModalOverlayStyle>
    <Header>{props.title}</Header>
    <Content>{props.message}</Content>
    <Actions>
      <footer>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </Actions>
  </ModalOverlayStyle>;
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop confirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
