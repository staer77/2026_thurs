import { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts, type IPost } from "../services/posts";

// Server에서 받아온 데이터들을 실시간으로 뿌려주는 Timeline 최신순
function Timeline() {
  // 버튼 누르면 데이터 추가되는 함수
  const [data, setData] = useState<IPost[]>([]);
  // 데이터를 불러오는 동안 로딩 처리를 할 State
  const [loading, setLoading] = useState<boolean>(false);

  // 서버로부터 데이터 가져오기
  const getData = () => {
    // -- Loading start
    setLoading(true);
    // 서버에서 게시글 받아오기(최신순)
    const result = getPosts();
    // 받아온 데이터를 State에 할당(저장)
    setData(result);
    // -- Loading end
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // Mount(컴포넌트가 생성=페이지가 접속했을 때)
  // + 조건들을 만족할 때 마다 코드실행
  useEffect(() => {
    getData();
  }, []);

  // Loading 중일 때 보일 화면
  if (loading == true) {
    return <div>Loading...</div>;
  }
  // Loading이 끝났으 때, 화면에 보여지는 영역
  return (
    <div style={{ flex: 1 }}>
      <h4>불러온 데이터의 개수: {data.length}개</h4>
      <button onClick={getData}>데이터 추가</button>
      {data.map((post, index) => {
        return (
          <Post
            title={post.title}
            text={post.text}
            writer_name={post.writer_name}
            createdAt={post.createdAt}
            writer_thumbnail={post.writer_thumbnail}
            thumbnail={post.thumbnail}
          />
        );
      })}
    </div>
  );
}

export default Timeline;

// function onPress(callback: () => void) {
//   callback();
// }

// onPress(() => {
//   alert("새로 고침(callback)");
// });

// function map(arr: any[], callback: (any: any, i: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     return callback(arr[i], i);
//   }
// }

// 데이터의 개수를 넣을 변수
// const는 값 넣는게 불가능, let은 값 넣는게 가능
// 함수는 동사로 시작, 컴포넌트는 명사로 시작
// let numOfData = 0;
// 리액트 자바스크립트는 소문자로 시작, 컴포넌트는 대문자로 시작
// function addData() {
//     numOfData++;
//     console.log(numOfData);
// }
