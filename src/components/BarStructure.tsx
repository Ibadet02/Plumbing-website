import { Link } from "react-router-dom";
import StyledBarStructure from "../styles/components/BarStructure.styled";
import StyledLinkGroup from "../styles/components/LinkGroup.styled";
import StyledLogo from "../styles/components/Logo.styled";
import { BarStructureProps } from "./props";
import StyledBarLink from "../styles/components/BarLink.styled";
import StyledContactMe from "../styles/components/ContactMe.styled";

const BarStructure: React.FC<BarStructureProps> = ({
  links,
  isLinkBordered,
}) => {
  return (
    <StyledBarStructure>
      <StyledLogo to={"/"}>
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
      <StyledContactMe href={`tel:${"+36206211283"}`}>
        <div className="icon">XX</div>
        <div className="text">
          <div className="top">Contact Me!</div>
          <div className="bottom">+36 20 621 1283</div>
        </div>
      </StyledContactMe>
    </StyledBarStructure>
  );
};

export default BarStructure;
