import * as S from "./ReviewLuckyDayPage.styled";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "hooks";
import {
  useGetLuckyDayDetail,
  useCreateLuckyDayReview,
  useUpdateLuckyDayReview,
} from "services";
import {
  SvgButton,
  SingleButtonLayout,
  PageSpinner,
  FileUploader,
} from "components";
import { ReviewFormData } from "types";
import { ShortBoxIcon, TrashIcon } from "assets";
import { formatDate } from "utils";

export default function ReviewLuckyDayPage() {
  const { id } = useParams();
  const { addToast } = useToast();

  const { data, isLoading, error, refetch } = useGetLuckyDayDetail(id || "");
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  const createReviewMutation = useCreateLuckyDayReview();
  const updateReviewMutation = useUpdateLuckyDayReview();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, errors },
  } = useForm<ReviewFormData>({
    defaultValues: {
      review: "",
      image: null as File | null,
    },
    mode: "onChange",
  });

  const review = watch("review");
  const image = watch("image");

  const handleFileSelect = (file: File) => {
    setValue("image", file);
  };

  const handleDeleteImage = () => {
    setIsImageDeleted(true);
    setExistingImageUrl(null);
    setValue("image", null);
  };

  const onSubmit = async (data: ReviewFormData) => {
    const reviewReqDto = {
      dtlNo: id ? Number(id) : 0,
      review: data.review,
      imageDelete: isImageDeleted ? 1 : 0,
    };

    const imageToUpload: File | null = data.image || null;

    const mutationPayload = {
      body: reviewReqDto,
      image: imageToUpload,
    };

    const mutationFn = isEditMode
      ? updateReviewMutation.mutate
      : createReviewMutation.mutate;

    mutationFn(mutationPayload, {
      onSuccess: async () => {
        addToast({
          content: isEditMode ? "수정되었습니다." : "저장되었습니다.",
        });

        setIsImageDeleted(false);
        setExistingImageUrl(null);

        await refetch();

        navigate(`/luckydays/review/${id}`);
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 2013) {
            addToast({ content: "이미지 또는 내용을 입력해 주세요." });
          } else {
            addToast({
              content: `저장 중 오류가 발생했습니다: ${
                error.response.data.message || error.response.status
              }`,
            });
          }
        } else {
          addToast({ content: "저장 중 오류가 발생했습니다." });
        }
      },
    });
  };

  useEffect(() => {
    if (data && data.resData) {
      if (data.resData.review !== null) {
        setValue("review", data.resData.review);
        setIsEditMode(true);
      }

      if (data.resData.imageUrl) {
        // default 이미지 URL을 확인하고, default 이미지가 아닌 경우에만 이미지 URL 설정
        if (!data.resData.imageUrl.includes("default")) {
          const fullImageUrl = `${import.meta.env.VITE_BASE_URL}${
            data.resData.imageUrl
          }`;
          setExistingImageUrl(fullImageUrl);
        }
      }
      setIsButtonDisabled(true);
    }
  }, [data, setValue]);

  useEffect(() => {
    if (
      review &&
      review.length <= 100 &&
      (isDirty || image || isImageDeleted)
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [review, image, isDirty, isImageDeleted]);

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    return (
      <SingleButtonLayout>
        <S.Container>
          <S.TextBox> 오류가 발생했습니다.</S.TextBox>
        </S.Container>
      </SingleButtonLayout>
    );
  }

  const { dday, actNm } = data.resData;

  return (
    <SingleButtonLayout>
      <S.Container>
        <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
        <S.ReviewBox>
          <S.TextBox>{actNm}</S.TextBox>
          <S.ImageUploadBox>
            {existingImageUrl && !isImageDeleted && !image ? (
              <S.ImageBox>
                <img src={existingImageUrl} alt="Saved preview" />
                <S.ImageDeleteButton onClick={handleDeleteImage}>
                  <TrashIcon />
                </S.ImageDeleteButton>
              </S.ImageBox>
            ) : (
              image && (
                <S.ImageBox>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded preview"
                  />
                  <S.ImageDeleteButton onClick={handleDeleteImage}>
                    <TrashIcon />
                  </S.ImageDeleteButton>
                </S.ImageBox>
              )
            )}
            <FileUploader onFileSelect={handleFileSelect} />
          </S.ImageUploadBox>
          <S.ReviewTextarea
            {...register("review", {
              required: "리뷰를 작성해 주세요.",
              maxLength: {
                value: 100,
                message: "리뷰는 100자 이내로 작성해 주세요.",
              },
            })}
            placeholder="100자 이내로 럭키 데이를 기록해 보세요 :)"
          />
          <S.CharCount>{review.length}/100</S.CharCount>
          <S.ErrorContainer>
            {errors.review && (
              <S.ErrorText>{errors.review.message as string}</S.ErrorText>
            )}
          </S.ErrorContainer>
        </S.ReviewBox>
        <S.ButtonBox>
          <SvgButton
            onClick={handleSubmit(onSubmit)}
            label={isEditMode ? "수정하기" : "저장하기"}
            icon={<ShortBoxIcon />}
            width="100px"
            height="50px"
            disabled={isButtonDisabled}
          />
        </S.ButtonBox>
      </S.Container>
    </SingleButtonLayout>
  );
}
