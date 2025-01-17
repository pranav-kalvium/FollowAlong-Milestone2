import {React,useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from " react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { link } from " react-router-dom ";
import axios from "axios";

const Signup = () => {
const[email,setEmail] = useState("");
const[name,setName] = useState("");
const[password,setPasword] = useState("");
const[visible,setVisible] = useState(false);
const[avatar,setAvatar] = useState("null");
const[error,setError] = useState({});

const handleFileSubmit = (e) => {
    const file = e.target.file[0];
    if (file){
        const filePath = URL.createObjectURL(file);
}