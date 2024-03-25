import { CommentSliderProps } from "../CommentSlider/props";
import { DetailedContactProps } from "../DetailedContact/props";
import { ContactInfoProps, ImageProps, InfoBoxProps } from "../props";

export interface InfoBannerProps {
  // styles?: StyledInfoBannerProps;
  infoBox: InfoBoxProps;
  contactInfo?: ContactInfoProps;
  image?: ImageProps;
  commentSlider?: CommentSliderProps;
  detailedContact?: DetailedContactProps;
  // flowingContent?: FlowingContentType;
}
