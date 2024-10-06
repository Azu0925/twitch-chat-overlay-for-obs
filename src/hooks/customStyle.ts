import { useClipboard } from "@chakra-ui/react"

export const useCustomStyle = () => {
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

  const { onCopy, value, setValue, hasCopied } = useClipboard("")
  const generateStyle = (opacity: number) =>
    setValue(`${baseStyle}${generateBackgroundColorStyle(opacity)}`)

  return { onCopy, value, generateStyle, hasCopied }
}

function generateBackgroundColorStyle(opacity: number) {
  const decimal = opacity / 100
  return `
body {
  background-color: rgba(0, 0, 0, ${decimal}) !important;
}
  `
}
