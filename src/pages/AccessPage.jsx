import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {  toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

import { Input } from "../styles/components/Forms";
import {
  Dialog,
  Img,
  LoginContainer,
  Section,
  ShoppingCart,
  Separator,
} from "../styles/pages/login";
import logo from "../assets/logotipo.png";
import gmail_logo from "../assets/images/gmail_logo.png";
import shoppingCart from "../assets/shoppingCart.svg";
import { Button } from "../components/Buttons";
import { handleSignUp, handleSignIn, handleGoogleSignIn } from "../utils/auth";
import { useStateValue } from "../Context";
import { Sidebar } from "../components/Sidebar";

export const AccessPage = ({ loginPage = true }) => {
  const [login, setLogin] = useState(loginPage);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const changeType = () => {
    console.log(user);
    setLogin(!login);
  };

  const handleLocalStorage = (user) => {
    console.log(user);
    let userData = {
      email: user.email,
      uid: user.uid,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch({
      type: "changeCurrentUser",
      user: userData,
    });
    console.log(user.uid);
  };

  const submit = ({ option, email, password }) => {
    if (option === "login") {
      handleSignIn(email, password)
        .then((resp) => {
          if (resp !== undefined) {
            handleLocalStorage(resp.user);
            toastSucces("Bienvenido 😃");
            history.push("/");
          }
        })
        .catch((e) => {
          console.log("Sigin with email", e);
          toastError("Credenciales incorrectas! 😵");
        });
    } else if (option === "gmail") {
      handleGoogleSignIn()
        .then((resp) => {
          if (resp !== undefined) {
            handleLocalStorage(resp.user);
            toastSucces("Bienvenido 😃");
            history.push("/");
          }
        })
        .catch((e) => {
          console.log("Sigin with google", e);
          toastError("Upps algo salio mal, intentalo de nuevo! 😵");
        });
    } else {
      handleSignUp(email, password)
        .then((resp) => {
          if (resp !== undefined) {
            handleLocalStorage(resp);
            toastSucces("Bienvenido 😃");
            history.push("/");
          }
        })
        .catch((e) => {
          if (e.code === "auth/weak-password") {
            toastError("La contraseña debe tener mínimo 6 caracteres! 🧘 ");
          } else {
            console.log("SignUp with email", e);
            toastError("Upps algo salio mal, intentalo de nuevo! 😵");
          }
        });
    }
  };
  const toastSucces = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleInput = (e) => {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "password") setPassword(e.target.value);
    };

    return (
      <LoginContainer>
        <h3>Log In</h3>
        <OptionsSignIn onSubmit={submit} />
        <label htmlFor="">Email</label>
        <Input
          key="email"
          id="email"
          value={email}
          onChange={handleInput}
          type="text"
        />
        <br />
        <label htmlFor="">Password</label>
        <Input
          id="password"
          onChange={handleInput}
          value={password}
          type="password"
        />
        <div style={{ height: "1.5em" }}></div>

        <Button
          onClick={() => {
            submit({ option: "login", email, password });
          }}
        >
          Log In
        </Button>
        <OrSeparator />
        <Button secondary={true} onClick={() => changeType(email, password)}>
          Sign Up
        </Button>
        <div style={{ height: "50px" }}></div>
      </LoginContainer>
    );
  };

  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e) => {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "password") setPassword(e.target.value);
    };

    return (
      <LoginContainer>
        <h3>Create account</h3>
        <OptionsSignIn onSubmit={submit} />

        <label htmlFor="">Email</label>
        <Input id="email" onChange={handleInput} value={email} type="text" />
        <br />
        <label htmlFor="">Password</label>
        <Input
          id="password"
          onChange={handleInput}
          value={password}
          type="password"
        />
        <div style={{ height: "1.5em" }}></div>

        <Button onClick={() => submit({ option: "signup", email, password })}>
          Sign Up
        </Button>
        <OrSeparator />
        <Button secondary={true} onClick={() => changeType(email, password)}>
          Log In
        </Button>
        <div style={{ height: "50px" }}></div>
      </LoginContainer>
    );
  };

  return (
    <>
      <Sidebar />
      <Section>
        <Dialog>
          <div>
            <Img src={logo} alt="" />
          </div>
          {login ? <Login /> : <Register />}
        </Dialog>
        <ShoppingCart src={shoppingCart} alt="" />
      </Section>
    </>
  );
};

const OrSeparator = () => (
  <Separator>
    <hr />
    or
    <hr />
  </Separator>
);

const OptionsSignIn = ({ onSubmit }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        onClick={() => onSubmit({ option: "gmail" })}
        src={gmail_logo}
        alt="Gmail Log In"
      />
    </div>
  );
};
