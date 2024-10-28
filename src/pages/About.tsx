import { Button, Stack } from "@mui/material";
import { useTitleText } from "../contexts/TitleTextContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("概要");
  }, [setTitleText]);

  return (
    <Stack>
      <h1>学内イベントカレンダー</h1>
      <div>
        <h2>目的</h2>
        <p>
          学内のイベントや授業などを一つのカレンダーにまとめ、学生たちが簡単に情報にアクセスできるカレンダー。
        </p>
        <p>
          Teamsにテキストとして流れているイベント情報や補講連絡を共有カレンダーとしてまとめることで、
          <br />
          学生たちが情報に簡単にアクセスできるようにするほか、「間違えてバイトを入れてしまった」といったミスを防ぐことが目的です。
        </p>
        <h2>ターゲット層</h2>
        <p>京都デザイン&テクノロジー専門学校に在籍する学生。</p>
        <h2>プロモーション手法</h2>
        <p>
          Teamsでの配信、ポスターの掲示など、アプリを広めるための手法を紹介しています。
        </p>
        <Button to="/promotion" component={Link} variant="outlined">
          詳しくはこちら
        </Button>
      </div>
    </Stack>
  );
}
