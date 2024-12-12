import {
  Box,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"

export const SelectFontColor = (props: {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { color, setColor } = props
  return (
    <GridItem width={"400px"}>
      <Card>
        <CardBody>
          <Heading as={"h4"} size={"sm"} marginBottom={"10px"}>
            チャットの色
          </Heading>
          <Box marginBottom={"25px"}>
            <Flex>
              <HexColorInput color={color} onChange={setColor} />
              <Box
                background={color}
                width={"1.5em"}
                height={"1.5em"}
                borderRadius={"5px"}
              ></Box>
            </Flex>
          </Box>
          <Box marginBottom={"25px"}>
            <HexColorPicker color={color} onChange={setColor} />
          </Box>
          <Text>16進数でチャットテキストの色を選ぶことができます。</Text>
        </CardBody>
      </Card>
    </GridItem>
  )
}
