import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";

import type { AppProps } from "next/app";
import Header from "@/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title="Trees for Survival" />
        <Component {...pageProps} />

      </Container>
    </ThemeProvider>
  );
}
