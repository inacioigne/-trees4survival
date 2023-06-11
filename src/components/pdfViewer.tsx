import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

interface Props {
  handle: string
}

function PdfWiewer({handle}: Props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
        <div style={{ height: "750px" }}>
          <Viewer
            // fileUrl={`/pdf/${handle}.pdf`}
            fileUrl={`http://localhost:3000/api/30e17215-d854-4e31-98fd-f7931cb0c735`}
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
