import ChangeBG from "../assets/change-password.png";

const ChangePasswordForm = () => {
  return (
    <div className="px-11 mt-11">
      <div className="flex items-center justify-between">
        <form className="w-1/2">
          <h1 className="text-2xl text-black font-semibold">
            Thay đổi mật khẩu
          </h1>
          <div className="my-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Mật khẩu cũ
            </label>
            <input
              type="password"
              id="old-password"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Mật khẩu mới
            </label>
            <input
              type="password"
              id="new-password"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <span className="text-sm text-gray-400">
              Mật khẩu cần ít nhất 6 kí tự
            </span>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              id="confirm-new-password"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Đổi mật khẩu
          </button>
        </form>
        <div className="w-1/2">
          <img
            src={ ChangeBG }
            className="mix-blend-multiply"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
