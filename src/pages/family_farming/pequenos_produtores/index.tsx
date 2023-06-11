import MainPost from "@/components/MainPost";

import { Item } from "../../../lib/types/interfaces";

// Axios
import api from "@/lib/api";

interface Props {
  main: Item;
}

export default function PequenosProdutores({ main }: Props) {
  return (
    <main>
      <h1>PequenosProdutores</h1>
      <MainPost item={main} />
    </main>
  );
}

export async function getStaticProps() {
    const item: Item = await api
      .get("items/3b86e318-ffb4-4181-9c0d-528a3c03b161/metadata", {
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
  
   
    const items = { main: item};
  
    return { props: items };
  }
