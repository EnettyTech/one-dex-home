import React from "react";
import styled from "styled-components";
import { Modal } from "antd";

const FullScreenImage = ({ isShowing, hide, url }) => {
  return (
    <Modal
      visible={isShowing}
      destroyOnClose={true}
      footer={null}
      closable={true}
      onCancel={hide}
      width={"70%"}
    >
      <Container>
        <img src={url} alt="project" />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 10em;
`;

export default FullScreenImage;
