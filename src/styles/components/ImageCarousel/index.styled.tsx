import styled from "styled-components";
import { Theme } from "../../theme";

const StyledImageCarousel = styled.div<{theme: Theme}>`
  position: relative;
  width: 100%;
  aspect-ratio: 10/5;
  .image-group {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
  }
  .img-slider--dot-btn-group {
    display: flex;
    align-items: center;
    gap: .9rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    .img-slider--dot-btn {
      cursor: pointer;
      padding: .35rem;
      background: none;
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 50%;
      transition: transform .3s;
      &.active {
        transform: scale(1.4);
      }
      .active-dot {
        width: .4rem;
        height: .4rem;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
      }
    }
  }
`;

export default StyledImageCarousel;