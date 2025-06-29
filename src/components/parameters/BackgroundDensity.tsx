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
import { validateNumberRange } from "../../utils/validation"

export const BackgroundDensity = (props: {
  opacity: number
  setOpacity: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { opacity, setOpacity } = props

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    // 数値検証を行い、有効な範囲内の値のみ設定
    if (validateNumberRange(value, 0, 100) || e.target.value === "") {
      setOpacity(e.target.value === "" ? 0 : value)
    }
  }

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
              value={opacity}
              onChange={(_, valueAsNumber) => {
                if (
                  !isNaN(valueAsNumber) &&
                  validateNumberRange(valueAsNumber, 0, 100)
                ) {
                  setOpacity(valueAsNumber)
                }
              }}
            >
              <NumberInputField
                value={opacity}
                onChange={handleOpacityChange}
                aria-label="背景の濃さ (0-100%)"
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
