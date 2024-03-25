import styled from "styled-components";
import { Theme } from "../theme";


const StyledBarLink = styled.li<{theme: Theme}>`
    list-style-type: none;
    padding-inline: 2rem;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`

export default StyledBarLink;