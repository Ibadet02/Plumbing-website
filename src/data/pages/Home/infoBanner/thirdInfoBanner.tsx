import { InfoBannerProps } from "../../../../components/Banners/props";
import { InfoBoxProps } from "../../../../components/props";
const thirdInfoBox: InfoBoxProps = {
    heading: {
        text: 'Browse our work',
        styles: {
            $isdark: true,
            fontWeight: '600',
        }
    },
    styles: {
        width: 'auto',
    }
}

const thirdInfoBanner: InfoBannerProps = {
    infoBox: thirdInfoBox
}

export default thirdInfoBanner;