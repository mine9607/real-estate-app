"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React from "react";

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 43.39843,
    lng: -80.29543,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
    </LoadScript>
  );
};

export default MapContainer;
