import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Container,
  Wrapper,
  Header,
  Title,
  Desc,
  Form,
  FormInput,
  Buttons,
  Button,
  SuccessContainer,
  Success,
} from './ContactUsModal.styled';

export const ContactUsModal = ({ closeModal }) => {
  const [success, setSuccess] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

  async function sendEmail(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${REACT_APP_USER_ID}`,
      );
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container toggle={toggle}>
      <Wrapper>
        {!success ? (
          <>
            <Header>
              <Title>NEEM CONTACT OP</Title>
              <Desc>
                We stellen het zeer op prijs dat u de tijd neemt om contact op
                te nemen. Vul alstublieft het formulier in.
              </Desc>
            </Header>
            <Form onSubmit={sendEmail}>
              <FormInput type="text" name="name" placeholder="Name*" required />
              <FormInput
                type="email"
                name="user_email"
                placeholder="Email*"
                required
              />
              <FormInput
                as="textarea"
                name="message"
                placeholder="Enter your message here"
                required
                rows={3}
              />
              <Buttons>
                <Button type="submit">Send</Button>
                <Button
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  Close
                </Button>
              </Buttons>
            </Form>
          </>
        ) : (
          <SuccessContainer>
            <Success>Your email has been sent successfully.</Success>
            <Button
              onClick={() => {
                closeModal(false);
                setToggle((toggle) => !toggle);
              }}
            >
              Close
            </Button>
          </SuccessContainer>
        )}
      </Wrapper>
    </Container>
  );
};
