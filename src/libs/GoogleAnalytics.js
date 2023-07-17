"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

const SSgoogleAnalytics = (props) => {
  return (
    <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} {...props} />
  );
};

export default SSgoogleAnalytics;
