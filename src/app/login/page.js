"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
    const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginInProgress(true);
    const response = await fetch("/api/login", {
        method : "POST",
        body : JSON.stringify({email, password}),
        headers : {
            "Content-Type" : "application/json"
        },
    })

    if(response.ok){
        alert("Login success");
        redirect("/");
    }
    setLoginInProgress(false);
  };

  return (
    <section className=" mt-8">
      <h1 className=" text-center text-primary text-4xl mb-4">Login</h1>
      {error && (
        <div className=" my-4 text-center ">
          An error has occurred.
          <br />
          Please try again later{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {/* {userCreated && (
        <div className=" my-4 text-center ">
          User created. <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )} */}

      <form className=" block max-w-xs mx-auto " onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className=" text-center text-gray-500 my-4">
          {" "}
          or login with providers
        </div>
        <button className=" flex justify-center gap-4">
          <Image src={"/google.png"} width={24} height={24} alt="" />
          Login with Google
        </button>

        <div className=" text-gray-500 text-center my-4 border-t pt-4">
          Already have an account?{" "}
          <Link className="underline" href={"/login"}>
            Login here&raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
