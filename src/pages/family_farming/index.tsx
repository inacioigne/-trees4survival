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
      let item = { metadados: response.data, uuid: obj.UUID
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
        uuid: "b2caf169-9dd6-40ff-9303-e75ccea4caa5"
      };

      return item;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const listItems = [
    {
      UUID: "aead10cd-99e7-47b2-b645-2769e6be8f79",
    },
    {
      UUID: "fcc3ebc1-d302-4fd8-87fb-f3c4d6d3aee3",
    },
    {
      UUID: "99a802c7-9800-492f-a338-2d332c83ec5e",
    },
    {
      UUID: "bff38635-d43c-4182-afe7-8879348a292e",
    },
    {
      UUID: "60bf7638-614a-49e7-a44b-f83a73191beb",
    },
    {
      UUID: "4e4cac8e-a0cb-4376-a608-83f37381ad19",
    },
    {
      UUID: "23618074-deb3-44d9-916a-85e973f251c7",
    } 
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
