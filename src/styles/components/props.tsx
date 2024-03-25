import { FlowingContentType } from "./types";

export interface StyledContentHeadingProps {
  $isdark: boolean;
}

export interface StyledHeadingProps {
  $isdark: boolean;
  fontWeight: string;
}

export interface StyledDescriptionProps {
  $isdark: boolean;
}

export interface StyledInfoBoxProps {
  width: string;
}

export interface StyledContactInfoProps {
  flowing?: FlowingContentType;
}

export interface StyledLogoProps {
  $font_size?: string;
  $font_weight?: string;
}