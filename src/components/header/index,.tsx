import { Link } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Store</h1>
      <nav>
        <Link to={`/`}>BigStore</Link>
        <Link to={`/carrinho`}>Carrinho</Link>
      </nav>
    </header>
  );
}
