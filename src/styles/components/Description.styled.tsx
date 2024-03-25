import styled from "styled-components";
import { StyledDescriptionProps } from "./props";
import { Theme } from "../theme";

const StyledDescription = styled.p<StyledDescriptionProps & {theme: Theme}>`
  font-size: 1.1rem;
  color: ${({ theme, $isdark })=> $isdark ? theme.colors.secondary : theme.colors.white};
  transition: 0.3s ease;
`;

export default StyledDescription;
