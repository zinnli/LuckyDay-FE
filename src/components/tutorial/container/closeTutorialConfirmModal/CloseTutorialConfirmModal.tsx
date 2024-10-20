import * as S from "./CloseTutorialConfirmModal.styled";
import { useTheme } from "@emotion/react";
import { useTutorial } from "components/tutorial/hooks";
import { BaseModal, SvgButton } from "components/common";
import { ShortBoxIcon } from "assets";

interface CloseTutorialConfirmModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function CloseTutorialConfirmModal({
  onClose,
  onConfirm,
}: CloseTutorialConfirmModalProps) {
  const theme = useTheme();
  const { endTutorial } = useTutorial();

  const handleConfirmClick = () => {
    endTutorial();
    onConfirm();
    onClose();
  };

  return (
    <BaseModal>
      <S.ModalContainer>
        <S.Text_h1>튜토리얼을 종료하시겠어요?</S.Text_h1>
        <S.Logo_Basic />
        <S.Text_h2>
          종료 버튼을 누르면 튜토리얼이 종료되고 <br />
          로그인 전 화면으로 이동합니다.
        </S.Text_h2>
        <S.ButtonBox>
          <SvgButton
            label="취소"
            onClick={onClose}
            icon={<ShortBoxIcon />}
            width="100px"
            height="42px"
          />
          <SvgButton
            label="종료"
            onClick={handleConfirmClick}
            icon={<ShortBoxIcon />}
            textColor={theme.colors.white}
            fillColor={theme.colors.purple}
            width="100px"
            height="42px"
          />
        </S.ButtonBox>
      </S.ModalContainer>
    </BaseModal>
  );
}
