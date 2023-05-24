import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.page";
import Details from "../pages/ProcessDetails.page";

export const RouteList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/*" element={<div>Error Page</div>} />

      {/* <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <div>
                This needs to trigger the popup to login instead of this page if
                the user is not logged in
              </div>
            )
          }
        /> */}
    </Routes>
  );
};
