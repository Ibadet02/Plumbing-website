
import BarStructure from "../BarStructure";
import { BarStructureProps } from "../props";
const barStructure: BarStructureProps = {
    links: [
        {
            id: 1,
            text: "Home",
            href: "/",
        },
        {
            id: 2,
            text: "Services",
            href: "/services",
        },
        {
            id: 3,
            text: "About",
            href: "/about",
        },
        {
            id: 4,
            text: "Contact",
            href: "/contact",
        }
    ],
    isLinkBordered: false,
}
const DesktopNavbar = () => {
  return <BarStructure {...barStructure}  />;
};

export default DesktopNavbar;
