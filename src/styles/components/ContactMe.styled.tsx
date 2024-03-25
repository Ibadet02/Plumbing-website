import styled from "styled-components";
import { Theme } from "../theme";

const StyledContactMe = styled.a<{ theme: Theme }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-left: ${({ theme }) => `.1rem solid ${theme.colors.white}`};
  padding-left: 4rem;
  .icon-wrapper {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: .6rem;
    border-radius: 50%;
    font-size: 1.6rem;
  }
  .text {
    .top {
      font-size: 1.2rem;
    }
    .bottom {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;

export default StyledContactMe;
