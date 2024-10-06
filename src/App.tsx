import { Footer } from "./components/Footer.tsx"
import { Box, Text } from "@chakra-ui/react"
import { GenerateCustomStyleCode } from "./components/GenerateCustomStyleCode.tsx"
import { Header } from "./components/Header.tsx"
import { News } from "./components/News.tsx"
import { GenerateChatUrl } from "./components/GenerateChatUrl.tsx"

function App() {
  return (
    <>
      <Header />
      <Box margin={"0 auto"} width={"90vw"}>
        <News />
        <GenerateChatUrl />
        <GenerateCustomStyleCode />
        <Text marginBottom={"50px"}>
          不具合等のお問い合わせは
          <a href="https://x.com/yamaneko717">@yamaneko717</a>
        </Text>
      </Box>
      <Footer />
    </>
  )
}

export default App
