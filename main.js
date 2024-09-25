const baseUrl = 'https://www.twitch.tv/popout/'
const baseUrlPathChat = '/chat?popout='
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

function generateUrl(userId){
    return `${baseUrl}${userId}${baseUrlPathChat}`
}

function generateCss(opacity){
    const decimal = opacity / 100
    return `
body { 
    background-color: rgba(0, 0, 0, ${decimal}) !important;
}
${baseStyle}
    `
}

const generateUrlButton = document.getElementById("generate-url-btn");
const generateCssButton = document.getElementById("generate-css-btn");
const urlResult = document.getElementById("url-result")
const cssResult = document.getElementById("css-result")

const renderUrl = () => {
    const userId = document.getElementById("user-id").value
    const url = generateUrl(userId)
   urlResult.innerHTML = `<p>${url}</p>`
}

const renderCss = () => {
    const opacity = document.getElementById("opacity").value
    const css = generateCss(opacity)
    cssResult.innerHTML = `
    <pre>
    <code>
        ${css}
    </code>
    </pre>
    `
}

generateUrlButton.addEventListener("click", renderUrl)
generateCssButton.addEventListener("click", renderCss)