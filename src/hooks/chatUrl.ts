import { useClipboard } from "@chakra-ui/react"

export const useChatUrl = () => {
  const baseUrl = "https://www.twitch.tv/popout/"
  const baseUrlChatPath = "/chat?popout="

  const { onCopy, value, setValue, hasCopied } = useClipboard("")
  const generateUrl = (userName: string) =>
    setValue(`${baseUrl}${userName}${baseUrlChatPath}`)

  return { onCopy, value, generateUrl, hasCopied }
}
