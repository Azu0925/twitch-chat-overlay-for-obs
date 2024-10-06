import { Alert, AlertIcon, Box } from "@chakra-ui/react"

export const News = () => {
  return (
    <Box marginBottom={"50px"} width={"90vw"}>
      <Alert status="warning" maxWidth={"100%"} borderRadius={"10px"}>
        <AlertIcon />
        TwitchのコメントをOBSのブラウザソースを使って配信画面上に表示させるためのURLとカスタムCSSを生成できます。
        <br />
        突貫で作ったアルファ版なので背景色や文字色などのカスタム機能はないです。機能追加、UIのアップデート、生成コードの最適化等は今後行う予定です。モチベが続けば。
      </Alert>
    </Box>
  )
}
