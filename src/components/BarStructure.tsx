import { Link } from "react-router-dom";
import StyledBarStructure from "../styles/components/BarStructure.styled";
import StyledLinkGroup from "../styles/components/LinkGroup.styled";
import StyledLogo from "../styles/components/Logo.styled";
import { BarStructureProps } from "./props";
import StyledBarLink from "../styles/components/BarLink.styled";
import ContactMe from "./ContactMe";

const BarStructure: React.FC<BarStructureProps> = ({
  links,
  isLinkBordered,
  styledLogo,
}) => {
  return (
    <StyledBarStructure>
      <StyledLogo to={"/"} {...styledLogo}>
        <div className="top">DC</div>
        <div className="bottom">plumbing</div>
      </StyledLogo>
      <StyledLinkGroup>
        {links.map((link, index) => {
          return (
            <StyledBarLink
              key={link.id}
              style={{
                borderRight:
                  isLinkBordered && index !== links.length - 1
                    ? ".1rem solid white"
                    : "none",
              }}
            >
              <Link to={link.href}>{link.text}</Link>
            </StyledBarLink>
          );
        })}
      </StyledLinkGroup>
      <ContactMe />
    </StyledBarStructure>
  );
};

export default BarStructure;
