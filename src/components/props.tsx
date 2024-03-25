import {
  StyledContentHeadingProps,
  StyledDescriptionProps,
  StyledHeadingProps,
  StyledInfoBoxProps,
  StyledLogoProps,
} from "../styles/components/props";
import { FlowingContentType } from "../styles/components/types";
import { ButtonProps } from "./Buttons/props";

export interface InfoBoxProps {
  contentHeading?: {
    text: string;
    styles: StyledContentHeadingProps;
  };
  heading: {
    text: string;
    styles: StyledHeadingProps;
  };
  description?: {
    text: string;
    styles: StyledDescriptionProps;
  };
  button?: ButtonProps;
  styles: StyledInfoBoxProps;
}

export interface ContactInfoProps {
  flowing?: FlowingContentType;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface BarStructureProps {
  links: {
    id: number;
    text: string;
    href: string;
  }[];
  isLinkBordered?: boolean;
  styledLogo?: StyledLogoProps;
}