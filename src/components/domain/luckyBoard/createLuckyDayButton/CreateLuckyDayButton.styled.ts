import styled from "@emotion/styled";

export const CreateLuckyDayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-image: url("/images/empty-white.png");
  cursor: pointer;

  & > svg {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 390px) {
    width: 60px;
    height: 60px;

    & > svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;

    & > svg {
      width: 26px;
      height: 26px;
    }
  }
`;
