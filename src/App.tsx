import { useState } from "react"
import { useChatUrl } from "./hooks/chatUrl.ts"
import { useCustomStyle } from "./hooks/customStyle.ts"

function App() {
  const { url, generateUrl } = useChatUrl()
  const { style, generateStyle } = useCustomStyle()
  const [userName, setUserName] = useState("")
  const [opacity, setOpacity] = useState(0)

  return (
    <>
      <h1>
        Twitchチャットを配信画面にいい感じに表示させるためのカスタムCSSを生成するツール
      </h1>
      <section>
        <h2>注意</h2>
        <p>
          TwitchのコメントをOBSのブラウザソースを使って配信画面上に表示させるためのURLとカスタムCSSを生成できます。
          <br />
          突貫で作ったアルファ版なので背景色や文字色などのカスタム機能はないです。機能追加、UIのアップデート、生成コードの最適化等は今後行う予定です。モチベが続けば。
        </p>
      </section>
      <main>
        <div>
          <label>
            TwitchのユーザーID:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => generateUrl(userName)}>URLを生成</button>
          </label>
          <div id="url-result">{url}</div>
        </div>
        <div>
          <label>
            背景の濃さ:
            <input
              type="number"
              min="0"
              max="100"
              id="opacity"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
            />
            %
          </label>
          <p>
            数値が大きくなるほど背景が濃くなります。
            <br />
            0%が透明で100%で黒くなります。
          </p>
          <button onClick={() => generateStyle(opacity)}>生成</button>
        </div>
        <div id="result">
          <p>
            ↓ここに生成されるコードをOBSのブラウザソースにあるカスタムCSSのところにコピペしてください。
          </p>
          <div id="css-result">{style}</div>
        </div>

        <p>
          不具合等のお問い合わせは
          <a href="https://x.com/yamaneko717">@yamaneko717</a>
        </p>
      </main>
      <footer>
        <small>&copy;2024 Àżu</small>
        <p>
          <a href="https://github.com/Azu0925/twitch-chat-overlay-for-obs?tab=MIT-1-ov-file#readme">
            MIT license
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
