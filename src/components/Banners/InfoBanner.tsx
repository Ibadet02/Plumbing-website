import React from "react";
import { InfoBannerProps } from "./props";
import StyledInfoBanner from "../../styles/components/Banners/InfoBanner.styled";
import InfoBox from "../InfoBox";
import ContactInfo from "../ContactInfo";
import StyledImage from "../../styles/components/Image.styled";
import CommentSlider from "../CommentSlider";
import DetailedContact from "../DetailedContact";

const InfoBanner: React.FC<InfoBannerProps> = ({
  infoBox,
  contactInfo,
  image,
  commentSlider,
  detailedContact,
}) => {
  return (
    <StyledInfoBanner>
      <InfoBox {...infoBox} />
      {contactInfo && <ContactInfo {...contactInfo} />}
      {image && <StyledImage src={image.src} alt={image.alt} />}
      {commentSlider && <CommentSlider {...commentSlider} />}
      {detailedContact && <DetailedContact {...detailedContact} />}
    </StyledInfoBanner>
  );
};

export default InfoBanner;
