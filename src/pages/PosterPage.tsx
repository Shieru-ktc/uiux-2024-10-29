import { useTitleText } from "@/contexts/TitleTextContext";
import { Typography, Stack, Button } from "@mui/material";
import { useEffect } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function PosterPage() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("ポスターの掲示");
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
          ポスターを掲示する
        </Typography>
        <Typography>
          2F
          自動販売機付近の掲示板にポスターを掲示し、学生にアプリの存在を示します。
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
          <li>一度貼ってしまえばしばらくは有効</li>
          <li>自動販売機を利用する多くの学生の目に入る</li>
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
          <li>職員に許可を得る必要がある</li>
          <li>ポスターを作る手間と印刷費用がかかる</li>
          <li>
            掲示板が日常の風景と同化しているせいで、注目してもらえない可能性が高い
          </li>
        </ul>
      </Stack>
    </>
  );
}
