import styled from "styled-components";
import StyledSection from "./Section.styled";

const StyledAbsoluteSection = styled(StyledSection)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 15;
  padding-block: 0;
`;

export default StyledAbsoluteSection;
