
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { articles } from "../../services/articles";
import { useEffect, useState } from "react";

interface Props {
  file: Uint8Array;
}

function Article() {
  const url = "https://drive.google.com/file/d/1fWBRfzcmWyahj3HXql64-E5vteH_3kSn/preview";
  const [pdfData, setPdfData] = useState<Blob | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      console.log(response)
      const blob = await response.blob();
      setPdfData(blob);
    };
    fetchData();
  }, [url]);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
        <div style={{ height: "750px" }}>
          {/* <Viewer
            fileUrl={URL.createObjectURL(pdfData)}
            httpHeaders={{
              "Content-Type": "application/pdf",
              "Access-Control-Allow-Origin": "*",
            }}
            plugins={[defaultLayoutPluginInstance]}
          /> */}
        </div>
      </Worker>
    </div>
  );
}

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = "https://react-pdf-viewer.dev/assets/pdf-open-parameters.pdf";
  
  

  async function loadFile(url: RequestInfo | URL) {
      try {
          const response = await fetch(url);

          if (!response.ok) {
              throw new Error("Não foi possível carregar o arquivo");
          }
          const buffer = await response.arrayBuffer();
          const uint8Array = new Uint8Array(buffer);
          return uint8Array;
      } catch (error) {
          console.error("Ocorreu um erro:", error);
      }
  }

//   function serializeUint8Array(uint8Array: Uint8Array): string {
//     const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
//     const json = { data: base64String };
//     return JSON.stringify(json);
//   }


//   const uint8Array = await loadFile(url);
//   console.log("Dados do arquivo:", uint8Array);

//   const json = serializeUint8Array(uint8Array);
//   console.log(json);

  return {
    props: {
        url,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const path = articles.map((artigo) => ({
    params: { handle: artigo.handle },
  }));

  return {
    paths: path,
    fallback: false,
  };
};
