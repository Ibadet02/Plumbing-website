import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  OfferedServicesProps,
  ServiceTypesProps,
} from "../../../../pages/Services/OfferedServices/props";
import {
  faFaucet,
  faScrewdriverWrench,
  faToolbox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const serviceTypes: ServiceTypesProps = {
  serviceTypes: [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faWrench} />,
      contentHeading: {
        text: "Installations",
        styledContentHeading: {
          $isdark: true,
        },
      },
      description: {
        text: "We install your new equipment and make sure it is working properly. We also provide training on how to use it.",
        styledDescription: {
          $isdark: true,
        },
      },
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faFaucet} />,
      contentHeading: {
        text: "Renovations",
        styledContentHeading: {
          $isdark: true,
        },
      },
      description: {
        text: "We renovate your bathroom, kitchen, or any other room in your home. We can also help you with the design.",
        styledDescription: {
          $isdark: true,
        },
      },
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faToolbox} />,
      contentHeading: {
        text: "Fixing Isuues",
        styledContentHeading: {
          $isdark: true,
        },
      },
      description: {
        text: "We fix any issues you may have with your plumbing, heating, or cooling systems. We also provide maintenance services.",
        styledDescription: {
          $isdark: true,
        },
      },
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      contentHeading: {
        text: "Repairs",
        styledContentHeading: {
          $isdark: true,
        },
      },
      description: {
        text: "We repair any damage to your plumbing, heating, or cooling systems. We also provide emergency services.",
        styledDescription: {
          $isdark: true,
        },
      },
    },
  ],
};

const offeredServices: OfferedServicesProps = {
  serviceTypes: serviceTypes,
};

export default offeredServices;
