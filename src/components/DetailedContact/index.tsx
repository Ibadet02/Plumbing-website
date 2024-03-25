import StyledDetailedContactInfo from "../../styles/components/DetailedContact/DetailedContactInfo.styled";
import StyledDetailedContact from "../../styles/components/DetailedContact/index.styled";
import ContactForm from "./ContactForm";
import { DetailedContactProps } from "./props";

const DetailedContact: React.FC<DetailedContactProps> = ({ contactForm }) => {
  return (
    <StyledDetailedContact>
      <StyledDetailedContactInfo>
        <div className="location">
          <h3>Location</h3>
          <p className="location--address">Address: 1234 Budapest, Hungary</p>
        </div>
        <div className="contact-us">
          <h3>Contact us</h3>
          <p className="contact-us--email">
            Email: ibadetismayilov20@gmail.com
          </p>
          <p className="contact-us--phone">Phone: +36206211283</p>
        </div>
        <p className="additional-info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo itaque
          voluptatem illum ea exercitationem. Pariatur, quibusdam, magni libero
          temporibus iusto, deserunt recusandae ratione dolorem in consectetur
          minima ipsa numquam quidem.
        </p>
      </StyledDetailedContactInfo>
      <ContactForm {...contactForm} />
    </StyledDetailedContact>
  );
};

export default DetailedContact;
