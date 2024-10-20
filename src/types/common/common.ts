export interface Toast {
  id?: string;
  content: string;
}

export type TooltipFlow = "up" | "down" | "left" | "right";

export interface CommonServerModel {
  code: string;
  message: string;
}
