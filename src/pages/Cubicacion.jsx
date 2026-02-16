import { useState } from "react";
import "./Cubicacion.css"; // Estilos (opcional)

export default function Cubicacion() {
  const [base, setBase] = useState({ largo: "", ancho: "" });
  const [corte, setCorte] = useState({
    largo: "",
    ancho: "",
    cantidad: ""
  });
  const [kerf, setKerf] = useState(3); // ancho de corte en mm

  const calcular = () => {
    const bL = Number(base.largo);
    const bA = Number(base.ancho);
    const cL = Number(corte.largo);
    const cA = Number(corte.ancho);
    const qty = Number(corte.cantidad);
    const k = Number(kerf);

    if (!bL || !bA || !cL || !cA || !qty) return null;

    // Escenario A (normal)
    const cortesFilaA = Math.floor(bL / (cL + k));
    const filasA = Math.floor(bA / (cA + k));
    const totalA = cortesFilaA * filasA;

    // Escenario B (rotado)
    const cortesFilaB = Math.floor(bL / (cA + k));
    const filasB = Math.floor(bA / (cL + k));
    const totalB = cortesFilaB * filasB;

    const piezasPorPlancha = Math.max(totalA, totalB);
    const planchasNecesarias =
      piezasPorPlancha > 0 ? Math.ceil(qty / piezasPorPlancha) : 0;

    const areaBase = bL * bA;
    const areaPiezas = piezasPorPlancha * (cL * cA);
    const desperdicio =
      areaBase > 0
        ? ((areaBase - areaPiezas) / areaBase) * 100
        : 0;

    return {
      piezasPorPlancha,
      planchasNecesarias,
      desperdicio: desperdicio.toFixed(2)
    };
  };

  const resultado = calcular();

  return (
    <div className="cubicacion-container">
      <h1>Optimización de Corte en Planchas</h1>

      <section className="inputs-section">
        <h2>Material Base</h2>
        <input
          type="number"
          placeholder="Largo (mm)"
          value={base.largo}
          onChange={(e) =>
            setBase({ ...base, largo: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Ancho (mm)"
          value={base.ancho}
          onChange={(e) =>
            setBase({ ...base, ancho: e.target.value })
          }
        />

        <h2>Pieza a Cortar</h2>
        <input
          type="number"
          placeholder="Largo pieza (mm)"
          value={corte.largo}
          onChange={(e) =>
            setCorte({ ...corte, largo: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Ancho pieza (mm)"
          value={corte.ancho}
          onChange={(e) =>
            setCorte({ ...corte, ancho: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Cantidad requerida"
          value={corte.cantidad}
          onChange={(e) =>
            setCorte({ ...corte, cantidad: e.target.value })
          }
        />

        <h3>Ancho de corte (Kerf)</h3>
        <input
          type="number"
          placeholder="Kerf (mm)"
          value={kerf}
          onChange={(e) => setKerf(e.target.value)}
        />
      </section>

      {resultado && (
        <section className="resultados-section">
          <h2>Resultados</h2>
          <p>
            <strong>Piezas por plancha:</strong>{" "}
            {resultado.piezasPorPlancha}
          </p>
          <p>
            <strong>Planchas necesarias:</strong>{" "}
            {resultado.planchasNecesarias}
          </p>
          <p>
            <strong>Desperdicio estimado:</strong>{" "}
            {resultado.desperdicio}%{" "}
          </p>
        </section>
      )}
    </div>
  );
}
