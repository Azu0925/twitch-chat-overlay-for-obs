import { Box, Center, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <header>
      <Box paddingTop={"20px"} paddingBottom={"20px"} marginBottom={"20px"}>
        <Center>
          <Heading as={"h1"}>
            Twitchチャットを配信画面にいい感じに表示させるためのカスタムCSSを生成するツール
          </Heading>
        </Center>
      </Box>
    </header>
  )
}
