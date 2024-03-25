import { ImageProps } from "../props";

export interface ImageCarouselProps {
  images: ImageProps[];
}

export interface CarouselControllerProps {
    isNext: boolean;
    onClick: () => void;
}