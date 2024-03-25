import { InfoBannerProps } from "../../../../components/Banners/props";
import {
  ContactFormProps,
  DetailedContactProps,
} from "../../../../components/DetailedContact/props";
import { InfoBoxProps } from "../../../../components/props";
const fifthInfoBox: InfoBoxProps = {
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
  styles: {
    width: "40rem",
  },
};
const firstContactForm: ContactFormProps = {
  formData: {
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  },
  styledHeading: {
    $isdark: true,
    fontWeight: "700",
  },
  styledDescription: {
    $isdark: true,
  },
};
const firstDeatiledContact: DetailedContactProps = {
  flowing: {
    $vertically: 'center',
    $horizontally: "center",
  },
  contactForm: firstContactForm,
};
const fifthInfoBanner: InfoBannerProps = {
  infoBox: fifthInfoBox,
  detailedContact: firstDeatiledContact,
};

export default fifthInfoBanner;
