import "bootstrap/dist/css/bootstrap.min.css";
// style.css starts here
import "../src/assets/css/style.css";
// style.css ends here
import PublicRoutes from "./routes/PublicRoutes";
import 'bootstrap/dist/js/bootstrap';
import "@popperjs/core";
function App() {
  return (
    <>
      <PublicRoutes />
    </>
  );
}

export default App;
