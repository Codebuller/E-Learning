import {useState} from "react";

export function useMergeState(initialState:any) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState:any) => 
    setState((prevState:any) => Object.assign({}, prevState, newState)
  );
  return [state, setMergedState];
}