import * as S from "./SendFeedbackMessage.styled";
import { ConfirmModal } from "components/common";

interface SendFeedbackMessageProps {
  onClose: () => void;
}

export default function SendFeedbackMessage({
  onClose,
}: SendFeedbackMessageProps) {
  const surveyFormUrl = import.meta.env.VITE_SURVEY_FORM;

  const handleConfirmClick = () => {
    window.open(surveyFormUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  const subTitle = (
    <p>
      <strong>[게시판]- [만족도 설문 보내기]</strong>에서 <br /> 더 자세하고 긴
      피드백을 <br /> 작성하실 수 있어요! <br /> <br /> 매월 기프티콘 추첨도
      있으니 <br />
      많은 참여 부탁드려요!
    </p>
  );

  return (
    <ConfirmModal
      css={S.modal}
      title="피드백이 전달되고 있어요!"
      subTitle={subTitle}
      cancelLabel="취소"
      baseLabel="바로가기"
      handleCancelClick={handleCancelClick}
      handleBaseClick={handleConfirmClick}
    />
  );
}
