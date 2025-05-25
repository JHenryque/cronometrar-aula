/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITarefa {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado?: boolean;
}

type Status = "idle" | "fecthing" | "ready" | "error";

export interface ITarefaState {
  status: Status;
  tarefas: ITarefa[];
}

export const initialState: ITarefaState = {
  status: "idle",
  tarefas: localStorage.getItem("tarefas")
    ? JSON.parse(localStorage.getItem("tarefas")!)
    : [],
};

export type TarefaAction =
  | { type: "setStatus"; payload: Status }
  | { type: "setTarefas"; payload: ITarefa }
  | { type: "setSelected"; payload: ITarefa["selecionado"] | any }
  | { type: "setRemoveCard"; payload: ITarefa["id"] | any };

export interface ITarefaUserContext {
  state: ITarefaState;
  dispatch: React.Dispatch<TarefaAction>;
}
