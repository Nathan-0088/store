import { useState } from "react";
import "./car.css";
import type { ICar } from "../../types/carinho";
import { deleteCar, getLocalstorage } from "../../services/localstorage";
import { toast } from "react-toastify";

export default function Carrinho() {
  const [produtos, setProdutos] = useState<ICar[]>(() => getLocalstorage() || []);

  const total = produtos.reduce((acc, item) => acc + (item.price ?? 0), 0);

  function handleDelete(id: number) {
    deleteCar(id);

    const uptadeCar = getLocalstorage();
    setProdutos(uptadeCar);
    toast.error("Produto excluido");
  }

  return (
    <div className="carContainer">
      {produtos.length > 0 ? (
        <>
          {produtos.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <div className="cardetails">
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                  </div>

                  <button className="bntDeletecar" onClick={() => handleDelete(item.id)}>
                    Excluir
                  </button>
                </li>
              </ul>
            );
          })}

          <h2>
            Total: $ {total.toFixed(2)}{" "}
            <button onClick={() => toast.warn("Na versão 2.0")}>Finalizar</button>
          </h2>
        </>
      ) : (
        <h1>Carrinho vazio</h1>
      )}
    </div>
  );
}
