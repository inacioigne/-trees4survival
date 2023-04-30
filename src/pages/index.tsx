import { GetStaticProps } from "next";
// Components
// import Header from "@/components/Header";
import MainPost from "@/components/MainPost";
import { Grid, Divider } from "@mui/material/";

// Axios
import api from "@/lib/api";
import { loadPosts } from "@/lib/load";

import MainArticle from "../publications/agroforestry/agro1.json";

import { Item } from "../lib/types/interfaces";
import FeaturedPost from "@/components/FeaturedPost";

const sections = [
  { title: "Sistemas Agroflorestais", url: "#" },
  { title: "Agricultura Familiar", url: "#" },
  { title: "Melhoramento Genético de Espécies Arbóreas", url: "#" },
  { title: "Meliponicultura Cabocla", url: "#" },
  { title: "Estatística Experimental", url: "#" },
];

interface Props {
  main: Item;
  items: Item[];
}
export default function Home({ main, items }: Props) {

  return (
    <div>
      <main>
        <MainPost item={main} />
        <Grid container spacing={4}>
          {items.map((item, index) => (
            <FeaturedPost item={item} key={index} />
          ))}
        </Grid>
      </main>
    </div>
  );
}

async function GetData(obj: any) {

  const item: Item = await api
    .get(`items/${obj.UUID}/metadata`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      let item = { metadados: response.data, image: obj.img };

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
    .get("items/30e17215-d854-4e31-98fd-f7931cb0c735/metadata", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      let item = { metadados: response.data, image: "/image/saf.JPG" };

      return item;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const listItems = [
    {
      UUID: "8656c9a0-96b3-4b57-bf63-1f64224a5956",
      img: "/image/pupunheira.jfif",
    },
    {
      UUID: "b2cccf80-95b6-451f-9eef-66b3e7ea70d2",
      img: "/image/pupunheira.jfif",
    },
  ];

  const listaItems = await listItems.map(async (obj) => {
    const item = await GetData(obj);
    return item;
  });

  const todos = await Promise.all(listaItems).then((values) => {
    return values;
  });

  // console.log("PRO:", todos);

  const items = { main: item, items: todos };

  return { props: items };
}
