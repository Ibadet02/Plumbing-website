import StyledPage from "../../styles/pages/index.styled";
import StyledSection from "../../styles/pages/Section.styled";
import OfferedServices from "./OfferedServices";
import offeredServices from "../../data/pages/Services/OfferedServices/offeredServices";
import theme from "../../styles/theme";

const Services = () => {
  return (
    <StyledPage>
      <StyledSection $bgcolor={theme.colors.light} $padding_block="4rem">
        <OfferedServices {...offeredServices} />
      </StyledSection>
    </StyledPage>
  );
};

export default Services;
