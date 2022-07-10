import { loginActions } from "../store/loginSlice";
import { useSelector } from "react-redux";

export default function Auth() {
    const token = useSelector((state) => state.login.login.data.data.token);
    if (token) {
      return { token };
    } else {
      return {};
    }
  }
  