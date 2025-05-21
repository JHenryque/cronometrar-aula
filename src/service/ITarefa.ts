/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITarefa {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado?: boolean;
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
  tarefas: localStorage.getItem("tarefas")
    ? JSON.parse(localStorage.getItem("tarefas")!)
    : [],
};

export type TarefaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setButton"; payload: ChildernButton }
  | { type: "setTarefas"; payload: ITarefa }
  | { type: "setSelected"; payload: ITarefa["selecionado"] | any };

export interface ITarefaUserContext {
  state: ITarefaState;
  dispatch: React.Dispatch<TarefaAction>;
}

/*[
    {
      id: "1",
      tarefa: "React",
      tempo: "2:00:00",
      selecionado: false,
      completado: false,
    },
    {
      id: "2",
      tarefa: "PHP Laravel",
      tempo: "2:00:00",
      selecionado: true,
      completado: false,
    },
  ] */
