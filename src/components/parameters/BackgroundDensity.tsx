import {
  Card,
  CardBody,
  Flex,
  Text,
  GridItem,
  Heading,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react"
import React from "react"

export const BackgroundDensity = (props: {
  opacity: number
  setOpacity: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { opacity, setOpacity } = props

  return (
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
  )
}
