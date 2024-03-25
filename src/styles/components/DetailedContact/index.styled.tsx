import styled from "styled-components";
import { Theme } from "../../theme";

const StyledDetailedContact = styled.div<{ theme: Theme }>`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(80%);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 100%;
  padding: 2.5rem;
  display: flex;
  border-radius: 0.3rem;
  gap: 2rem;
`;

export default StyledDetailedContact;
