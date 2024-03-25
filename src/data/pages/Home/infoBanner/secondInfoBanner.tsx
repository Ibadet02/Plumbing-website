import { InfoBannerProps } from "../../../../components/Banners/props";
import { ImageProps, InfoBoxProps } from "../../../../components/props";
import manFixingPipe from '../../../../assets/images/man_fixing_pipe.jpg';
const secondInfoBox: InfoBoxProps = {
    contentHeading: {
        text: 'About Us',
        styles: {
            $isdark: true,
        }
    },
    heading: {
        text: 'Who we are and what we do',
        styles: {
            $isdark: true,
            fontWeight: '600',
        }
    },
    description: {
        text: 'We are a team of experienced plumbers who offer a wide range of services. We are available 24/7 and are ready to help you with any plumbing issue you may have. Contact us today for a free quote. We look forward to working with you! lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        styles: {
            $isdark: true,
        }
    },
    button: {
        text: 'Find out more...',
    },
    styles: {
        width: '30rem',
    }
}

const firstImage: ImageProps = {
    src: manFixingPipe,
    alt: 'man fixing a pipe'
}

const secondInfoBanner: InfoBannerProps = {
    infoBox: secondInfoBox,
    image: firstImage,
}

export default secondInfoBanner;