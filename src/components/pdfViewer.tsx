import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function PdfWiewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  console.log(Viewer);
  return (
    <div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.js">
        <div style={{ height: "750px", border: "solid" }}>
          <Viewer
            fileUrl="/pdf/guarana.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default PdfWiewer;
