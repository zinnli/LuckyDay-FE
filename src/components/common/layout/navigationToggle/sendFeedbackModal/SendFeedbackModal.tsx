import * as S from "./SendFeedbackModal.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";
import { useToast } from "hooks";
import { useSendFeedback } from "services";
import { FeedbackFormValues } from "types";
import { BaseModal, SvgButton, PageSpinner } from "components";
import { ShortBoxIcon } from "assets";
import { SendFeedbackMessage } from "../sendFeedbackMessage";

interface SendFeedbackModalProps {
  onClose: () => void;
}

export default function SendFeedbackModal({ onClose }: SendFeedbackModalProps) {
  const theme = useTheme();
  const { addToast } = useToast();
  const [feedbackSent, setFeedbackSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FeedbackFormValues>({
    mode: "onChange",
    defaultValues: {
      feedback: "",
    },
  });

  const feedbackValue = watch("feedback", "");
  const feedbackError = errors.feedback;

  if (feedbackValue.length > 160 && !feedbackError) {
    setError("feedback", {
      type: "manual",
      message: "피드백은 160자 이내로 작성해 주세요.",
    });
  } else if (feedbackValue.length <= 160 && feedbackError) {
    clearErrors("feedback");
  }

  const sendFeedbackMutation = useSendFeedback();

  const onSubmit = (data: FeedbackFormValues) => {
    sendFeedbackMutation.mutate(
      { content: data.feedback },
      {
        onSuccess: () => {
          addToast({ content: "피드백이 전송되었습니다." });
          setFeedbackSent(true);
        },
        onError: (error) => {
          addToast({ content: "오류가 발생했습니다. 다시 시도해 주세요." });
          console.error("피드백 전송 중 오류 발생:", error);
        },
      }
    );
  };

  const isButtonDisabled =
    feedbackValue.length === 0 || feedbackValue.length > 160;

  if (feedbackSent) {
    return <SendFeedbackMessage onClose={onClose} />;
  }

  return (
    <BaseModal>
      {sendFeedbackMutation.isPending ? (
        <PageSpinner />
      ) : (
        <S.ModalContainer>
          <S.Text_h1>피드백을 보내주세요.</S.Text_h1>
          <S.Textarea
            {...register("feedback")}
            placeholder="개선점이나 제안사항을 보내주시면, 럭키데이 서비스 발전에 큰 도움이 됩니다."
          />
          <S.ErrorText>
            {errors.feedback && (
              <S.ErrorText>{errors.feedback.message}</S.ErrorText>
            )}
          </S.ErrorText>
          <S.CharCount>{feedbackValue.length}/160</S.CharCount>
          <S.ButtonBox>
            <SvgButton
              label="취소"
              onClick={onClose}
              icon={<ShortBoxIcon />}
              width="100px"
              height="42px"
            />
            <SvgButton
              label="보내기"
              onClick={handleSubmit(onSubmit)}
              icon={<ShortBoxIcon />}
              textColor={
                isButtonDisabled ? theme.colors.black : theme.colors.white
              }
              fillColor={
                isButtonDisabled ? theme.colors.gray : theme.colors.purple
              }
              width="100px"
              height="42px"
              disabled={isButtonDisabled}
            />
          </S.ButtonBox>
        </S.ModalContainer>
      )}
    </BaseModal>
  );
}
