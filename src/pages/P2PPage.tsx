import { useTitleText } from "@/contexts/TitleTextContext";
import { Typography, Stack, Button } from "@mui/material";
import { useEffect } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function P2PPage() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("口コミで広める");
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
          口コミで広める
        </Typography>
        <Typography>
          数人にアプリを使ってもらい、その良さを共有してもらうことで、アプリの知名度を広めます。
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
          <li>人づてならではの信頼度がある</li>
          <li>特別な費用がかからない</li>
          <li>職員からの特別な許可を得る必要がない</li>
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
          <li>情報が拡散するまでに時間がかかる</li>
          <li>
            n次情報が拡散されることになり、不正確な情報が伝わる可能性が高い
          </li>
        </ul>
      </Stack>
    </>
  );
}
