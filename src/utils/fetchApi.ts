import axios from "axios";
import rateLimit from "axios-rate-limit";

const http = rateLimit(axios.create(), {
  maxRequests: 3,
  perMilliseconds: 60000,
});
export const fetchApi = async (
  link: string = "https://api.github.com/users/fivanusec/repos"
): Promise<GithubRepo[]> =>
  await http
    .get<GithubRepo[]>(link)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(`Api error: ${err}`);
    });
