import { useTitleText } from "@/contexts/TitleTextContext";
import { Typography, Stack, Button } from "@mui/material";
import { useEffect } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function TeamsPage() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("Microsoft Teamsでの配信");
  }, [setTitleText]);

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ marginY: 2 }}
        to="/promotion"
        component={Link}
      >
        <ArrowBackIcon sx={{ marginRight: 1 }} />
        プロモーション提案に戻る
      </Button>
      <Stack spacing={2}>
        <Typography variant="h1" gutterBottom>
          Microsoft Teamsで配信する
        </Typography>
        <Typography>
          Microsoft
          Teamsでの配信は、京都テック内の学生に確実にリーチさせる手法の一つです。
          <br />
          教職員の方の協力を得て、宣伝メッセージの配信を行います。
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          display={"inline-flex"}
          alignItems={"center"}
          color="success"
        >
          <GppGoodIcon sx={{ marginRight: 1 }} /> Pros
        </Typography>
        <ul>
          <li>料金が発生しない</li>
          <li>アプリのターゲットとなる層に確実にリーチできる</li>
        </ul>
        <Typography
          variant="h2"
          gutterBottom
          display={"inline-flex"}
          alignItems={"center"}
          color="error"
        >
          <GppBadIcon sx={{ marginRight: 1 }} /> Cons
        </Typography>
        <ul>
          <li>時間の経過と同時に流れていく（古い情報にリーチしづらい）</li>
          <li>職員に許可を得る必要がある</li>
        </ul>
      </Stack>
    </>
  );
}
