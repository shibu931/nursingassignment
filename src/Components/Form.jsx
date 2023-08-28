import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

function EmbedForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.frms.link/bundles/scripts/live/us/embed.js";
    script.async = true;

    document.body.appendChild(script);

    window.onload = () => {
      new window.makeforms.Embed({ sourceId: "64ec8fd6a831cb2298776e66", root: "formContainer" }).build();
    };
  }, []);

  return <div id="formContainer"></div>;
}

export default EmbedForm;