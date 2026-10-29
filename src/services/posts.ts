// Post(게시글) 관련 헬퍼 함수, 도구, 통신 담당

import { supabase } from "../utils/supabase";

// 게시글의 정보(데이터의 구조)
export interface IPost {
  /** 작성자의 닉네임 */
  writer_name: string;

  /** 작성자의 프로필 이미지 URL */
  writer_thumbnail: string;

  /** 작성자의 제목 */
  title: string;

  /** 작성자의 내용 */
  text: string;

  /** 작성자의 셍성날짜 */
  createdAt?: string;

  /** 작성자의 게시글 이미지 */
  thumbnail?: string;
}

// 게시글 생성(Upload To Server)
// 게시글 받아오기(Load from Server)
// Promise는 비동기 처리 리턴할 때 사용되는 객체
export const getPosts = async (): Promise<IPost[]> => {
  // [TEST..]
  const result = await supabase
    .from("table_name")
    .select("*")
    .then((result) => {
      console.log(result);
    });

  // 사전에 Login 되어있는 상태로
  // 서버로부터 최신순으로 등록된 Post 데이터 받아오기
  const data: IPost[] = dommyPosts;
  // 받아온 데이터를 return
  return data;
};

const dommyPosts: IPost[] = [
  {
    title: "게시글 제목 1",
    text: "게시글 내용 1",
    writer_name: "작성자 1",
    writer_thumbnail: "??",
    thumbnail: "??",
    createdAt: "2024-06-01",
  },
  {
    title: "게시글 제목 2",
    text: "게시글 내용 2",
    writer_name: "작성자 2",
    writer_thumbnail: "??",
    thumbnail: "??",
    createdAt: "2024-06-02",
  },
];
