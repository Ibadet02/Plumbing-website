import React from "react";
import StyledCommentSlider from "../../styles/components/CommentSlider/index.styled";
import { CommentSliderProps } from "./props";
import Comment from "./Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const CommentSlider: React.FC<CommentSliderProps> = ({ comments }) => {
  return (
    <StyledCommentSlider>
      <Swiper
        direction="vertical"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.6}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {comments.map((commentInfo) => (
          <SwiperSlide
            key={commentInfo.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Comment {...commentInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCommentSlider>
  );
};

export default CommentSlider;
