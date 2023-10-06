import { useAtom, atom } from "jotai";

export const isLoadedAtom = atom(false);

const useIsHeroLoaded = () => {
  return useAtom(isLoadedAtom);
};

export default useIsHeroLoaded;
