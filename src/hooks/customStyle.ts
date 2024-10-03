import { useState } from "react"

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

  const [style, setStyle] = useState("")
  const generateStyle = (opacity: number) =>
    setStyle(`${baseStyle}${generateBackgroundColorStyle(opacity)}`)

  return { style, generateStyle }
}

function generateBackgroundColorStyle(opacity: number) {
  const decimal = opacity / 100
  return `
    body {
      background-color: rgba(0, 0, 0, ${decimal}) !important;
    }
  `
}
