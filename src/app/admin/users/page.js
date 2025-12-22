'use client'
import { users } from "@/app/data/users";
import Link from "next/link";

const AdminUsers = () => {

  const handleEdit = (userId) => console.log(`Edit user: ${userId}`);
  const handleDelete = (userId) => {
    if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
      console.log(`Delete user: ${userId}`);
    }
  };
  const handleToggleBlock = (userId, currentStatus) => {
    console.log(`Toggle block for user: ${userId}. Current status: ${currentStatus}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">All Users</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">
                  <Link href={`/users/user-details/${user.slug}`} className="text-black font-medium hover:underline">
                    {user.name}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                
                {/* Role Badge */}
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-blue-600 text-white' :
                    user.role === 'employer' ? 'bg-purple-500 text-white' :
                    user.role === 'jobseeker' ? 'bg-green-500 text-white' :
                    'bg-gray-400 text-white'
                  }`}>
                    {user.role}
                  </span>
                </td>

                {/* Status Badge */}
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="px-6 py-4 space-x-2">
                  <button 
                    onClick={() => handleEdit(user.id)}
                    className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 text-sm rounded-md bg-red-600 text-white shadow hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                  <button 
                    onClick={() => handleToggleBlock(user.id, user.status)}
                    className={`px-3 py-1 text-sm rounded-md shadow transition ${
                      user.status === 'Active'
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {user.status === 'Active' ? 'Block' : 'Unblock'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
