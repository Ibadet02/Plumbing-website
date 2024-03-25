import styled from "styled-components";
import { Theme } from "../../../theme";

const StyledServiceType = styled.li<{ theme: Theme }>`
  list-style-type: none;
  padding: 1.2rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    .service-type--icon-box {
      .icon-wrapper {
        background-color: ${({ theme }) => theme.colors.white};
        svg {
            color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    h2, p {
        color: ${({ theme }) => theme.colors.white};
    }
  }
  .service-type--icon-box {
    height: 9rem;
    display: flex;
    align-items: center;
    .icon-wrapper {
      transition: 0.3s ease;
      padding: 0.8rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
      svg {
        color: ${({ theme }) => theme.colors.white};
        transition: 0.3s ease;
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
  .service-type--content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default StyledServiceType;
