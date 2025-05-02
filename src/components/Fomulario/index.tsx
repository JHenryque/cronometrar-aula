import { useEffect, useState } from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.css";
import { UserContext } from "../../service/useCronometro";

function Formulario() {
  const { state } = UserContext();
  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("clicou");
  }

  console.log(state.tarefas.filter((item) => item.tempo)[0].tempo);
  const hora = state.tarefas.filter((item) => item.tempo)[0].tempo;

  const [tempo, setTempo] = useState<number | any>(3200); // tempo em segundos
  const [rodando, setRodando] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Atualiza tempo a cada segundo
  useEffect(() => {
    let intervalo;

    if (rodando) {
      intervalo = setInterval(() => setTempo((t) => t - 1), 1000);
    }
    return () => clearInterval(intervalo);
  }, [rodando]);

  const formatarTempo = (segundos: number) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const adicionarTarefa = () => {
    if (!nomeTarefa.trim()) return;

    setTarefas([...tarefas, { nome: nomeTarefa.trim(), tempo: tempo }]);
    setNomeTarefa("");
    setTempo(0);
    setRodando(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">Cronômetro de Tarefas</h1>

      <div className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Nome da Tarefa"
          value={nomeTarefa}
          onChange={(e) => setNomeTarefa(e.target.value)}
        />

        <div className="text-center text-3xl font-mono">
          {formatarTempo(tempo)}
        </div>

        <div className="flex gap-2 justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setRodando(!rodando)}
          >
            {rodando ? "Pausar" : "Iniciar"}
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={adicionarTarefa}
            disabled={tempo === 0 || !nomeTarefa.trim()}
          >
            Salvar Tarefa
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Tarefas:</h2>
        {tarefas.map((t, i) => (
          <div
            key={i}
            className="border p-3 rounded shadow flex justify-between"
          >
            <span>{t.nome}</span>
            <span className="font-mono">{formatarTempo(t.tempo)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formulario;
