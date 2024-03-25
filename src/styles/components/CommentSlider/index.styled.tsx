import styled from "styled-components";

const StyledCommentSlider = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 30rem;
  width: 35rem;
  /* overflow-y: auto; */
  .swiper-slide-shadow-top {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }

  .swiper-slide-shadow-bottom {
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
`;

export default StyledCommentSlider;
