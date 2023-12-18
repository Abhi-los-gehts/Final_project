import Backendless from "backendless";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer} from 'react-toastify';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [todos, settodos] = useState([]);

  const [doFirst, setDoFirst] = useState([]);
  const [delegate, setDelegate] = useState([]);
  const [eliminate, setEliminate] = useState([]);
  const [doLater, setDoLater] = useState([]);
  let [done, setDone] = useState([]);
  const [typeList, setTypeList] = useState("doFirst");
  const [changeInput, setchangeInput] = useState("");
  const [completedTasks, setcompletedTasks] = useState();
  
  


  const navigate = useNavigate();
  const [authorization, setAuthorization] = useState(false);

  const heading = {
    doFirst: "Understood Topic",
    delegate: "Not Clear Topic",
    eliminate: "Not Understood Topic",
    doLater: "Need to check again",
  };

  //initialize backendless
  const API_KEY = process.env.REACT_APP_API_Key;
  const APPL_ID = process.env.REACT_APP_APP_Key;

  Backendless.serverURL = "https://eu-api.backendless.com";
  Backendless.initApp(APPL_ID, API_KEY);

  // registration

  function registration(formData) {
    var user = new Backendless.User();
    user.email = formData.email;
    user.name = formData.name;
    user.password = formData.password;

    Backendless.UserService.register(user)
      .then((res) => {
        setAuthorization((i) => true);
        navigate("/todoList");
        console.log("registar", res);
      })
      .catch((err) => {
        console.log("resgi", err.code);
        if (err.code === 3033) {
          toast("You already have account! Please, Log In");
          navigate("/login");
        }
      });
  }

  // logoutUser

  function logoutUser() {
    Backendless.UserService.logout()
      .then((res) => {
        setAuthorization((i) => false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  // loginUser

  function loginUser(userData) {
    const email = userData.email;
    const password = userData.password;
    Backendless.UserService.login(`${email}`, `${password}`, true)
      .then((res) => {
        setAuthorization((i) => true);
        navigate("/todoList");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Backendless.UserService.isValidLogin()
      .then((res) => setAuthorization((i) => res))
      .catch((err) => console.log(err));
  }, []);

  //to do
  function addTodo(obj) {
   
    Backendless.Data.of("todos")
      .save(obj)
      .then((res) => {
        settodos((i) => [...i, res]);
      })
      .catch((err) => console.log(err));

    console.log("addTodo");
  }

  function getList() {
    Backendless.Data.of("todos")
      .find()
      .then((res) => {
        console.log(res);
        settodos(res);
      })
      .catch((err) => console.log(err));

    console.log("getTodo");
  }

  function deleteTodo(id) {
    console.log("obj.", id);
    Backendless.Data.of("todos")
      .remove({ objectId: `${id}` })
      .then((res) => {
        getList();
        console.log("success");
      })
      .catch((err) => console.log(err));

    console.log("deleteTodo");
  }
  function changeEditStatus(id, status) {
    console.log(id, status);
    Backendless.Data.of("todos")
      .save({ objectId: `${id}`, editStatus: !status })
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  }

  function updateTodo(obj) {
    console.log("changed", changeInput);
    Backendless.Data.of("todos")
      .save(obj)
      .then((res) => {
        setchangeInput((i) => "");
        getList();
      })
      .catch((err) => console.log(err));
  }

  function changeTaskStatus(id, newStatus) {
    Backendless.Data.of("todos")
      .save({ objectId: `${id}`, status: `${newStatus}` })
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  }


  //get completed tasks
  function getCompletedTasks() {
    const done = "done";
    var whereClause = "status = '" + done + "'";
    var queryBuilder =
      Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    Backendless.Data.of("todos")
      .find(queryBuilder)
      .then((res) => setcompletedTasks(res))
      .catch((err) => console.log(err));
  }



  function removeAll() {
    done.forEach((el) => {
      Backendless.Data.of("todos")
        .remove({ objectId: el.objectId })
        .then((res) => {
          getList();
          console.log("success");
        })
        .catch((err) => console.log(err));
    });
  }

  function displayTodo(type) {
    switch (type) {
      case "doFirst":
        return doFirst;
      case "doLater":
        return doLater;
      case "delegate":
        return delegate;
      case "eliminate":
        return eliminate;
      case "done":
        return done;
      default:
        return todos;
    }
  }

  function typeOfList(type) {
    setTypeList((i) => type);
    navigate(`/${type}`);
    console.log("tipeoflist");
  }

  useEffect(() => {
    const doFirst = todos.filter(
      (i) => i.type === "doFirst" && i.status === "aktive"
    );
    const doLater = todos.filter(
      (i) => i.type === "doLater" && i.status === "aktive"
    );
    const delegate = todos.filter(
      (i) => i.type === "delegate" && i.status === "aktive"
    );
    const eliminate = todos.filter(
      (i) => i.type === "eliminate" && i.status === "aktive"
    );
    const done = todos.filter((i) => i.status === "done");

    setDoFirst((i) => doFirst);
    setDoLater((i) => doLater);
    setDelegate((i) => delegate);
    setEliminate((i) => eliminate);
    setDone((i) => done);

    console.log("check useeffect with todo");
  }, [todos]);

  useEffect(() => {
    getList();
    console.log("useefOnce");
  }, []);

  return (
    <AppContext.Provider
      value={{
        authorization,
        setAuthorization,
        registration,
        logoutUser,
        loginUser,
        addTodo,
        displayTodo,
        typeList,
        typeOfList,
        heading,
        getList,
        deleteTodo,
        changeEditStatus,
        updateTodo,
        changeTaskStatus,
        removeAll,
        getCompletedTasks,
        todos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
<ToastContainer />

export const useAppContext = () => {
  return useContext(AppContext);
};
