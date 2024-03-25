import { StyledDescriptionProps, StyledHeadingProps } from "../../styles/components/props";
import { FlowingContentType } from "../../styles/components/types";

export interface ContactFormProps {
  styledHeading?: StyledHeadingProps;
  styledDescription?: StyledDescriptionProps;
  formData: {
    name: string;
    email: string;
    phone: string;
    postcode: string;
    message: string;
  };
}

export interface DetailedContactProps {
  contactForm: ContactFormProps;
  flowing?: FlowingContentType;
}
