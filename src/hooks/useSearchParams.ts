import { useHistory } from "react-router-dom";
import { paramsAliases } from "../constants/params-aliases";

export const useSearchParams = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const params = {
    query: searchParams.get(paramsAliases.query),
  }

  return params;
}