import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const Profile = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar
          heading="Thông tin cá nhân"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        ></Navbar>
        <ProfileForm
          avatar="https://docs.material-tailwind.com/img/face-2.jpg"
          username="Username"
          email="nguyenvana@gmail.com"
          fullname="Nguyễn Văn A"
        ></ProfileForm>
      </div>
    </div>
  );
};

export default Profile;
