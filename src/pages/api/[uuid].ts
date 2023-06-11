import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uuid } = req.query;
  const x = "30e17215-d854-4e31-98fd-f7931cb0c735";

    const baseUrl = "https://repositorio.inpa.gov.br";
    const url = `${baseUrl}/rest/items/${uuid}/bitstreams`;
    const [data] = await axios.get(url).then((response) => {
      return response.data;
    });
    const pdf = `${baseUrl}${data.retrieveLink}`;
    const response: AxiosResponse<ArrayBuffer> = await axios.get(pdf, {
      responseType: "arraybuffer",
    });
    const pdfData: ArrayBuffer = response.data;
    
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="myfile.pdf"');
  res.status(200).send(pdfData);
}
