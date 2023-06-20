import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

interface Props {
  uuid: string
}

function PdfWiewer({uuid}: Props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  //  console.log("PdfWiewer", uuid)

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
        <div style={{ height: "750px" }}>
          <Viewer
            //fileUrl={`http://localhost:3000/api/${uuid}`}
            fileUrl={`https://trees4survival.org/api/${uuid}`}
            httpHeaders={{ 'Content-Type': 'application/pdf',
            "Access-Control-Allow-Origin": "*",}}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default PdfWiewer;
