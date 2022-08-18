import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import EmailJs from "@emailjs/browser";
import { Modal } from "antd";

export default function Contact() {
  const [formValue, setFormValue] = React.useState({
    firstName: "",
    email: "",
    subject: "",
    content: "",
  });

  const sendmail = async () => {
    const { content, email, firstName, subject } = formValue;
    try {
      const send = await EmailJs.send("service_mz2yrj7", "template_18nblau", {
        from_name: firstName,
        message: content,
        subject: subject,
        from_email: email,
      });
      if (send.status === 200) {
        Modal.success({
          content: "Send success",
        });
        setFormValue({
          firstName: "",
          email: "",
          subject: "",
          content: "",
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: Contact.jsx ~ line 30 ~ sendmail ~ error", error);
    }
  };

  const onChangeValue = (evt, key) => {
    const value = evt.target.value;
    setFormValue((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Element name="contact">
      <Wrapper id="contact">
        <div className="lightBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font30 extraBold">Let's get in touch</h1>
            </HeaderInfo>
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Form>
                  <label className="font13">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="font20 "
                    onChange={(value) => onChangeValue(value, "firstName")}
                  />
                  <label className="font13">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20 "
                    onChange={(value) => onChangeValue(value, "email")}
                  />
                  <label className="font13">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="font20 "
                    onChange={(value) => onChangeValue(value, "subject")}
                  />
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 "
                    onChange={(value) => onChangeValue(value, "content")}
                  />
                </Form>
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                    onClick={sendmail}
                  />
                </SumbitWrapper>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex justify-center items-center">
                <img src={Support} className="max-h-80 max-w-80" />
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </Element>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 20px 0 10px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #2d812c;
  background-color: #2d812c;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #369735;
    border: 1px solid #2d812c;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
