import { InfoBannerProps } from "../../../../components/Banners/props";
import { ContactInfoProps, InfoBoxProps } from "../../../../components/props";
const firstInfoBox: InfoBoxProps = {
  heading: {
    text: "We provide effective plumbing solutions",
    styles: {
      $isdark: false,
      fontWeight: "700",
    },
  },
  description: {
    text: "Our team of experienced plumbers can help you with any plumbing issue you may have. We offer a wide range of services and are available 24/7. Contact us today for a free quote. We look forward to working with you! lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    styles: {
      $isdark: false,
    },
  },
  button: {
    text: "Get a quote",
  },
  styles: {
    width: '40rem',
  }
};
const firstContactInfo: ContactInfoProps = {
  flowing: {
    $vertically: 'center',
    $horizontally: 'right',
  }
}
const firstInfoBanner: InfoBannerProps = {
  infoBox: firstInfoBox,
  contactInfo: firstContactInfo,
  
}

export default firstInfoBanner;