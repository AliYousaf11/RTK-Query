import "./App.css";
import GetProducts from "./component/GetProducts";
import GetByIDProducts from "./component/GetByIDProducts";
import GetByLimitsProducts from "./component/GetByLimitsProducts.js";
function App() {
  return (
    <>
      <GetProducts />
      <GetByIDProducts />
      <GetByLimitsProducts />
    </>
  );
}

export default App;
