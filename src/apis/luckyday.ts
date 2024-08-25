import { ax } from "./axios";
import type {
  ActivitiesServerModel,
  CreateLuckyDayQueryModel,
  GetLuckyDayCycleDetailResponse,
  GetLuckyDayCycleInfoServerModel,
  GetLuckyDayCycleLastLuckyDaysQueryModel,
  GetLuckyDayCycleList,
  GetLuckyDayCycleQueryModel,
  GetLuckyDayCycleServerModel,
  GetLuckyDayDetailServerModel,
  CreateLuckyDayReviewQueryModel,
  DeleteLuckyDayReviewQueryModel,
  FeedbackQueryModel,
} from "types";

export const getLuckyDaysActivities = async () => {
  const { data } = await ax.get<ActivitiesServerModel>("/luckydays/activity");
  return data;
};

export const postLuckyDay = async (req: CreateLuckyDayQueryModel) => {
  const { data } = await ax.post("/luckydays", req.body);
  return data;
};

export const getLuckyDayDetail = async (req: string) => {
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${req}`
  );
  return data;
};

export const getLuckyDayReview = async (
  dtlNo: string
): Promise<GetLuckyDayDetailServerModel> => {
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${dtlNo}`
  );
  return data;
};

export const createLuckyDayReview = async (
  req: CreateLuckyDayReviewQueryModel
) => {
  const formData = new FormData();
  formData.append(
    "reviewReqDto",
    new Blob([JSON.stringify(req.body)], { type: "application/json" })
  );

  if (req.image) {
    formData.append("image", req.image);
  }

  const { data } = await ax.post("/luckydays/review", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const updateLuckyDayReview = async (
  req: CreateLuckyDayReviewQueryModel
) => {
  const formData = new FormData();
  formData.append(
    "reviewReqDto",
    new Blob([JSON.stringify(req.body)], { type: "application/json" })
  );

  if (req.image) {
    formData.append("image", req.image);
  }

  const { data } = await ax.put("/luckydays/review", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteLuckyDayReview = async (
  req: DeleteLuckyDayReviewQueryModel
) => {
  const { data } = await ax.delete(`/luckydays/review`, { params: req.query });
  return data;
};

export const deleteLuckyBoard = async () => {
  const { data } = await ax.delete("/luckydays");
  return data;
};

export const getLuckyDayCycleInfo = async (req: number) => {
  const { data } = await ax.get<GetLuckyDayCycleInfoServerModel>(
    `/luckydays/info/${req}`
  );
  return data.resData;
};

export const getLuckyDayCycle = async (req: GetLuckyDayCycleQueryModel) => {
  const { data } = await ax.get<GetLuckyDayCycleServerModel>(
    `/luckydays/cycl/${req.hasLuckyday}`,
    { params: req.query }
  );
  return data.resData;
};

export const getLuckyDayCycleList = async (): Promise<
  GetLuckyDayCycleList[]
> => {
  const { data } = await ax.get<{
    resData: GetLuckyDayCycleList[];
  }>("/luckydays/cycl/list");

  return data.resData;
};

export const getLuckyDayCycleLastLuckyDays = async (
  req: GetLuckyDayCycleLastLuckyDaysQueryModel
) => {
  const { data } = await ax.get<GetLuckyDayCycleServerModel>(
    `/luckydays/cycl`,
    { params: req.query }
  );

  return data.resData;
};

export const getLuckyDayCycleDetails = async (
  id: number
): Promise<GetLuckyDayCycleDetailResponse> => {
  const { data } = await ax.get<GetLuckyDayCycleDetailResponse>(
    `/luckydays/cycl/${id}`,
    {
      params: { isCurrent: 0 },
    }
  );
  return data;
};

export const sendFeedback = async (req: FeedbackQueryModel["body"]) => {
  const { data } = await ax.post("/feedback", req);
  return data;
};
