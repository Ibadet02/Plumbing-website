import styled from "styled-components";
import { Theme } from "../../../theme";


const StyledServiceType = styled.li<{theme: Theme}>`
    list-style-type: none;
    padding: 1.2rem 1rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
    .service-type--icon {
        height: 7rem;
        display: flex;
        align-items: center;
    }
    .service-type--content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export default StyledServiceType;