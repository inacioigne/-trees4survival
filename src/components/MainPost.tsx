import { NextPage, GetStaticProps } from "next";

import { Paper, Box, Grid, Typography, Button } from "@mui/material/";
import { grey } from "@mui/material/colors";

import Link from 'next/link'


// Axios
import api from "@/lib/api";

import { Item } from "../lib/types/interfaces";

interface Props {
  item: Item;
}

function MainPost({ item }: Props) {
  const [title] = item.metadados.filter((dc) => dc.key == "dc.title");
  const [resumo] = item.metadados.filter(
    (dc) => dc.key == "dc.description.resumo"
  );
  const [handle] = item.metadados.filter((dc) => dc.key == "dc.identifier.uri");
  // const pdf = handle.value.split("/")[5]
  const uuid = item.uuid


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
            <Link href={`/article/${uuid}`}>
            <Button variant="contained">Ler Artigo</Button>
              
            </Link>
            
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainPost;
