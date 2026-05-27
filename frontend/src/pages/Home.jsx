import { useEffect, useRef } from "react";

export default function Home() {
  const mapRef = useRef(null);

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(37.2719952, 127.4348221),
      level: 3,
    };
    new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return (
    <div
      ref={mapRef}
      className="fixed top-14 left-0 right-0 bottom-16 md:left-64 md:bottom-0"
    />
  );
}