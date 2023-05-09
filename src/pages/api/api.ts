import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://repositorio.inpa.gov.br/bitstream/1/39111/1/passo0.pdf'
    const response = await fetch(url);
    const buffer = await response.buffer();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', buffer.length.toString());
    res.send(buffer);

}