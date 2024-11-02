const ChangePasswordForm = () => {
  return (
    <div className="w-[80%] 2xl:w-2/3 mx-auto mt-11">
      <div className="flex items-center justify-between">
        <form className="w-3/4">
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
        <div>
          <img
            src="https://img.freepik.com/free-vector/smartphone-data-protection-flat-composition-with-laptop-computer-screens-human-character-inserting-letters-into-password-vector-illustration_1284-82084.jpg?t=st=1730521233~exp=1730524833~hmac=a1d4887fb936463e88334df3d8556a8ce1426b655558aa295f52a673a63d73c2&w=1380"
            className="mix-blend-multiply"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
