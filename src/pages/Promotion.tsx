import { useTitleText } from "@/contexts/TitleTextContext";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PromotionPage() {
  const { setTitleText } = useTitleText();

  useEffect(() => {
    setTitleText("プロモーション手法");
  }, [setTitleText]);

  return (
    <Stack spacing={3} direction={"row"}>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Microsoft Teams で配信する
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Microsoft
            Teamsは、学校内で使われている主要なコミュニケーションツールです。
          </Typography>
        </CardContent>
        <CardActions>
          <Button to="teams" component={Link}>
            もっと詳しく
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            自動販売機裏のポスター
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ポスターとして掲示することで、学生にアプリの存在を知らせることができます。
          </Typography>
        </CardContent>
        <CardActions>
          <Button to="poster" component={Link}>
            もっと詳しく
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            口コミで広める
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            学生同士でアプリの良さを共有することで、広く知られるようになります。
          </Typography>
        </CardContent>
        <CardActions>
          <Button to="/promotion/p2p" component={Link}>
            もっと詳しく
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
