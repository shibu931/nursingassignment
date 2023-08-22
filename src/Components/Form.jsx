import React, { useEffect } from 'react'


export default function Form() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://form-assets.forms.gozen.io/cdn/scripts/embed-v1.21.js';
        script.async = true;
        console.log("Componenet Mounted")
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, [0]);
  return (
    <div className='mt-4 hero-form px-2'
                                id="zf-widget"
                                data-zf-embed-id="5077bd3a-d7e0-478d-a7ae-6f338af40110"
                                data-zf-id="NNt6bNhlQmUouNKzRXih"
                                data-zf-d_id="nBMMT5kcaufRTAf2t"
                                data-zf-type="standard"
                            ></div>
  )
}
