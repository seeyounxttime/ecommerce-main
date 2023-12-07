import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/authReducer";
const AdminNav = ({ openSidebar }) => {
  const dispatch = useDispatch();
  const adminLogout = () => {
    dispatch(logout("admin-token"));
  };
  return (
    <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-slate-800 w-full flex justify-between sm:justify-end items-center p-4">
        <i
          className="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block"
          onClick={openSidebar}
        ></i>
        <button
          className="sticky top-0 left-0 right-0 py-2 px-4 bg-sky-600 text-white rounded-md capitalize"
          onClick={adminLogout}
        >
          logout
        </button>
      </div>
    </nav>
  );
};
export default AdminNav;
