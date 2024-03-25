import styled from "styled-components";
import { FlowingContentType as StyledContactInfoProps } from "./types";
import { Theme } from "../theme";

const StyledContactInfo = styled.aside<
  StyledContactInfoProps & { theme: Theme }
>`
  width: 19rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  bottom: 0;
  right: 0;
  transform: translateY(50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  .contact-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .phone {
    font-weight: 900;
  }
`;

export default StyledContactInfo;
