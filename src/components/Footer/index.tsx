import StyledFooter from "../../styles/components/Footer/index.styled";
import StyledFooterTop from "../../styles/components/Footer/FooterTop.styled";
import StyledFooterBottom from "../../styles/components/Footer/FooterBottom.styled";
import BarStructure from "../BarStructure";
import StyledLinkGroup from "../../styles/components/LinkGroup.styled";
import { BarStructureProps } from "../props";
import StyledBarLink from "../../styles/components/BarLink.styled";
import { Link } from "react-router-dom";
const barStructure: BarStructureProps = {
  links: [
    {
      id: 1,
      text: "Home",
      href: "/",
    },
    {
      id: 2,
      text: "Services",
      href: "/services",
    },
    {
      id: 3,
      text: "About",
      href: "/about",
    },
    {
      id: 4,
      text: "Contact",
      href: "/contact",
    },
  ],
  isLinkBordered: true,
  styledLogo: {
    $font_size: "4rem",
    $font_weight: "900",
  },
};

const linkGroupLinks = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Services",
    href: "/services",
  },
  {
    id: 3,
    text: "About",
    href: "/about",
  },
  {
    id: 4,
    text: "Contact",
    href: "/contact",
  },
  {
    id: 5,
    text: "Contact",
    href: "/contact",
  },
];
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <BarStructure {...barStructure} />
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledLinkGroup>
          {linkGroupLinks.map((link, index) => {
            return (
              <StyledBarLink
                key={link.id}
                style={{
                  borderRight:
                    index !== linkGroupLinks.length - 1
                      ? ".1rem solid white"
                      : "none",
                }}
              >
                <Link to={link.href}>{link.text}</Link>
              </StyledBarLink>
            );
          })}
        </StyledLinkGroup>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;
