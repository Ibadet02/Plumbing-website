import StyledNavbar from "../../styles/components/Navbar/index.styled";
import StyledSection from "../../styles/pages/Section.styled";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledSection $height="100%">
        {
          true ? <DesktopNavbar /> : <MobileNavbar />
        }
      </StyledSection>
    </StyledNavbar>
  );
};

export default Navbar;
