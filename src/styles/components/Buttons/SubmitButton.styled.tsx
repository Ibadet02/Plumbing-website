import styled from "styled-components";
import { Theme } from "../../theme";

const StyledSubmitButton = styled.button<{theme: Theme}>`
  background-color: ${({ theme }) => theme.colors.violetBlue};
  color: white;
  padding: 0.8rem 1.9rem;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
  align-self: flex-start;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;

export default StyledSubmitButton;
