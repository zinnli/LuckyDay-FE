import * as S from "./DeleteReviewConfirmModal.styled";
import { useTheme } from "@emotion/react";
import { BaseModal, SvgButton } from "components/common";
import { ShortBoxIcon } from "assets";

interface DeleteReviewConfirmModalProps {
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteReviewConfirmModal({
  onClose,
  onDelete,
}: DeleteReviewConfirmModalProps) {
  const theme = useTheme();

  return (
    <BaseModal>
      <S.ModalContainer>
        <S.Text_h1>정말로 삭제하시겠어요?</S.Text_h1>
        <S.Logo_Sad />
        <S.Text_h2>
          럭키데이 활동 기록이 삭제됩니다. <br />
          삭제된 정보는 복구할 수 없습니다. <br />
          <br />
        </S.Text_h2>
        <S.ButtonBox>
          <SvgButton
            label="취소"
            onClick={onClose}
            icon={<ShortBoxIcon />}
            width="100px"
            height="42px"
          ></SvgButton>
          <SvgButton
            label="삭제하기"
            onClick={onDelete}
            icon={<ShortBoxIcon />}
            textColor={theme.colors.white}
            fillColor={theme.colors.purple}
            width="100px"
            height="42px"
          ></SvgButton>
        </S.ButtonBox>
      </S.ModalContainer>
    </BaseModal>
  );
}
