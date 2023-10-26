import styled from "styled-components";

const GentlemanCardStyled = styled.article`
  background-color: #6290c3;
  width: 70%;
  margin: 0 auto 30px;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid #fff;
  position: relative;

  .gentleman {
    &__avatar-container {
      border-right: 2px dashed #fff;
      width: 30%;
      position: relative;
    }

    &__avatar {
      max-width: 80%;
      border-radius: 50%;
      border: 1px solid #fff;
      transition: transform 0.3s;
    }

    &__initial {
      border-radius: 50%;
      background-color: #600;
      color: #fff;
      width: 40px;
      height: 40px;
      font-size: 24px;
      position: absolute;
      bottom: 0;
      right: 10px;
    }

    &__data-container {
      padding-left: 20px;
    }

    &__name {
      font-weight: 500;
      margin-bottom: 10px;
    }

    &__data {
      margin-bottom: 5px;
    }

    &__data-label {
      width: 100px;
      display: inline-block;
    }

    &__icon {
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: none;
    }

    &.selected .gentleman__avatar,
    &:hover .gentleman__avatar {
      transform: scaleX(-100%);
    }

    &__actions {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      gap: 10px;
    }
  }

  &.gentleman--selected {
    border-color: red;
  }
`;

export default GentlemanCardStyled;
