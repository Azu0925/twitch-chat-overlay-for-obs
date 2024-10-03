import { useState } from "react"

export const useChatUrl = () => {
  const baseUrl = "https://www.twitch.tv/popout/"
  const baseUrlChatPath = "/chat?popout="
  const [url, setUrl] = useState("")

  const generateUrl = (userName: string) =>
    setUrl(`${baseUrl}${userName}${baseUrlChatPath}`)

  return { url, generateUrl }
}
