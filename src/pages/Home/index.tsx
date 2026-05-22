import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getProdutos } from "../../services/products";
import type { IProduto } from "../../types/produto";

export default function Home() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    const loadProdutos = async () => {
      const response = await getProdutos();

      setProdutos(response);
    };

    loadProdutos();
  }, []);

  return (
    <div className="containerHome">
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <div key={produto.id} className="card">
            <h4>{produto.title}</h4>
            <img src={produto.image} />
            <div>
              <p>$ {produto.price}</p>
              <span>{produto.rating.rate} / 10 🌟</span>
            </div>
            <Link to={`/detalhes/${produto.id}`}>Detalhes</Link>
          </div>
        ))
      ) : (
        <h1>Carregando os dados aguarde ...</h1>
      )}
    </div>
  );
}
