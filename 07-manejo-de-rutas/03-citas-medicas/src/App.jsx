import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Citas } from "./pages/Citas";
import { CitaDetalle } from "./pages/CitaDetalle";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" style={{ marginRight: "20px" }}>
            Inicio
          </Link>
          <Link to="/citas">Ver Citas</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/cita/:id" element={<CitaDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
