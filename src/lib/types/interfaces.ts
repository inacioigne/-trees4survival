interface DC {
    key: string;
    value: string;
    
  }

export interface Item {
    metadados: DC[];
    image: string,
    uuid: string
  }

  export interface Post {
    metadados: DC[];
    uuid: string
  }