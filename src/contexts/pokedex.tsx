import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';

import { POKEAPI_URL } from '../constants';

type PokedexState = {
  currentUrl: string;
};

type PokedexContext = {
  currentUrl: PokedexState['currentUrl'];
  setPokedex: React.Dispatch<React.SetStateAction<PokedexState>>;
  setPokedexPage: (url: string) => void;
};

const PokedexContext = createContext<PokedexContext | null>(null);

export const PokedexProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [pokedex, setPokedex] = useState<PokedexState>({
    currentUrl: POKEAPI_URL,
  });

  const setPokedexPage = useCallback(
    (url: string) =>
      setPokedex((prevState) => ({ ...prevState, currentUrl: url })),
    [],
  );

  const value = useMemo(
    () => ({
      currentUrl: pokedex.currentUrl,
      setPokedex,
      setPokedexPage,
    }),
    [pokedex, setPokedexPage],
  );

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
};

const usePokedex = () => {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error('usePokedex must be used within a Pokedex Provider');
  }

  return context;
};

export default usePokedex;
