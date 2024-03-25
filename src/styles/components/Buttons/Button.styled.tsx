import styled from "styled-components";
import { Theme } from "../../theme";


const StyledButton = styled.button<{theme: Theme}>`
    color: ${({ theme }) => theme.colors.white};
    background: none;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    outline: none;
    padding: .9rem 1.9rem;
    border-radius: .3rem;
    cursor: pointer;
    align-self: flex-start;
    transition: .15s ease-in;
    border: .1rem solid ${({ theme }) => theme.colors.primary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default StyledButton;