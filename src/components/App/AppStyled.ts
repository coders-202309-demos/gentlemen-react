import styled from "styled-components";

const AppStyled = styled.div`
  background-color: ${({ theme }) => theme.colours.background};
  width: 800px;
  margin: 0 auto;
  padding: 20px;

  .main {
    padding-top: 20px;

    &-header {
      text-align: center;
    }

    &-title {
      font-weight: 500;
    }
  }
`;

export default AppStyled;
