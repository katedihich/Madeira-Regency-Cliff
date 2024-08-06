import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.5rem 2.5rem 2.5rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
