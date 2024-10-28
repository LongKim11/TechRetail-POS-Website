import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#004AAD] px-10 sm:px-24 py-24 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?t=st=1730133716~exp=1730137316~hmac=e877d9a23ad12af7e2f66568c443ab19fec7b1e2637ce1e420b2c782eb035eb7&w=1380')]">
      <div className="sm:w-[490px] sm:h-[590px] mx-auto rounded-lg p-7 bg-white ">
        <div className="flex flex-row items-center justify-center sm:mb-10">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocNNLtlcAtDpCRhqp9_6gETyDrdRQ32PLfQ&s"
              alt="logo"
              className="w-[100px] h-[100px] mx-auto"
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
          <span className="text-xs text-[#A6A6A6] mt-10 block">
            Copyright &#169; 2024 | Powered by We Bare Bears Team{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
