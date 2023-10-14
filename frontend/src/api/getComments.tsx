import { instance } from "./axiosInstance";
import { url } from "../url";
const getComments = async (id: string | undefined) => {
  try {
    const commentsData = await instance.get(`${url}/api/comments/${id}`);

    return commentsData;
  } catch (err) {
    console.log(err);
    alert("댓글을 가져오지 못했습니다.");
  }
};

export default getComments;
