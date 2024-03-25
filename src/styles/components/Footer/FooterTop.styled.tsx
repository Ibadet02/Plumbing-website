import styled from "styled-components";
import StyledSection from "../../pages/Section.styled";


const StyledFooterTop = styled(StyledSection)`
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.white};
`

export default StyledFooterTop;