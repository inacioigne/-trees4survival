// Axios
import api from "@/lib/api";

import { Item, Post } from "../../lib/types/interfaces";
import FeaturedPost from "@/components/FeaturedPost";
import MainPost from "@/components/MainPost";
import { Grid } from "@mui/material";

interface Props {
  main: Item;
  items: Post[];
}

function FamilyFarming({ main, items }: Props) {
  return (
    <main>
      <MainPost item={main} />
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <FeaturedPost item={item} key={index} />
        ))}
      </Grid>
    </main>
  );
}

async function GetData(obj: any) {
  const item: Post = await api
    .get(`items/${obj.UUID}/metadata`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      let item = { metadados: response.data, //image: obj.img 
      };

      return item;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return item;
}

export async function getStaticProps() {
  const item: Item = await api
    .get("items/b2caf169-9dd6-40ff-9303-e75ccea4caa5/metadata", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      let item = {
        metadados: response.data,
        image: "/image/family_farming.jpg",
      };

      return item;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const listItems = [
    {
      UUID: "	aead10cd-99e7-47b2-b645-2769e6be8f79",
      // img: "/image/pupunheira.jfif",
    },
    {
      UUID: "b2cccf80-95b6-451f-9eef-66b3e7ea70d2",
      // img: "/image/pupunheira.jfif",
    },
  ];

  const listaItems = await listItems.map(async (obj) => {
    const item = await GetData(obj);
    return item;
  });

  const todos = await Promise.all(listaItems).then((values) => {
    return values;
  });

  const items = { main: item, items: todos };

  return { props: items };
}

export default FamilyFarming;
