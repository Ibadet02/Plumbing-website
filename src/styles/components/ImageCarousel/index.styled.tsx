import styled from "styled-components";

const StyledImageCarousel = styled.div`
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
    gap: .5rem;
    position: absolute;
    bottom: .5rem;
    left: 50%;
    transform: translateX(-50%);
    .img-slider--dot-btn {
      cursor: pointer;
    }
  }
`;

export default StyledImageCarousel;