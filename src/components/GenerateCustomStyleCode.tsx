import { useCustomStyle } from "../hooks/customStyle.ts"
import { useState } from "react"
import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react"
import { BackgroundDensity } from "./parameters/BackgroundDensity.tsx"
import { SelectFontColor } from "./parameters/SelectFontColor.tsx"
import { SelectBackgroundColor } from "./parameters/SelectBackgroundColor.tsx"

export const GenerateCustomStyleCode = () => {
  const { onCopy, value, generateStyle, hasCopied } = useCustomStyle()
  const [opacity, setOpacity] = useState(0)
  const [color, setColor] = useState("#ffffff")
  const [backgroundColor, setBackgroundColor] = useState("#000000")

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
      <Box marginBottom={"20px"}>
        <Button
          onClick={() => {
            generateStyle(opacity, color)
          }}
          colorScheme={"purple"}
        >
          生成
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
