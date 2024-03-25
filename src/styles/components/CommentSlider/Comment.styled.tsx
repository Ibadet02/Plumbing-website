import styled from "styled-components";
import { Theme } from "../../theme";

const StyledComment = styled.li<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: .3rem;
  .comment {
    font-size: 1.5rem;
  }
  .user {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .name {
        font-weight: bold;
      }
      .status {
        font-size: 0.8rem;
      }
    }
  }
`;

export default StyledComment;
