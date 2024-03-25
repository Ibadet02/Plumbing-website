
import styled from "styled-components";
import { Theme } from "../theme";

const StyledContactMe = styled.a<{theme: Theme}>`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.white};
    border-left: ${({ theme})=> `.1rem solid ${theme.colors.white}`};
    padding-left: 4rem;
    .text {
        .top{

        }
        .bottom{
            font-weight: 600;
        }
    }
`

export default StyledContactMe;