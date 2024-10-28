import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./DrawerMenu";
import { useTitleText } from "../contexts/TitleTextContext";

export default function TopBar() {
  const [open, setOpen] = React.useState(false);
  const { titleText } = useTitleText();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerMenu
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {titleText || "好きなサービスについて"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
