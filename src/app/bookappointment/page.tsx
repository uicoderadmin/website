"use client";

import { useEffect } from "react";
import Script from "next/script";

const BookAppointment: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to avoid duplicate script loads
    };
  }, []);

  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/theuicoders/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=9eff00"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default BookAppointment;
