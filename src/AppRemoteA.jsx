import React from "react";

const AppRemoteA = () => {
  const ModuleA = React.lazy(() => import("remote_app/ModuleA"));

  return (
    <React.Suspense fallback="Loading App...">
      <ModuleA />
    </React.Suspense>
  );
};

export default AppRemoteA;
