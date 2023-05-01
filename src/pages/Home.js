import { settitle } from "../redux/modules/title";
import { setbody } from "../redux/modules/body";
import { resettitle } from "../redux/modules/title";
import { resetbody } from "../redux/modules/body";
import { add } from "../redux/modules/user";
import { del } from "../redux/modules/user";
import { toggle } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const user = useSelector((store) => store.user);
  const title = useSelector((store) => store.title);
  const body = useSelector((store) => store.body);
  const dispatch = useDispatch();

  const addbtn = () => {
    dispatch(add(title, body));
    dispatch(resettitle());
    dispatch(resetbody());
  };

  const titlechange = (e) => {
    dispatch(settitle(e.target.value));
  };

  const bodychange = (e) => {
    dispatch(setbody(e.target.value));
  };

  const deleteBtn = (id) => {
    dispatch(del(id));
  };

  const toggleBtn = (id, isDone) => {
    dispatch(toggle(id, isDone));
  };

  return (
    <div>
      <div>
        제목
        <input type="text" value={title} onChange={titlechange} />
      </div>
      <div>
        내용
        <input type="text" value={body} onChange={bodychange} />
      </div>
      <button onClick={addbtn}>추가하기 </button>
      <div>
        <h1>Working!</h1>
        {user
          .filter((user) => user.isDone === false)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => deleteBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h1>Done</h1>
        {user
          .filter((user) => user.isDone === true)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => deleteBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
