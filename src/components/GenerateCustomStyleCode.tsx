import { useCustomStyle } from "../hooks/customStyle.ts"
import { useState, useEffect } from "react"
import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react"
import { BackgroundDensity } from "./parameters/BackgroundDensity.tsx"
import { SelectFontColor } from "./parameters/SelectFontColor.tsx"
import { SelectBackgroundColor } from "./parameters/SelectBackgroundColor.tsx"

export const GenerateCustomStyleCode = () => {
  const {
    onCopy,
    value,
    generateStyle,
    hasCopied,
    error,
    isLoading,
    clearError,
  } = useCustomStyle()
  const [opacity, setOpacity] = useState(0)
  const [color, setColor] = useState("#ffffff")
  const [backgroundColor, setBackgroundColor] = useState("#000000")

  // エラーをクリアする
  useEffect(() => {
    if (error) {
      const timer = setTimeout(clearError, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, clearError])

  const handleGenerateStyle = () => {
    generateStyle(opacity, color, backgroundColor)
  }

  return (
    <Box marginBottom={"50px"}>
      <Heading as={"h3"} size={"md"} marginBottom={"20px"}>
        チャットの見た目の設定
      </Heading>
      <Grid marginBottom={"20px"} templateColumns={"repeat(4, 1fr)"}>
        <GridItem>
          <BackgroundDensity opacity={opacity} setOpacity={setOpacity} />
        </GridItem>
        <GridItem>
          <SelectBackgroundColor
            color={backgroundColor}
            setColor={setBackgroundColor}
          />
        </GridItem>
        <GridItem>
          <SelectFontColor color={color} setColor={setColor} />
        </GridItem>
      </Grid>

      {error && (
        <Alert status="error" marginBottom={"20px"}>
          <AlertIcon />
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <Box marginBottom={"20px"}>
        <Button
          onClick={handleGenerateStyle}
          colorScheme={"purple"}
          isLoading={isLoading}
          loadingText="生成中..."
        >
          {isLoading ? <Spinner size="sm" /> : "生成"}
        </Button>
      </Box>
      <Text marginBottom={"20px"}>
        ↓ここに生成されるコードをOBSのブラウザソースにあるカスタムCSSのところにコピペしてください。
      </Text>
      <Box padding={"20px"} borderRadius={"10px"} background={"gray.100"}>
        <Flex justifyContent={"space-between"}>
          <Code display={"block"} whiteSpace={"pre"} children={value} />
          <Button onClick={onCopy} colorScheme={"purple"}>
            {hasCopied ? "コピーされました" : "コピー"}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
