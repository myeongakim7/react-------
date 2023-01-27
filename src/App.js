import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // 게임정보 변수
  const [num1, setNum1] = useState(0); // 첫번째 숫자
  const [num2, setNum2] = useState(0); // 두번째 숫자
  const [val, setVal] = useState(""); // 사용자 입력값
  const [정답, set정답] = useState(0); // 정답수
  const [오답, set오답] = useState(0); // 오답수

  // 랜덤 번호 생성
  const getNum = () => {
    let n1 = Math.floor(Math.random() * 9);
    let n2 = Math.floor(Math.random() * 9);
    setNum1(n1);
    setNum2(n2);
  };

  // 게임(앱)이 실행되면 문제 출제(초기화)
  useEffect(() => {
    getNum();
  }, []);

  // 게임 판정
  const passCheck = () => {
    // 사용자 입력값과 더하기 값이 일치하면 '정답' -> 정답++
    // 아니면 '오답' -> 오답++
    console.log(`합 = ${num1 + num2}`);
    if (num1 + num2 === Number(val)) {
      alert("정답");
    } else {
      alert("오답");
    }
  };
  return (
    <div className="container p-3 text-center">
      <h1>더하기 게임</h1>
      <div className="numBox d-flex border p-3 bg-light justify-content-center fs-1">
        <div className="num border">{num1}</div>
        <span className="calcText">+</span>
        <div className="num border">{num2}</div>
        <span className="calcText">=</span>
        <input
          type="text"
          className="result"
          placeholder="입력"
          size="3"
          maxLength={3}
          value={val}
          onInput={(e) => {
            console.log("입력", e.target.value);
            setVal(e.target.value);
          }}
        />
      </div>
      <p>
        정답수: {정답}, 오답수: {오답}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("확인");
          passCheck(); // 게임판정
          getNum(); // 문제출제
        }}
      >
        확인
      </button>
    </div>
  );
}

export default App;
