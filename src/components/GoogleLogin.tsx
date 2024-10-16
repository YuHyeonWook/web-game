import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useSetAtom } from "jotai";
import { userAtom } from "../lib/store/Auth";

const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result.user);
        const token = await result.user.getIdToken();
        const userData = {
          displayName: result.user.displayName || "",
          email: result.user.email || "",
          token: token,
        };
        setUser(userData);
        navigate("/");
      })
      .catch((error) => {
        console.error("구글 로그인 실패", error);
      });
  };

  return <button onClick={handleSignInWithGoogle}>구글 로그인</button>;
};

export default GoogleLogin;
