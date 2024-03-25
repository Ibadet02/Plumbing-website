import styled from "styled-components";
import { StyledCarouselControllerProps } from "./props";


const StyledCarouselController = styled.button<StyledCarouselControllerProps>`
    position: absolute;
    bottom: 0;
    ${({$isnext}) => ($isnext ? "right: 0;" : "left: 0;")}
    width: 5rem;
    background: none;
    background-color: rgba(0, 0, 0, 0.5);
    height: calc(100% - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 10;
`

export default StyledCarouselController;