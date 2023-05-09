import axios from "axios";
import { useEffect, useState } from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer, Worker } from "@react-pdf-viewer/core";

interface Props {
    url: string;
    proxyUrl: string;
  }

function TestViewer({url, proxyUrl}: Props) {
    const [pdf, setPdf] = useState<ArrayBuffer | null>(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        axios
          .get(proxyUrl, {
            params: { url },
            responseType: 'arraybuffer',
          })
          .then((response) => {
            setPdf(response.data);
          });
      }, [url, proxyUrl]);

    return (  <div style={{ height: '750px' }}>
        {
            pdf && (<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
            <div style={{ height: "750px" }}>
              <Viewer
                fileUrl={{ data: pdf, name: 'document.pdf' }}
                httpHeaders={{ 'Content-Type': 'application/pdf',
                "Access-Control-Allow-Origin": "*",}}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>)
        }
    </div> );
}

export default TestViewer;