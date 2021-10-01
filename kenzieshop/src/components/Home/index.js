import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from "../Card";
import "./styles.css";

function Home() {
  const { products } = useSelector((state) => state);
  const history = useHistory();

  return (
    <div className="homeMainDiv">
      <button onClick={() => history.push("/cart")}>Ir para o Carrinho</button>
      <div className="homeMainDiv__products">
        {products.map((elt, index) => {
          return <Card key={index} product={elt} />;
        })}
      </div>
    </div>
  );
}

export default Home;
