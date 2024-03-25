import styled from "styled-components";
import { Theme } from "../../theme";


const StyledFooter = styled.footer<{theme: Theme}>`
    background-color: ${({theme}) => theme.colors.violetBlue};
`

export default StyledFooter;