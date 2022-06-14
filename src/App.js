import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery"
// style.css starts here
import "../src/assets/css/style.css";
// style.css ends here
import PublicRoutes from "./routes/PublicRoutes";
import "bootstrap/dist/js/bootstrap";
import "@popperjs/core";
function App() {
  useEffect(() => {
    // Mobile Nav
    $("document").ready(function () {
      $(".canvas_btn i").click(function () {
        $(".mobile_header").addClass("show");
      });

      $(".mobile_header .cancel").click(function () {
        $(".mobile_header").removeClass("show");
      });
    });
    // Mobile Nav
  }, []);

  return (
    <>
      <PublicRoutes />
    </>
  );
}

export default App;
