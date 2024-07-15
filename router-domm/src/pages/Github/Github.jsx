import React from "react";
import "./Github.module.css";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Github</h1>
      <h1>followers: {data.followers}</h1>
      <h1>following: {data.following}</h1>
    </div>
  );
}

export default Github;