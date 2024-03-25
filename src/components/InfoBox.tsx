import StyledContentHeading from "../styles/components/ContentHeading.styled";
import StyledDescription from "../styles/components/Description.styled";
import StyledInfoBox from "../styles/components/InfoBox.styled";
import StyledHeading from "../styles/components/Heading.styled";
import { InfoBoxProps } from "./props";
import StyledButton from "../styles/components/Buttons/Button.styled";

const InfoBox: React.FC<InfoBoxProps> = ({
  contentHeading,
  heading,
  description,
  button,
  styles,
}) => {
  const renderContentHeading = () => {
    if (contentHeading) {
      return (
        <StyledContentHeading {...contentHeading.styles}>
          {contentHeading.text}
        </StyledContentHeading>
      );
    }
  };
  const renderDescription = () => {
    if (description) {
      return (
        <StyledDescription {...description.styles}>
          {description.text}
        </StyledDescription>
      );
    }
  };
  return (
    <StyledInfoBox {...styles}>
      {renderContentHeading()}
      {<StyledHeading {...heading.styles}>{heading.text}</StyledHeading>}
      {renderDescription()}
      {button && <StyledButton>{button.text}</StyledButton>}
    </StyledInfoBox>
  );
};

export default InfoBox;
