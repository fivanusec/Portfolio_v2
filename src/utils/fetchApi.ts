import axios from "axios";

export const fetchApi = async (
  link: string = "https://api.github.com/users/fivanusec/repos"
) => {
  const response = await axios
    .get(link)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(`Api error: ${err}`);
    });
  return response;
};
