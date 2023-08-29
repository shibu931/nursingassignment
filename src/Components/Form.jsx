import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

function EmbedForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forms.app/static/embed.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      var formsappForm = new window.formsapp('64edf9f987b11fad18feb978', 'standard', {"width":"90%","height":"450px","opacity":0})
    };
  }, []);

  return <div formsappId="64edf9f987b11fad18feb978" className='w-80'></div>;
}

export default EmbedForm;