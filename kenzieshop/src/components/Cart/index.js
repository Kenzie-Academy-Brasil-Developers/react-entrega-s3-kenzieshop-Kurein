import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { cartBuyThunk } from "../../store/modules/cart/thunk";
import Card from "../Card";
import "./styles.css";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const history = useHistory();

  const totalPrice = cart.reduce((acc, elt) => {
    return acc + elt.price;
  }, 0);

  return (
    <div className="cartMainDiv">
      <div>
        <div className="valueDiv">
          <p>Valor total: R${totalPrice.toFixed(2)}</p>
          <button onClick={() => dispatch(cartBuyThunk())}>
            Finalizar Compra
          </button>
        </div>
        <button onClick={() => history.push("/")} className="homeButton">
          Ir para a Home
        </button>
      </div>
      <div className="cartMainDiv__products">
        {cart.map((elt, index) => {
          return <Card key={index} product={elt} isCart={true} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
