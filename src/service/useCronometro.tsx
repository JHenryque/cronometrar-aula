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
    default:
      return state;
  }
}
