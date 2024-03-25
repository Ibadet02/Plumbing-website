import styled from "styled-components";
import { Theme } from "../../theme";

const StyledNavbar = styled.nav<{theme: Theme}>`
  width: 100%;
  height: ${({ theme }) => theme.heights.navbar};
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};
  z-index: 1000;
`;

export default StyledNavbar;
