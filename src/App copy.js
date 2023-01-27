import "./App.css";
import { useState, useEffect } from "react";
import Item from "./components/Item.js";
function App() {
  console.log("App 실행");
  // 상태관리 (state) 변수
  // [변수명, 변수변경함수] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 마운트시 서버에서 가져오는 데이터
    fetch("https://dog.ceo/api/breed/mix/images")
      .then((res) => res.json())
      .then((json) => setPhotos(json.message));
  }, []);
  console.log(photos.message);
  return (
    <>
      <h1>Photos</h1>
      {/* <Item photo={photos} text="hello" /> */}
      {photos.map((photo, i) => {
        return (
          <Item
            photo={photo}
            key={i}
            id={i}
            // 변수={값}
          />
        );
      })}
    </>
  );
}

export default App;
