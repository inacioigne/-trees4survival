import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider 
} from "@mui/material/";

import { Item, Post } from "../lib/types/interfaces";

interface Props {
  item: Post;
}

export default function FeaturedPost({ item }: Props) {
  const [title] = item.metadados.filter((dc) => dc.key == "dc.title");
  const [resumo] = item.metadados.filter(
    (dc) => dc.key == "dc.description.resumo"
  );
  const [handle] = item.metadados.filter((dc) => dc.key == "dc.identifier.uri");
  // const pdf = handle.value.split("/")[5]
  const uuid = item.uuid
  // console.log("FeaturedPost", item)

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/article/${uuid}`}>
        <Card sx={{ display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title.value}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {resumo.value}
            </Typography>
            <Divider />
          </CardContent>
          
          <CardActions >
          <Divider />
            <Button size="small">Ler Artigo</Button>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
