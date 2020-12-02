import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Cart } from './context/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Cart />
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
