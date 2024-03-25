import styled from "styled-components";
import { StyledHeadingProps } from "./props";
import { Theme } from "../theme";

const StyledHeading = styled.h3<StyledHeadingProps & {theme: Theme}>`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme, $isdark })=> $isdark ? theme.colors.black : theme.colors.white};
`;

export default StyledHeading;
