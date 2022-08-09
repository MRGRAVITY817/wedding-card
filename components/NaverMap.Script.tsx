import Script from "next/script";
import { useState } from "react";

// Naver
const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const MAP_URL =
  "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
  CLIENT_ID +
  "&submodules=geocoder";

export const NaverMapScript = () => {
  const [naver, setNaver] = useState<any>(null);

  let map: any = null;

  if (naver && naver.maps) {
    const mapOptions = {
      center: new naver.maps.LatLng(37.19267209999984, 126.96940950000001),
      zoom: 17,
    };
    map = new naver.maps.Map("location-map", mapOptions);
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.19267209999984, 126.96940950000001),
      map,
    });
  }
  return (
    <Script
      type="text/javascript"
      src={MAP_URL}
      onLoad={() => {
        const naver = (window as any).naver;
        setNaver(naver);
      }}
      onError={(e) => console.error("Whoops!")}
    />
  );
};
