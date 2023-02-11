import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { authSelector, login, reset } from '../store/features/auth/authSlice'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
type Props = {};
type UserDataType = {
  username:string;
  password:string;
}

export default function AdminLogin({}: Props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(authSelector);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  

  const onChange = (e: any) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData:UserDataType = {
      username,
      password,
    };

    dispatch(login(userData) as any);
  };
  return (
    <div>
      AdminLogin
      <form onSubmit={onSubmit}>
        <input id="username" name="username" type="text" onChange={onChange} autoFocus />
        <input id="password" name="password" type="password" onChange={onChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
