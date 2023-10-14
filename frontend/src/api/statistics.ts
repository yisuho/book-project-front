import axios from "axios";
import { url } from "../url";
const getBookStatistics = async () => {
  const userToken = sessionStorage.getItem("userToken");
  try {
    const res = await axios.get(`${url}/api/users/month/count`, {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    alert(`통계정보를 불러오지 못했습니다. 다시 시도해주세요.`);
  }
};

export { getBookStatistics };
