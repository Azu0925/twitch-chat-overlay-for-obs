import { Box, Button, Code, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useChatUrl } from "../hooks/chatUrl.ts"

export const GenerateChatUrl = () => {
  const { onCopy, value, generateUrl, hasCopied } = useChatUrl()
  const [userName, setUserName] = useState("")

  return (
    <Box maxWidth={"800px"} marginBottom={"50px"}>
      <Box>
        <Flex
          marginBottom={"20px"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Heading as={"h3"} size={"md"}>
            TwitchのユーザーID
          </Heading>
          <Button onClick={() => generateUrl(userName)} colorScheme={"purple"}>
            URLを生成
          </Button>
        </Flex>
        <Box marginBottom={"20px"}>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        marginBottom={"20px"}
        padding={"10px"}
        borderRadius={"10px"}
        background={"gray.100"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Code display={"block"} whiteSpace={"pre"} children={value} />
          <Button onClick={onCopy} colorScheme={"purple"}>
            {hasCopied ? "コピーされました" : "コピー"}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
