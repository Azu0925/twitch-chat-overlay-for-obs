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
  const generateStyle = (
    opacity: number,
    fontColor: string,
    backgroundColor: string,
  ) =>
    setValue(
      `${baseStyle}${generateBackgroundColorStyle(opacity, fontColor, backgroundColor)}${version}`,
    )

  return { onCopy, value, generateStyle, hasCopied }
}

function generateBackgroundColorStyle(
  opacity: number,
  fontColor: string,
  backgroundColor: string,
) {
  const red = parseInt(backgroundColor.slice(1, 3), 16)
  const green = parseInt(backgroundColor.slice(3, 5), 16)
  const blue = parseInt(backgroundColor.slice(5, 7), 16)
  const alpha = opacity / 100

  return `
body {
  background-color: rgba(${red}, ${green}, ${blue}, ${alpha}) !important;
}

.text-fragment {
  color: ${fontColor} !important;
}
  `
}
