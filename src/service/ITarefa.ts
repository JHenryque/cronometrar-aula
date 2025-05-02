export interface ITarefa {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado: boolean;
}

type Status = "idle" | "fecthing" | "ready" | "error";
type ChildernButton = "Começar!" | "Parar!" | "Reiniciar!" | "Finalizar!";

export interface ITarefaState {
  status: Status;
  button: ChildernButton;
  tarefas: ITarefa[];
}

export const initialState: ITarefaState = {
  status: "idle",
  button: "Começar!",
  tarefas: [
    {
      id: "1",
      tarefa: "React",
      tempo: "2:00:00",
      selecionado: true,
      completado: false,
    },
    {
      id: "2",
      tarefa: "PHP Laravel",
      tempo: "2:00:00",
      selecionado: false,
      completado: false,
    },
  ],
};

export type TarefaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setButton"; payload: ChildernButton }
  | { type: "setTarefas"; payload: ITarefa };

export interface ITarefaUserContext {
  state: ITarefaState;
  dispatch: React.Dispatch<TarefaAction>;
}
