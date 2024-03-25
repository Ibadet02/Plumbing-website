import React from "react";
import StyledServiceType from "../../../styles/pages/Services/OfferedServices/ServiceType.styled";
import StyledContentHeading from "../../../styles/components/ContentHeading.styled";
import StyledDescription from "../../../styles/components/Description.styled";
import { ServiceTypeProps } from "./props";

const ServiceType: React.FC<ServiceTypeProps> = ({
  icon,
  contentHeading,
  description,
}) => {
  return (
    <StyledServiceType>
      <div className="service-type--icon">{icon}</div>
      <div className="service-type--content">
        <StyledContentHeading {...contentHeading.styledContentHeading}>
          {contentHeading.text}
        </StyledContentHeading>
        <StyledDescription {...description.styledDescription}>{description.text}</StyledDescription>
      </div>
    </StyledServiceType>
  );
};

export default ServiceType;
