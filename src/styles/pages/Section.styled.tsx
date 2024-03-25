import styled from "styled-components";
import { StyledSectionProps } from "./props";

const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  height: ${({ $height }) => $height || 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgcolor }) => $bgcolor || 'transparent'};
  background-image: url(${({ $bgimage }) => $bgimage || 'none'});
  padding-block: ${({ $padding_block }) => $padding_block || '0'};
`;

export default StyledSection;
