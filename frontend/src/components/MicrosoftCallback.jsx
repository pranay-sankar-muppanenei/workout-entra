import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const MicrosoftCallback = () => {

  const { dispatch } = useAuthContext();
  const [searchParams] = useSearchParams();

  useEffect(() => {

    const token =
      searchParams.get("token");

    const email =
      searchParams.get("email");

    if(token){

      const user = {
        email,
        token
      };

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      dispatch({
        type:"LOGIN",
        payload:user
      });

      window.location.href="/";
    }

  }, [dispatch, searchParams]);

  return (
    <h2>
      Signing in with Microsoft...
    </h2>
  );
};

export default MicrosoftCallback;