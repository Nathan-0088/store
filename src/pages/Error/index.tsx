import "./index.css";
import { Link } from "react-router";
export default function Error() {
  return (
    <div className="error">
      <h1>Pagina não encontrada</h1>
      <Link to={`/`}>Home</Link>
    </div>
  );
}
