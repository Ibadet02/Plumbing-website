import { StyledContentHeadingProps, StyledDescriptionProps } from "../../../styles/components/props";


export interface ServiceTypeProps {
    id: number;
    icon: string;
    contentHeading: {
        text: string;
        styledContentHeading: StyledContentHeadingProps;
    };
    description: {
        text: string;
        styledDescription: StyledDescriptionProps;
    };
}

export interface ServiceTypesProps {
    serviceTypes: ServiceTypeProps[];
}

export interface OfferedServicesProps {
    serviceTypes: ServiceTypesProps;
}