import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
interface Props {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function DrawerMenu(props: Props) {
  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <Box
        minWidth={400}
        padding={2}
        bgcolor={"background.paper"}
        height={"100%"}
      >
        <Typography variant="h2" fontWeight={"regular"} component="div">
          サイトメニュー
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="about" onClick={props.onClose}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="概要"
                secondary="学内イベントカレンダーの概要"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/promotion"
              onClick={props.onClose}
            >
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="プロモーション手法"
                secondary="学内イベントカレンダーのプロモーション手法提案"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
