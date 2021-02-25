import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";


import Users from "./app/screen/Users";
import Chat from "./app/screen/Chat"
const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBB0ddg8QJAbzNcHyGQr3BrFrmPmCjRnlA",
  authDomain: "first-pro-e8fd7.firebaseapp.com",
  projectId: "first-pro-e8fd7",
  storageBucket: "first-pro-e8fd7.appspot.com",
  messagingSenderId: "710040395897",
  appId: "1:710040395897:web:7ec9c656952531e55b34a8"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore();

const defaultUsers = [ 
  {id:1,name:"OLA",avatar:"https://placeimg.com/140/140/any"},
  {id:2,name:"Fouad",avatar:"https://placeimg.com/140/140/any"},
  {id:3,name:"Rana",avatar:"https://placeimg.com/140/140/any"},
];


export default function App() {
  const[currentPage,setCurrentPage]=useState("users")
  const [users,setUsers] = useState(defaultUsers);
  const[selectedUser,setSelectedUser]=useState(null);
  const [userToAdd,setUserToAdd] =useState(null);
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  const onClickUser =(user)=>{
    console.log(user)
    setCurrentPage("chat");
    setSelectedUser(user);
    
  }
  const onAddUser=()=>{

  }
  const onBack=()=>{
    setCurrentPage("users")
  }
 

switch(currentPage) {
  case "users":
    return (
      <Users 
       users={users}
       onClickUser={onClickUser}
       userToAdd={userToAdd}
       setUserToAdd={setUserToAdd}
       onAddUser={onAddUser}
      />
    )
    case "chat":
    return (
    <Chat selectedUser={setSelectedUser} onBack={onBack}/>
    )
    
}
}