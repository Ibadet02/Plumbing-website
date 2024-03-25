import styled from "styled-components";

const StyledContactForm = styled.form`
    .form-heading {
        margin-bottom: 1.2rem;
    }
    .form-box {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        .input-row {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`

export default StyledContactForm;