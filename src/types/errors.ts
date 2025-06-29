export interface ValidationError {
  field: string
  message: string
}

export interface AppError {
  type: "validation" | "network" | "unknown"
  message: string
  details?: ValidationError[]
}

export const ERROR_MESSAGES = {
  INVALID_USERNAME:
    "ユーザー名は4-25文字の英数字とアンダースコアで、英字で始まる必要があります",
  INVALID_COLOR: "有効なカラーコード（#RRGGBB形式）を入力してください",
  INVALID_OPACITY: "透明度は0-100の範囲で入力してください",
  EMPTY_USERNAME: "ユーザー名を入力してください",
  GENERATION_FAILED: "コードの生成に失敗しました",
} as const
