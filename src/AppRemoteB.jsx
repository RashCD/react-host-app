import React from "react";

const AppRemoteB = () => {
  const ModuleB = React.lazy(() => import("remote_app_b/ModuleB"));

  return (
    <React.Suspense fallback="Loading App...">
      <ModuleB />
    </React.Suspense>
  );
};

export default AppRemoteB;
