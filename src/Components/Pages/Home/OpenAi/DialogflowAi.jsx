import { useEffect } from "react";

const DialogflowAi = () => {
  useEffect(() => {
    const kommunicateSettings = {
      appId: "336757bde00720ab4a47e8bd6480d1098",
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);

    window.kommunicate = window.kommunicate || {};
    window.kommunicate._globals = kommunicateSettings;

    // Cleanup function to remove the script when the component unmounts
    return () => {
      head.removeChild(script);
    };
  }, []);

    return <div>
      
  </div>;
};

export default DialogflowAi;
