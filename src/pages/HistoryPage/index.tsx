import { useEffect, useState } from "react";
import "./index.css";
import AvaliacaoService from "@/service/AvaliacaoService";
import { IAvaliacao } from "@/commons/interfaces";

interface IAvaliacaoComId extends IAvaliacao {
  id: number;
}

export function HistoryPage() {
  const [data, setData] = useState<IAvaliacaoComId[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AvaliacaoService.findAll();

      if(response.status === 200) {
        setData(response.data);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="justify-content-center">
      <div className="d-flex justify-content-center">
        <h2>Avaliações</h2>
      </div>

      <div className="d-flex justify-content-center">
        <table className="justify-content-center" style={{border: "1px solid black"}}>
          <thead className="thead-dark" style={{border: "1px solid black"}}>
            <tr style={{border: "1px solid black"}}>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade de amostras</th>
              <th scope="col">Escore Médio Geral</th>
              <th scope="col">Data da Avaliação</th>
              <th scope="col">Avaliador</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={6}>Nenhuma avaliação encontrada.</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="text-center">
                  <th scope="row"> {item.id} </th>
                  <td>{item.nome}</td>
                  <td>{item.totalAmostras}</td>
                  <td>{item.escoreMedioGeral}</td>
                  <td>{item.dataFim ? item.dataFim.toLocaleDateString() : 'N/A'}</td>
                  <td>{item.avaliador}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
