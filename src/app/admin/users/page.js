'use client'
import { useState } from "react";
import { Pencil, Trash2, Users, Eye, Clock, MapPin, DollarSign, Plus, Search, Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import { users } from "@/app/data/users";


export default function EmployerusersList() {

  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const statusColors = {
    Active: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    Closed: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
    Draft: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" }
  };

  const filteredusers = users.filter(user => {
    if (activeFilter !== "All" && user.status !== activeFilter) return false;
    if (searchQuery && !user.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const stats = {
    total: users.length,
    active: users.filter(j => j.status === "Active").length,
    draft: users.filter(j => j.status === "Draft").length,
    closed: users.filter(j => j.status === "Closed").length
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user posting? This action cannot be undone.")) {
      setusers(users.filter(user => user.id !== userId));
    }
  };

  const handleStatusToggle = (userId) => {
    setusers(users.map(user => {
      if (user.id === userId) {
        const nextStatus = user.status === "Active" ? "Closed" : "Active";
        return { ...user, status: nextStatus };
      }
      return user;
    }));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">


        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">user Listings</h1>
            <p className="text-gray-600 mt-1">Manage and track your user postings</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm">
            <Plus className="w-5 h-5" /> Create New user
          </button>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-500">Total users</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">{stats.active}</div>
            <div className="text-sm text-gray-500">Active</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{stats.draft}</div>
            <div className="text-sm text-gray-500">Drafts</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-2xl font-bold text-rose-600">{stats.closed}</div>
            <div className="text-sm text-gray-500">Closed</div>
          </div>
        </div>


        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search user titles..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter:</span>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="All">All users</option>
                <option value="Active">Active</option>
                <option value="Draft">Drafts</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>


        <div className="space-y-4">
          {filteredusers.length > 0 ? (
            <>
              {/* Desktop / Tablet Table */}
              <div className="hidden lg:block bg-white rounded-xl border border-gray-200 overflow-x-auto shadow-sm">
                <table className="min-w-full border-collapse">
                  <thead className="bg-[#1A4767] text-gray-100 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">id</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Skills</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Experience</th>
                      {/* <th className="px-6 py-4 text-left text-sm font-semibold">Views</th> */}
                      <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredusers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-sm text-gray-600">{user.id}</td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.role}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleStatusToggle(user.id)}
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${user.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                              : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                              }`}
                          >
                            <span className={`h-2 rounded-full ${statusColors[user.status]}`}></span>
                            {user.status}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.skills || "Not Available"}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.experience || "Not Available"}</td>
                        {/* <td className="px-6 py-4 text-sm text-gray-600">{user.views}</td> */}
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"><Pencil className="w-4 h-4" /></button>
                            <button className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"><Users className="w-4 h-4" /></button>
                            <button className="p-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"><Eye className="w-4 h-4" /></button>
                            <button onClick={() => handleDelete(user.id)} className="p-2 bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div className="lg:hidden space-y-4">
                {filteredusers.map((user) => (
                  <div key={user.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{user.title}</p>
                        <p className="text-sm text-gray-500">{user.type}</p>
                      </div>
                      <button
                        onClick={() => handleStatusToggle(user.id)}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${user.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                          }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${statusColors[user.status]}`}></span>
                        {user.status}
                      </button>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">
                      <p><MapPin className="inline w-4 h-4 mr-1" /> {user.location}</p>
                      <p><span className="inline w-4 h-4 mr-1">RS</span> {user.salary}</p>
                      <p><Clock className="inline w-4 h-4 mr-1" /> Posted {user.postedDate}</p>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <div><Users className="inline w-4 h-4 mr-1 text-blue-600" /> {user.applicants} Applicants</div>
                      <div><Eye className="inline w-4 h-4 mr-1" /> {user.views} Views</div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      <button onClick={() => router.push(`/employer/userpost`)} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"><Pencil className="w-4 h-4" /> Edit</button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"><Users className="w-4 h-4" /> View</button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"><Eye className="w-4 h-4" /> Preview</button>
                      <button onClick={() => handleDelete(user.id)} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100"><Trash2 className="w-4 h-4" /> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}