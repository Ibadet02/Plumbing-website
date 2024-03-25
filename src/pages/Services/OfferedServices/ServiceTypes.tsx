import React from "react";
import StyledServiceTypes from "../../../styles/pages/Services/OfferedServices/ServiceTypes.styled";
import ServiceType from "./ServiceType";
import { ServiceTypesProps } from "./props";

const ServiceTypes: React.FC<ServiceTypesProps> = ({ serviceTypes }) => {
  return (
    <StyledServiceTypes>
      {serviceTypes.map((serviceType) => (
        <ServiceType key={serviceType.id} {...serviceType} />
      ))}
    </StyledServiceTypes>
  );
};

export default ServiceTypes;
