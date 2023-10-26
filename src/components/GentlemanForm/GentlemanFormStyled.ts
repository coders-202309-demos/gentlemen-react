import styled from "styled-components";

const GentlemanFormStyled = styled.form`
  width: 300px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .form {
    &__group {
      display: flex;
      align-items: center;
    }

    &__label {
      width: 100px;
    }

    &__control {
      flex: 1;
      padding: 5px 10px;
    }
  }
`;

export default GentlemanFormStyled;
