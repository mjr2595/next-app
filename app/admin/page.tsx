"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const AdminHomePage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div>Admin HomePage</div>
      <button onClick={() => setVisible(!isVisible)}>
        Toggle Heavy Component
      </button>
      {isVisible && <HeavyComponent />}
    </>
  );
};

export default AdminHomePage;
