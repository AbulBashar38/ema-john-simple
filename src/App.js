import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import Orders from "./Component/Orders/Orders";
import OrderReview from "./Component/OrderReview/OrderReview";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/home" element={<Shop />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="/review" element={<OrderReview />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
