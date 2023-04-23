import PdfWiewer from "@/components/pdfViewer";

import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { articles } from "../../services/articles";

import api from "@/lib/api";
import { Item } from "../../lib/types/interfaces";
import axios, { AxiosInstance } from "axios";

interface Props {
  // item: Item;
  // pdfData: any;
  handle: string;
}

function Article({ handle }: Props) {
  // console.log("A: ", handle)
  //const [title] = item.filter((dc) => dc.key == "dc.title");

  return (
    <div>
      <PdfWiewer handle={handle} />
    </div>
  );
}

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const handle = params?.handle;
  // console.log("Static", handle);
  // const uuid = params?.uuid;

  // const item: Item = await api
  //   .get(`items/${uuid}/metadata`, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //   .then((response) => {
  //     //let item = { metadados: response.data, image: "/image/saf.JPG" };

  //     return response.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     throw error;
  //   });

  return {
    props: {
      handle,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  ///const artigos = fakeArticles;

  const path = articles.map((artigo) => ({
    params: { handle: artigo.handle },
  }));
  // console.log("PATH", path);

  return {
    paths: path, //[{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
};
