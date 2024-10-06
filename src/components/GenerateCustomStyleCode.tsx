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
  NumberInput,
  NumberInputField,
  Card,
  CardBody,
} from "@chakra-ui/react"

export const GenerateCustomStyleCode = () => {
  const { onCopy, value, generateStyle, hasCopied } = useCustomStyle()
  const [opacity, setOpacity] = useState(0)

  return (
    <Box marginBottom={"50px"}>
      <Heading as={"h3"} size={"md"} marginBottom={"20px"}>
        チャットの見た目の設定
      </Heading>
      <Grid marginBottom={"20px"}>
        <GridItem width={"400px"}>
          <Card>
            <CardBody>
              <Heading as={"h4"} size={"sm"} marginBottom={"10px"}>
                背景の濃さ
              </Heading>
              <Flex>
                <NumberInput
                  size={"sm"}
                  marginBottom={"10px"}
                  width={"90px"}
                  min={0}
                  max={100}
                  marginRight={"10px"}
                  defaultValue={0}
                >
                  <NumberInputField
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                  />
                </NumberInput>
                <Text fontSize={"xl"}>%</Text>
              </Flex>
              <Text>
                数値が大きくなるほど背景が濃くなります。
                <br />
                0%が透明で100%で黒くなります。
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
      <Box marginBottom={"20px"}>
        <Button
          onClick={() => {
            generateStyle(opacity)
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
