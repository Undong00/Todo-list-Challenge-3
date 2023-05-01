import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const user = useSelector((store) => store.user);
  const todo = user.find((todo) => todo.id === params.id);
  return (
    <div>
      <div>ID: {todo.id}</div>
      <div>제목: {todo.title}</div>
      <div>내용: {todo.body}</div>
      <button onClick={() => navigate("/")}>이전으로</button>
    </div>
  );
}

export default Detail;
