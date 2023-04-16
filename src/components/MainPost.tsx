import { NextPage, GetStaticProps } from "next";

import { Paper, Box, Grid, Typography, Button } from "@mui/material/";
import { grey } from "@mui/material/colors";

// Axios
import api from "@/lib/api";

// interface DC {
//   key: string;
//   value: string;
// }

import { Item } from "../lib/types/interfaces";

interface Props {
  item: Item;
}

function MainPost({ item }: Props) {
  const [title] = item.metadados.filter((dc) => dc.key == "dc.title");
  const [resumo] = item.metadados.filter(
    (dc) => dc.key == "dc.description.resumo"
  );

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${item.image})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={10}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="p" variant="h5" color="inherit" gutterBottom>
              {title.value}
            </Typography>
            <Typography variant="subtitle1" color={grey[100]} paragraph>
              {resumo.value}
            </Typography>
            <Button variant="contained">Ler Artigo</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainPost;
