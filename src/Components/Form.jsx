import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

function EmbedForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.frms.link/widgets/mfwidget.js";
    script.async = true;

    document.body.appendChild(script);

    window.onload = () => {
      new  window.MFWidget('64ed91de9d13aad6fcad0588').init();
    };
  }, []);

  return <div id="64ed91de9d13aad6fcad0588" ></div>;
}

export default EmbedForm;