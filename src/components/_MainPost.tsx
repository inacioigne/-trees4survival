import { NextPage, GetStaticProps } from 'next';

import { Paper, Box, Grid, Typography, Button } from "@mui/material/";
import { grey } from "@mui/material/colors";

// Axios
import api from "@/lib/api";

interface DC {
  key: string;
  value: string;
}

interface Props {
  item: DC[];
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('https://repositorio.inpa.gov.br/rest/items/30e17215-d854-4e31-98fd-f7931cb0c735/metadata');
  // //const users: User[] = await res.json();
  // const item = await res.json()
  // console.log("R:", item)

  // api.get('items/30e17215-d854-4e31-98fd-f7931cb0c735/metadata', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((response) => console.log("R: ", response.data))
  //     .catch((error) => {
  //       console.log(error)
  //       throw error
  //     })
  const item = [{'key': 'chave', 'value': 'valor'}]

 return {
  props: {item}
 }

  
};
//const MainPost: NextPage<Props> = ({ item = []}) => {
  function MainPost({ item }: Props) {

  console.log("MainPost: ", item)

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
        //backgroundImage: `url(${post.image})`,
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
            {/* <Typography component="p" variant="h5" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color={grey[200]} paragraph>
              {post.resume}
            </Typography> */}
            <Button variant="contained">Ler Artigo</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainPost


