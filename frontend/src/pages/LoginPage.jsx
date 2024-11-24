import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setError("");
  }, [username, password]);

  if (cookies.jwt) {
    const role = jwtDecode(cookies.jwt).role;
    if (role === "staff") return <Navigate to="/staff/home" />;
    if (role === "admin") return <Navigate to="/admin/home" />;
  }

  const errClass = error ? "block" : "hidden";

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { token } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ token }));
      setUsername("");
      setPassword("");
      const role = jwtDecode(token).role;

      if (role === "staff") navigate("/staff/home");
      if (role === "admin") navigate("/admin/home");
    } catch (err) {
      if (!err.status) {
        setError("No Server Response");
      } else if (err.status === 400) {
        setError("Missing Username or Password");
      } else if (err.status === 401) {
        setError("Unauthorized");
      } else {
        setError(err.data?.message);
      }
      console.log(err);

      errRef.current.focus();
    }
  };

  return (
    <div className="min-w-screen min-h-screen p-12 bg-center bg-cover bg-[url('./src/assets/login-bg.jpg')]">
      <div className="sm:w-[490px] sm:h-[590px] mx-auto rounded-lg p-7 bg-white shadow-2xl shadow-yellow-800">
        <div className="flex flex-row items-center justify-center sm:mb-10 gap-x-5">
          <div>
            <img
              src="./src/assets/logo-vector.png"
              alt="logo"
              className="w-[80px] h-[80px] mx-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#004AAD]">
              Caesar POS System
            </h1>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-10">
          Trang đăng nhập
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10 relative">
            <input
              className="py-3 px-4 w-full rounded-lg bg-[#E2E2E2] focus:border-[#004AAD] focus:outline-none border-2"
              type="text"
              name="username"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              placeholder="Tên đăng nhập"
              autoComplete="off"
              required
            />
            <FaUser className="absolute top-1/2 right-3 w-[30px] h-[30px] text-[#A6A6A6] -translate-y-1/2" />
          </div>
          <div className="mb-10 relative">
            <input
              className="py-3 px-4 w-full rounded-lg bg-[#E2E2E2] focus:border-[#004AAD] focus:outline-none border-2"
              type="password"
              name="password"
              onChange={handlePwdInput}
              value={password}
              placeholder="Mật khẩu"
              required
            />
            <FaLock className="absolute top-1/2 right-3 w-[30px] h-[30px] text-[#A6A6A6] -translate-y-1/2" />
          </div>
          <button className="w-full bg-[#004AAD] text-[#FFD166] font-bold p-3 rounded-full hover:bg-[#FFD166] hover:text-[#004AAD] transition-colors">
            Đăng nhập
          </button>
          <div className="text-center mt-3">
            <a href="/" className="font-bold text-[#004AAD]">
              Quên mật khẩu?
            </a>
          </div>
          <span className="text-xs text-[#A6A6A6] mt-16 block">
            Copyright &#169; 2024 | Powered by We Bare Bears Team{" "}
          </span>
        </form>
      </div>
      <p ref={errRef} className={errClass} aria-live="assertive">
        {error}
      </p>
    </div>
  );
};

export default LoginPage;
