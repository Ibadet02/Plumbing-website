import InfoBanner from "../../components/Banners/InfoBanner";
import firstInfoBanner from "../../data/pages/Home/infoBanner/firstInfoBanner";
import StyledSection from "../../styles/pages/Section.styled";
import StyledPage from "../../styles/pages/index.styled";
import plumbing from "../../assets/images/plumbing.jpeg";
import secondInfoBanner from "../../data/pages/Home/infoBanner/secondInfoBanner";
import ImageCarousel from "../../components/ImageCarousel";
import imageCarousel from "../../data/pages/Home/imageCarousel/images";
import fourthInfoBanner from "../../data/pages/Home/infoBanner/fourthInfoBanner";
import fifthInfoBanner from "../../data/pages/Home/infoBanner/fifthInfoBanner";
import Services from "../Services";
import theme from "../../styles/theme";

const Home = () => {
  return (
    <StyledPage>
      <StyledSection $height="50rem" $bgimage={plumbing}>
        <InfoBanner {...firstInfoBanner} />
      </StyledSection>
      <StyledSection $bgcolor="#fff" $padding_block="5rem">
        <InfoBanner {...secondInfoBanner} />
      </StyledSection>
      <StyledSection>
        <ImageCarousel {...imageCarousel} />
      </StyledSection>
      <StyledSection $bgcolor={theme.colors.light} $padding_block="3rem">
        <InfoBanner {...fourthInfoBanner} />
      </StyledSection>
      <StyledSection $bgimage={plumbing} $height="40rem">
        <InfoBanner {...fifthInfoBanner} />
      </StyledSection>
      <StyledSection $height="35rem" />
      <Services />
    </StyledPage>
  );
};

export default Home;
