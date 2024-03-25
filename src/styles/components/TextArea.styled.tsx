import styled from "styled-components";
import { Theme } from "../theme";

const StyledTextArea = styled.textarea<{theme: Theme}>`
  padding: 0.5rem;
  border-radius: 0.3rem;
  resize: none;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  width: 100%;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

export default StyledTextArea;