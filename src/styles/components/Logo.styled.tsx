import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLogoProps } from "./props";
import { Theme } from "../theme";

const StyledLogo = styled(Link)<StyledLogoProps & {theme: Theme}>`
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    border-right: 0.1rem solid ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    padding-right: 4rem;
    height: 100%;
    .top {
        font-size: ${({ $font_size }) => $font_size || '2.5rem'};
        font-weight: 800;
    }
    .bottom {
        font-size: calc(${({ $font_size }) => $font_size || '3.5rem'} - 2rem);
        font-weight: 500;
    }
`

export default StyledLogo;