import styled from "styled-components";
import { Theme } from "../../theme";


const StyledDetailedContactInfo = styled.aside<{theme: Theme}>`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 26rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .location, .contact-us {
        h3 {
            margin-bottom: 0.6rem;
        }
        p {
            font-size: 0.8rem;
        }
    }
    .additional-info {
        font-size: 0.8rem;
    }
`

export default StyledDetailedContactInfo;