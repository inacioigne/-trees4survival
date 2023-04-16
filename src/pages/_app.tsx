import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import { CssBaseline, Container } from "@mui/material";

import type { AppProps } from 'next/app'



export default function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
        <Component {...pageProps} />

        </Container>
        

        </ThemeProvider>
    )
    
}