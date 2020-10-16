import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

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

//graphql
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Modal from "../components/Modal";

export const AccessPage = ({ loginPage = true }) => {
  const [login, setLogin] = useState(loginPage);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [correctSignUp, setCorrectSignUp] = useState(false);
  const [emailSubmit, setEmailSubmit] = useState("")
  const [passSubmit, setPassSubmit] = useState("")
  const [uid, setUid] = useState("")


  
  const closeCorrectSignUpModal = () => {
    setCorrectSignUp(false);
  };

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
            setEmailSubmit(email)
            setPassSubmit(password)
            setUid(resp.uid)
            setCorrectSignUp(true)
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
      <>
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
        
      </>
    );
  };

  const signUpBack = gql`
      mutation ($userFirebase:String!, $userMail:String!){
        createUser(
          userFirebase:"$userFirebase"
          userMail:"$userMail"
          userPhoto:"nophoto"
          username:"noname" 
        )
      }
    `;

  const [signUpBackMut, { data }] = useMutation(signUpBack);


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

        <Button
          onClick={() => {
            submit({ option: "signup", email, password });
            console.log(uid)
            console.log(email)
            console.log("muta",signUpBack)
            signUpBackMut({variables:{userFirebase:{uid},userMail:{email}}})
              .then(e=> console.log(e))
              .catch(error=>console.log(error))
            console.log("data",data)
          }}
        >
          Sign Up
        </Button>
        <OrSeparator />
        <Button secondary={true} onClick={() => changeType(email, password)}>
          Log In
        </Button>
        <div style={{ height: "50px" }}></div>
        {/* <Modal handleClose={closeCorrectSignUpModal} isOpen={correctSignUp}>
          <CorrectSignUp userFirebase={uid} userMail={emailSubmit} >
            
          </CorrectSignUp>

        </Modal> */}
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

const CorrectSignUp = ({ userFirebase, userMail }) => {
  console.log("--------------")
  console.log(userFirebase)
  console.log(userMail)
  console.log("--------------")

  const signUpBack = gql`
      mutation {
        createUser(
          userFirebase:"${userFirebase}"
          userMail:"${userMail}"
          userPhoto:""
          username: ""
        )
      }
    `;

  const { loading, error, data } = useMutation(signUpBack);
  console.log("error", error);
  if (!loading) {
    console.log("data",data);
  }
  return <h1>Yeeeeei</h1>;
};
