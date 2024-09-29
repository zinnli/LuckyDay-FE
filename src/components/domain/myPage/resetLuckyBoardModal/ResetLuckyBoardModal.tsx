import * as S from "./ResetLuckyBoardModal.styled";
import { ConfirmModal } from "components";
import { useModal } from "hooks";

interface ResetLuckyBoardModalProps {
  onReset: () => void;
}

export default function ResetLuckyBoardModal({
  onReset,
}: ResetLuckyBoardModalProps) {
  const { handleModalClose } = useModal();

  const handleCancelClick = () => {
    handleModalClose();
  };

  const handleResetlick = () => {
    onReset();
    handleModalClose();
  };

  const subTitle = (
    <p>
      럭키 보드에 생성되어 있는 <br />
      모든 럭키 데이가 삭제되고, <br />
      럭키 보드가 초기화됩니다. <br />
      삭제된 정보는 복구할 수 없습니다.
    </p>
  );

  return (
    <ConfirmModal
      css={S.modal}
      title="럭키보드를 초기화하시겠어요?"
      subTitle={subTitle}
      cancelLabel="취소"
      baseLabel="초기화"
      handleCancelClick={handleCancelClick}
      handleBaseClick={handleResetlick}
    />
  );
}
