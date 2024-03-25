import styled from "styled-components";
import { StyledDescriptionProps } from "./props";
import { Theme } from "../theme";

const StyledDescription = styled.p<StyledDescriptionProps & {theme: Theme}>`
  font-size: 1.1rem;
  /* font-weight: 500; */
  color: ${({ theme, $isdark })=> $isdark ? theme.colors.secondary : theme.colors.white};
`;

export default StyledDescription;
