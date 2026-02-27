import API from "../api";

export default function GoogleLoginButton() {

  const handleGoogleLogin = async () => {
    // window.location.href = "http://localhost:8000/auth/google"
    await API.get("/auth/login");
  };


  

  return (
    <button className="google-btn" onClick={handleGoogleLogin}>
      Continue with Google
    </button>
  );
}
