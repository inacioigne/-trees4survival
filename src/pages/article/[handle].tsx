import PdfWiewer from "@/components/pdfViewer";

import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { articles } from "../../services/articles";

import api from "@/lib/api";
import { Item } from "../../lib/types/interfaces";
import axios, { AxiosInstance } from "axios";

interface Props {

  handle: string;
}

function Article({ handle }: Props) {


  return (
    <div>
      <PdfWiewer handle={handle} />
    </div>
  );
}

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const handle = params?.handle;
 
  return {
    props: {
      handle,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {

  const path = articles.map((artigo) => ({
    params: { handle: artigo.handle },
  }));

  return {
    paths: path, 
    fallback: false, // can also be true or 'blocking'
  };
};
