import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Input,
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useChatUrl } from "../hooks/chatUrl.ts"

export const GenerateChatUrl = () => {
  const {
    onCopy,
    value,
    generateUrl,
    hasCopied,
    error,
    isLoading,
    clearError,
  } = useChatUrl()
  const [userName, setUserName] = useState("")

  // エラーをクリアする
  useEffect(() => {
    if (error) {
      const timer = setTimeout(clearError, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, clearError])

  const handleGenerateUrl = () => {
    generateUrl(userName)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
    if (error) {
      clearError()
    }
  }

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
          <Button
            onClick={handleGenerateUrl}
            colorScheme={"purple"}
            isLoading={isLoading}
            loadingText="生成中..."
            isDisabled={!userName.trim()}
          >
            {isLoading ? <Spinner size="sm" /> : "URLを生成"}
          </Button>
        </Flex>
        <Box marginBottom={"20px"}>
          <Input
            value={userName}
            onChange={handleInputChange}
            placeholder="twitchのユーザー名を入力 (例: shroud)"
            isInvalid={!!error}
            aria-label="Twitchユーザー名"
          />
        </Box>

        {error && (
          <Alert status="error" marginBottom={"20px"}>
            <AlertIcon />
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
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
