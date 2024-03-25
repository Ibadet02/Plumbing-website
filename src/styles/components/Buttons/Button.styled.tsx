import styled from "styled-components";
import { Theme } from "../../theme";

const StyledButton = styled.button<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  padding: 0.9rem 1.9rem;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: flex-start;
  transition: 0.15s ease-in;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default StyledButton;
