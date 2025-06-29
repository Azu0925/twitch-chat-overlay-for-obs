import { useClipboard } from "@chakra-ui/react"
import { useState } from "react"
import { appVersion } from "../consts.ts"
import { validateNumberRange, validateColorCode } from "../utils/validation"
import { ERROR_MESSAGES, type AppError } from "../types/errors"

const baseStyle = `
.tw-root--theme-dark .chat-room {
  background-color: rgba(0, 0, 0, 0);
}

.tw-root--theme-light .chat-room {
  background-color: rgba(0, 0, 0, 0);
}

.stream-chat-header {
  visibility: hidden !important;
  height: 0;
}

.text-fragment {
  color: white !important;
}

.chat-input {
  visibility: hidden !important;
}
  `

const version = `
/* twitch-chat-overlay-for-obs v${appVersion} */
`

export const useCustomStyle = () => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("")
  const [error, setError] = useState<AppError | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateStyle = async (
    opacity: number,
    fontColor: string,
    backgroundColor: string,
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      if (!validateNumberRange(opacity, 0, 100)) {
        throw new Error(ERROR_MESSAGES.INVALID_OPACITY)
      }

      if (!validateColorCode(fontColor)) {
        throw new Error(`フォントカラー: ${ERROR_MESSAGES.INVALID_COLOR}`)
      }

      if (!validateColorCode(backgroundColor)) {
        throw new Error(`背景カラー: ${ERROR_MESSAGES.INVALID_COLOR}`)
      }

      const customBackgroundStyle = generateBackgroundColorStyle(
        opacity,
        fontColor,
        backgroundColor,
      )

      const fullStyle = `${baseStyle}${customBackgroundStyle}${version}`
      setValue(fullStyle)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : ERROR_MESSAGES.GENERATION_FAILED
      setError({
        type: "validation",
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const clearError = () => setError(null)

  return {
    onCopy,
    value,
    generateStyle,
    hasCopied,
    error,
    isLoading,
    clearError,
  }
}

function generateBackgroundColorStyle(
  opacity: number,
  fontColor: string,
  backgroundColor: string,
) {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  const { r: red, g: green, b: blue } = hexToRgb(backgroundColor)
  const alpha = Math.max(0, Math.min(1, opacity / 100))

  return `
body {
  background-color: rgba(${red}, ${green}, ${blue}, ${alpha}) !important;
}

.text-fragment {
  color: ${fontColor} !important;
}
  `
}
