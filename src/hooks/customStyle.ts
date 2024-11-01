import { useClipboard } from "@chakra-ui/react"
import { appVersion } from "../consts.ts"

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
  const generateStyle = (opacity: number, fontColor: string) =>
    setValue(
      `${baseStyle}${generateBackgroundColorStyle(opacity, fontColor)}${version}`,
    )

  return { onCopy, value, generateStyle, hasCopied }
}

function generateBackgroundColorStyle(opacity: number, fontColor: string) {
  const decimal = opacity / 100
  return `
body {
  background-color: rgba(0, 0, 0, ${decimal}) !important;
}

.text-fragment {
  color: ${fontColor} !important;
}
  `
}
