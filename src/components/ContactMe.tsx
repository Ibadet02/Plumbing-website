import StyledContactMe from "../styles/components/ContactMe.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const ContactMe = () => {
  return (
    <StyledContactMe href={`tel:${"+36206211283"}`}>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="text">
        <div className="top">Contact Me!</div>
        <div className="bottom">+36 20 621 1283</div>
      </div>
    </StyledContactMe>
  );
};

export default ContactMe;
