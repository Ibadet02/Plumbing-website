import styled from "styled-components";
import { StyledInfoBoxProps } from "./props";

const StyledInfoBox = styled.div<StyledInfoBoxProps>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default StyledInfoBox;
