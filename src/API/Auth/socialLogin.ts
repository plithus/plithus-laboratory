export default function SocialLogin(social: string) {
  const baseURL = `${process.env.REACT_APP_TESTAPI}/oauth2/authorization/${social}`;
  const params = {
    redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}/login/complete`,
  };
  const formattedParams = new URLSearchParams(params).toString();
  const finalUrl = `${baseURL}?${formattedParams}`;
  window.location.href = finalUrl;
}
