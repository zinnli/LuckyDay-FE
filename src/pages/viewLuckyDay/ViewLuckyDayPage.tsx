import * as S from "./ViewLuckyDayPage.styled";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useModal, useToast } from "hooks";
import { useGetLuckyDayReview, useDeleteLuckyDayReview } from "services";
import { GetLuckyDayDetail } from "types";
import {
  SvgFrame,
  PageSpinner,
  ComponentSpinner,
  SingleButtonLayout,
  DeleteReviewConfirmModal,
} from "components";
import { formatDate } from "utils";
import { ShortBoxIcon, EditIcon, TrashIcon } from "assets";

export default function ViewLuckyDayPage() {
  const { id } = useParams();
  const { addToast } = useToast();
  const { handleOpenModal, handleModalClose } = useModal();

  const { data, isLoading, error } = useGetLuckyDayReview(id || "");
  const [imageLoading, setImageLoading] = useState(true);
  const deleteReviewMutation = useDeleteLuckyDayReview();

  const navigate = useNavigate();

  const handleMoveToReviewEdit = () => {
    navigate(`/luckydays/create/${id}`);
  };

  const handleDeleteReview = () => {
    if (id) {
      deleteReviewMutation.mutate(
        { query: { dtlNo: Number(id) } },
        {
          onSuccess: () => {
            handleModalClose();
            navigate(`/luckydays/${id}`);
            addToast({ content: "기록이 성공적으로 삭제되었습니다." });
          },
          onError: () => {
            handleModalClose();
            addToast({
              content: "기록 삭제에 실패했습니다. 다시 시도해 주세요.",
            });
          },
        }
      );
    }
  };

  const handleDeleteReviewConfirmModal = () => {
    handleOpenModal(
      <DeleteReviewConfirmModal
        onClose={handleModalClose}
        onDelete={handleDeleteReview}
      />
    );
  };

  useEffect(() => {
    if (data && data.resData && data.resData.review === null) {
      navigate(`/luckydays/create/${id}`);
    }
  }, [data, id, navigate]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    addToast({ content: "오류가 발생했습니다." });
    return <ComponentSpinner />;
  }

  const { dday, actNm, review, imageUrl } = data.resData as GetLuckyDayDetail;

  const ImageUrl = imageUrl
    ? `${import.meta.env.VITE_BASE_URL}${imageUrl}`
    : "";

  const isDefaultImage = imageUrl?.includes("/images/review/default");

  return (
    <SingleButtonLayout>
      <S.Container>
        <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
        <S.ReviewBox>
          <S.ImageBox>
            <S.TextBox>{actNm}</S.TextBox>
            {imageLoading && (
              <S.SpinnerBox>
                <ComponentSpinner />
              </S.SpinnerBox>
            )}
            {imageUrl &&
              (isDefaultImage ? (
                <S.DefaultImage>
                  <img src={ImageUrl} alt="Default" onLoad={handleImageLoad} />
                </S.DefaultImage>
              ) : (
                <S.Image>
                  <img src={ImageUrl} alt="Uploaded" onLoad={handleImageLoad} />
                </S.Image>
              ))}
          </S.ImageBox>
          <S.ReviewTextBox>{review}</S.ReviewTextBox>
        </S.ReviewBox>

        <S.ButtonWrapper>
          <S.Button onClick={handleDeleteReviewConfirmModal}>
            <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
            <span>
              삭제하기 <TrashIcon />
            </span>
          </S.Button>
          <S.Button onClick={handleMoveToReviewEdit}>
            <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
            <span>
              수정하기 <EditIcon />
            </span>
          </S.Button>
        </S.ButtonWrapper>
      </S.Container>
    </SingleButtonLayout>
  );
}
