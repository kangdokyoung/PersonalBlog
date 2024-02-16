import { useContext, useEffect } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";
import type { History, Blocker, Transition } from "history";

export const useBlocker = (blocker: Blocker, when = true): void => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as History;

  useEffect;
};
