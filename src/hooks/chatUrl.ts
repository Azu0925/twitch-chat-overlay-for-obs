import { useClipboard } from "@chakra-ui/react"
import { useState } from "react"
import { validateTwitchUsername, escapeHtml } from "../utils/validation"
import { ERROR_MESSAGES, type AppError } from "../types/errors"

export const useChatUrl = () => {
  const baseUrl = "https://www.twitch.tv/popout/"
  const baseUrlChatPath = "/chat?popout="

  const { onCopy, value, setValue, hasCopied } = useClipboard("")
  const [error, setError] = useState<AppError | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateUrl = async (userName: string) => {
    setIsLoading(true)
    setError(null)

    try {
      if (!userName.trim()) {
        throw new Error(ERROR_MESSAGES.EMPTY_USERNAME)
      }

      if (!validateTwitchUsername(userName.trim())) {
        throw new Error(ERROR_MESSAGES.INVALID_USERNAME)
      }

      const escapedUserName = escapeHtml(userName.trim().toLowerCase())
      const generatedUrl = `${baseUrl}${escapedUserName}${baseUrlChatPath}`

      setValue(generatedUrl)
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
    generateUrl,
    hasCopied,
    error,
    isLoading,
    clearError,
  }
}
