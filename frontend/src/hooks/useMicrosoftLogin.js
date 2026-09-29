import useAuthContext from "./useAuthContext";

export const useMicrosoftLogin = () => {

  const { dispatch } = useAuthContext();

  const microsoftLogin = async () => {

    const response = await fetch(
      "https://mern-workout-app-cperhzf6bthahee5.centralindia-01.azurewebsites.net/api/microsoft-login",
      {
        credentials: "include"
      }
    );

    const json = await response.json();

    if (response.ok) {

      localStorage.setItem(
        "user",
        JSON.stringify(json)
      );

      dispatch({
        type: "LOGIN",
        payload: json
      });

      window.location.href = "/";
    }
  };

  return { microsoftLogin };
};
