import { GetStaticProps } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  item: [];
}

const UsersPage = ({ item }: Props) => {
    //console.log('c:', item)

  return (
    <div>
      <h1>Artigo</h1>
      <ul>
        {item.map((m, index) => (
          <li key={index}>
            {m.key} - {m.value} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://repositorio.inpa.gov.br/rest/items/30e17215-d854-4e31-98fd-f7931cb0c735/metadata');
  //const users: User[] = await res.json();
  const item = await res.json()
  // console.log("R:", item)

  return {
    props: {
        item,
    },
  };
};

export default UsersPage;
