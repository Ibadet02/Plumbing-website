import styled from "styled-components";
import { StyledContentHeadingProps } from "./props";
import { Theme } from "../theme";

const StyledContentHeading = styled.h2<StyledContentHeadingProps & {theme: Theme}>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme, $isdark})=> $isdark ? theme.colors.secondary : theme.colors.white};
  transition: 0.3s ease;
`;

export default StyledContentHeading;
