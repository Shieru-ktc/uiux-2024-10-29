import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar.tsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About.tsx";
import { TitleTextProvider } from "./contexts/TitleTextContext.tsx";
import { Box, Fade } from "@mui/material";
import PromotionPage from "./pages/Promotion.tsx";
import TeamsPage from "./pages/TeamsPage.tsx";
import PosterPage from "./pages/PosterPage.tsx";
import P2PPage from "./pages/P2PPage.tsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,

    h1: { fontSize: 46 },
    h2: { fontSize: 38 },
    h3: { fontSize: 36 },
    h4: { fontSize: 30 },
    h5: { fontSize: 26 },
    h6: { fontSize: 24 },
    subtitle1: { fontSize: 22 },
    body1: { fontSize: 20 },
    button: { textTransform: "none" },
  },
});

const routes = [
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/promotion", element: <PromotionPage /> },
  { path: "/promotion/teams", element: <TeamsPage /> },
  { path: "/promotion/poster", element: <PosterPage /> },
  { path: "/promotion/p2p", element: <P2PPage /> },
];

function FadeRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // フェードアウトをトリガーしてからlocationを更新
    setShow(false);
    const timeoutId = setTimeout(() => {
      setDisplayLocation(location); // フェードアウト完了後にページ更新
      setShow(true); // フェードイン開始
    }, 200); // フェードアウトに合わせた遅延

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <Fade in={show} timeout={200}>
      <Box>
        <Routes location={displayLocation}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </Fade>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <TitleTextProvider>
        <BrowserRouter basename="uiux-2024-10-29">
          <CssBaseline />
          <TopBar />
          <Box paddingX={4} paddingY={2}>
            <FadeRoutes />
          </Box>
        </BrowserRouter>
      </TitleTextProvider>
    </ThemeProvider>
  </StrictMode>
);
