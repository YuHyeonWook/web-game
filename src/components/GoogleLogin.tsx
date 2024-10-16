import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error("구글 로그인 실패", error);
      });
  };

  return <button onClick={signInWithGoogle}>구글 로그인</button>;
};

export default GoogleLogin;
