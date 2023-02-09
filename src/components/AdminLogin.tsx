import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

type Props = {};

export default function AdminLogin({}: Props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const dispatch = useDispatch();

  const onChange = (e: any) => {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };

    console.log(userData)

    // dispatch(login(userData));
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
