import React from "react";
import StyledOfferedServices from "../../../styles/pages/Services/OfferedServices/index.styled";
import ServiceTypes from "./ServiceTypes";
import { OfferedServicesProps } from "./props";
import StyledHeading from "../../../styles/components/Heading.styled";
import StyledContentHeading from "../../../styles/components/ContentHeading.styled";

const OfferedServices: React.FC<OfferedServicesProps> = ({ serviceTypes }) => {
  return (
    <StyledOfferedServices>
      <div className="services-heading">
        <StyledContentHeading $isdark={true}>Services</StyledContentHeading>
        <StyledHeading $isdark={true} fontWeight="700">
          The services we offer
        </StyledHeading>
      </div>
      <ServiceTypes {...serviceTypes} />
    </StyledOfferedServices>
  );
};

export default OfferedServices;
