// "use client"

import PdfViewer from "@/components/pdfViewer";
import JsViewer from "../../components/jsVierwer"

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

function Pdf() {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // console.log(defaultLayoutPluginInstance)
    return ( 
        <div>
            <h1>PAGE</h1> 
            <PdfViewer />
            {/* <JsViewer /> */}

        </div>
    );
}

export default Pdf;