
export default function GoogleLoginButton() {

  const handleGoogleLogin = async () => {
    // window.location.href = "http://localhost:8000/auth/google"
    window.location.href = "https://deepakkumarsoni-aicoach.hf.space/auth/google"
  };


  

  return (
    <button className="google-btn" onClick={handleGoogleLogin}>
      Continue with Google
    </button>
  );
}
