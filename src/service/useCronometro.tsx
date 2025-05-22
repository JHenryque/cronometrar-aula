import { createContext, useContext, useReducer } from "react";
import {
  initialState,
  ITarefaState,
  ITarefaUserContext,
  TarefaAction,
} from "./ITarefa";

const CronometContext = createContext<ITarefaUserContext>({
  state: initialState,
  dispatch: () => {},
});

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [state, dispatch] = useReducer(ItarefaReducer, initialState);

  return (
    <CronometContext.Provider value={{ state, dispatch }}>
      {children}
    </CronometContext.Provider>
  );
}

export const UserContext = () => useContext(CronometContext);

function ItarefaReducer(
  state: ITarefaState,
  action: TarefaAction
): ITarefaState {
  switch (action.type) {
    case "setStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "setTarefas":
      localStorage.setItem(
        "tarefas",
        JSON.stringify([...state.tarefas, action.payload])
      );
      return {
        ...state,
        tarefas: [...state.tarefas, action.payload],
      };
    case "setSelected":
      return {
        ...state,
        tarefas: state.tarefas.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              selecionado: item.selecionado ? false : true,
            };
          } else {
            return {
              ...item,
              selecionado: false,
            };
          }
        }),
      };
    case "setRemoveCard":
      localStorage.setItem(
        "tarefas",
        JSON.stringify(
          state.tarefas.filter((item) => item.id !== action.payload)
        )
      );
      return {
        ...state,
        tarefas: state.tarefas.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
