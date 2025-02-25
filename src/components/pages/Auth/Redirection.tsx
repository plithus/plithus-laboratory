import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Redirection() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const accessToken = query.get("accessToken");
  const authenticated = query.get("authenticated");
  console.log(accessToken, authenticated);

  if (authenticated === "true") {
    const loginURL = `${process.env.REACT_APP_TESTAPI}/v3/accounts/managements/signin/web`;
    const data = { os: "WEB" };

    axios
      .post(loginURL, data, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then(() => {
        sessionStorage.setItem("token", accessToken!);
      })
      .then(() => {
        window.location.href = "/home";
      });
  }

  return <div>Login Complete</div>;
}
