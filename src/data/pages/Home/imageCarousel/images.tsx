import carousel1 from "../../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../../assets/images/carousel-3.jpg";
import { ImageCarouselProps } from "../../../../components/ImageCarousel/props";
const imageCarousel: ImageCarouselProps = {
  images: [
    {
      src: carousel1,
      alt: "carousel-1",
    },
    {
      src: carousel2,
      alt: "carousel-2",
    },
    {
      src: carousel3,
      alt: "carousel-3",
    },
  ],
};

export default imageCarousel;
