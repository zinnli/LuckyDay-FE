import * as S from "./NoticeBoardPage.styled";
import { Link } from "react-router-dom";
import { SingleButtonLayout } from "components";

export default function NoticeBoardPage() {
  const surveyFormUrl = import.meta.env.VITE_SURVEY_FORM;

  return (
    <SingleButtonLayout>
      <S.TitleBox>게시판</S.TitleBox>
      <S.ContentsBox>
        <a href={surveyFormUrl} target="_blank" rel="noopener noreferrer">
          <S.MenuBox>만족도 설문 보내기</S.MenuBox>
        </a>
        <Link to="/noticeboard/info">
          <S.MenuBox>만든 사람들</S.MenuBox>
        </Link>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
