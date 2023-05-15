import TestViewer from "@/components/testViewer";
import axios, { AxiosResponse } from 'axios';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Pdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();




  return (
    <div>
    <h1>TESTE</h1>
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
        <div style={{ height: "750px" }}>
          <Viewer
            fileUrl={`http://localhost:3000/api/30e17215-d854-4e31-98fd-f7931cb0c735`}
            httpHeaders={{ 'Content-Type': 'application/pdf',
            "Access-Control-Allow-Origin": "*",}}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
    </div>
    

  );
}

export default Pdf;
