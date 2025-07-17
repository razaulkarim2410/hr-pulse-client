import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

const DashboardLayouts = () => {
  const { user, logoutUser, userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire('Logged Out!', 'See you again.', 'success');
      navigate('/');
    });
  };

  const navItemClass = ({ isActive }) =>
    isActive
      ? 'bg-pink-700 text-white px-2 py-1 rounded'
      : 'px-2 py-1 ';

  // ✅ Prevent layout render until userInfo is ready
  if (!userInfo) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-gray-600">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-100 shadow-md p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-pink-700">HRPulse</h2>
          <p className="text-sm text-gray-600">Dashboard</p>
        </div>
        
        <nav className="space-y-2">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <br />
          {userInfo.role === 'Employee' && (
            <>
              <NavLink to="/dashboard/work-sheet" className={navItemClass}>Work Sheet</NavLink>
              <br />
              <NavLink to="/dashboard/payment-history" className={navItemClass}>Payment History</NavLink>
            </>
          )}
          <br />
          {userInfo.role === 'HR' && (
            <>
              <NavLink to="/dashboard/employee-list" className={navItemClass}>Employee List</NavLink>
              <br />
              <NavLink to={`/dashboard/employee-salary-history/${userInfo?.email}`} className={navItemClass}>
                Employee Details
              </NavLink>
              <br />
              <NavLink to="/dashboard/progress" className={navItemClass}>Progress</NavLink>
            </>
          )}
          <br />
          {userInfo.role === 'Admin' && (
            <>
              <NavLink to="/dashboard/all-employee-list" className={navItemClass}>All Employees</NavLink>
              <br />
              <NavLink to="/dashboard/payroll" className={navItemClass}>Payroll</NavLink>
              <br />
              <NavLink to="/admin/messages" className={navItemClass}>Admin Messages</NavLink>
            </>
          )}

          <button
            onClick={handleLogout}
            className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};



export default DashboardLayouts;
