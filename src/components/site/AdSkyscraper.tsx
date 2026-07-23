import { useEffect, useRef } from "react";

export function AdSkyscraper() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.childNodes.length > 0) return;

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      atOptions = {
        'key' : '450945eab24a56f1384f44a7e6c1120e',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    const adScript = document.createElement("script");
    adScript.src = "https://www.highperformanceformat.com/450945eab24a56f1384f44a7e6c1120e/invoke.js";

    container.appendChild(configScript);
    container.appendChild(adScript);
  }, []);

  return <div ref={containerRef} style={{ width: 160, height: 300 }} />;
}