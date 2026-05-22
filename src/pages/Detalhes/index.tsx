import "./detalhes.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import { getDetalhes } from "../../services/products";
import type { IProduto } from "../../types/produto";
import { addCar } from "../../services/localstorage";

export default function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState<IProduto>();

  useEffect(() => {
    const detalhes = async () => {
      const response = await getDetalhes(Number(id));
      setProduto(response);
    };

    detalhes();
  }, [id]);

  return (
    <div className="detalhesContainer">
      <h1>{produto?.title}</h1>
      <p>{produto?.description}</p>
      <img src={produto?.image} alt="" className="img" />
      <h2>$ {produto?.price} </h2>
      <h4>{produto?.rating.rate} / 10 </h4>
      <button
        onClick={() => {
          if (!produto) return;

          addCar({
            id: produto.id,
            price: produto.price,
            title: produto.title,
          });

          toast.success("Produto adcionado ao carinho");
        }}
        className="bntCarAdd"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
