import TestViewer from "@/components/testViewer";

function Pdf() {
  return (
    <TestViewer
      url="https://example.com/my-document.pdf"
      proxyUrl="https://example-proxy.com/proxy"
    />
  );
}

export default Pdf;
