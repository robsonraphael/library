import { useEffect } from "react";
import { api } from "../../api";

// Components
import { Loggin } from "../../components/loggin";

export const Login = () => {
  useEffect(() => {
    console.log(api);
  });
  return (
    <>
      <Loggin />
    </>
  );
};
