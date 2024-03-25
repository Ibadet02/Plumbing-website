import styled from "styled-components";
import { StyledCarouselControllerProps } from "./props";
import { Theme } from "../../theme";

const StyledCarouselController = styled.button<
  StyledCarouselControllerProps & { theme: Theme }
>`
  position: absolute;
  font-size: 1.5rem;
  bottom: 0;
  ${({ $isnext }) => ($isnext ? "right: 0;" : "left: 0;")}
  width: 5rem;
  background: none;
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100% - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  .icon-wrapper {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

export default StyledCarouselController;
