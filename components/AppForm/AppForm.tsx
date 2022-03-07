import { FormEvent, useCallback, useRef } from "react";
import router from "next/router";
import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";
import style from "./AppForm.module.scss";
import routes from "../../config/routes";
import apiRoutes from "../../config/apiRoutes";
import axios from "axios";

function AppForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post(apiRoutes.login, {
      username: emailRef.current?.value,
      password: passlRef.current?.value,
    });

    if (response.status === 200) return router.push(routes.home);
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h3>Log In</h3>
      <div>
        <p>Email</p>
        <AppInput ref={emailRef} name="email" placeholder="me@example.com" />
      </div>
      <div>
        <p>Password</p>
        <AppInput
          ref={passlRef}
          name="password"
          placeholder="*******"
          type="password"
        />
      </div>
      <AppButton name="Log In" type="submit" />
    </form>
  );
}

export default AppForm;

//TODO: username must be either username or email
//TODO: Add error handler
//TODO: Add require to inputs
//TODO: Add redux storage to store a user
