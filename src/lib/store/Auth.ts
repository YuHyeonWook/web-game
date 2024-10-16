import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("user", {
  displayName: "",
  email: "",
  token: "",
});
