import styled from "styled-components";
import { Theme } from "../theme";

const StyledInput = styled.input<{theme: Theme}>`
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  width: 100%;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

export default StyledInput;