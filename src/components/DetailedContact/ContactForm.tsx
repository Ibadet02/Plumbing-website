import React from "react";
import StyledContactForm from "../../styles/components/DetailedContact/ContactForm.styled";
import { ContactFormProps } from "./props";
import StyledHeading from "../../styles/components/Heading.styled";
import StyledDescription from "../../styles/components/Description.styled";
import StyledTextArea from "../../styles/components/TextArea.styled";
import StyledInput from "../../styles/components/Input.styled";
import StyledSubmitButton from "../../styles/components/Buttons/SubmitButton.styled";

const ContactForm: React.FC<ContactFormProps> = ({
  styledHeading,
  styledDescription,
  // formData,
}) => {
  return (
    <StyledContactForm>
      <div className="form-heading">
        <StyledHeading {...styledHeading!}>
          Request a quote from us
        </StyledHeading>
        <StyledDescription {...styledDescription!}>
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </StyledDescription>
      </div>
      <div className="form-box">
        <div className="input-row">
          <StyledInput type="text" name="name" placeholder="Full Name" />
          <StyledInput type="email" placeholder="Email Address" />
        </div>
        <div className="input-row">
          <StyledInput type="tel" placeholder="Phone Number" />
          <StyledInput
            type="text"
            name="postcode"
            pattern="[0-9]{5}"
            placeholder="Postcode"
          />
        </div>
        <StyledTextArea rows={6} cols={50} placeholder="Message" />
        <StyledSubmitButton type="submit">Send Message</StyledSubmitButton>
      </div>
    </StyledContactForm>
  );
};

export default ContactForm;
