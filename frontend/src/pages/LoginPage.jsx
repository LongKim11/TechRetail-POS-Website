import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-w-screen min-h-screen p-12 bg-center bg-cover bg-[url('./src/assets/login-bg.jpg')]">
      <div className="sm:w-[490px] sm:h-[590px] mx-auto rounded-lg p-7 bg-white shadow-2xl shadow-yellow-800 mt-11">
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
        <form>
          <div className="mb-10 relative">
            <input
              type="text"
              className="py-3 px-4 w-full rounded-lg bg-[#E2E2E2] focus:border-[#004AAD] focus:outline-none border-2"
              placeholder="Tên đăng nhập"
            />
            <FaUser className="absolute top-1/2 right-3 w-[30px] h-[30px] text-[#A6A6A6] -translate-y-1/2" />
          </div>
          <div className="mb-10 relative">
            <input
              type="password"
              className="py-3 px-4 w-full rounded-lg bg-[#E2E2E2] focus:border-[#004AAD] focus:outline-none border-2"
              placeholder="Mật khẩu"
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
    </div>
  );
};

export default LoginPage;
