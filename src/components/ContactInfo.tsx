import StyledContactInfo from "../styles/components/ContactInfo.styled";
import { ContactInfoProps } from "./props";

const ContactInfo: React.FC<ContactInfoProps> = ({ flowing }) => {
  return (
    <StyledContactInfo {...flowing!}>
      <h3>Have an emergency?</h3>
      <p className="contact-text">
        <span>Call this number out!</span>
        <span>We will assist you 24/7</span>
      </p>
      <p className="phone">078569856945</p>
    </StyledContactInfo>
  );
};

export default ContactInfo;
