"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const route = useRouter();

  const loginHandler = async () => {
    try {
      if (!email || !password) {
        setButtonDisabled(true);
      }
      const res = await axios.post("/api/login", {
        email: email,
        password: password,
      });
      console.log(res);
      if (res.status) {
        route.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>Login</div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
