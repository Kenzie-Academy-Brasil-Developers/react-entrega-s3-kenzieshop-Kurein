import { useDispatch } from "react-redux";
import { cartAddThunk, cartRemoveThunk } from "../../store/modules/cart/thunk";
import "./styles.css";

function Card({ product, isCart = false }) {
  const dispatch = useDispatch();
  const { id, name, price, img } = product;

  return (
    <div className="productCard">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>R${price}</p>
      {isCart ? (
        <button onClick={() => dispatch(cartRemoveThunk(id))}>
          Remover do Carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(cartAddThunk(product))}>
          Adicionar ao Carrinho
        </button>
      )}
    </div>
  );
}

export default Card;
