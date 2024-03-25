import styled from "styled-components";
import { Theme } from "../theme";


const StyledBarStructure = styled.div<{theme: Theme}>`
    width: 65rem;
    height: 100%;
    display: flex;
    /* align-items: center; */
`

export default StyledBarStructure;