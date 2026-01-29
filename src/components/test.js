<div className="bg-white p-5 md:p-8 rounded-2xl border border-gray-200 shadow-lg mb-10">
          {/* Search Bar with Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full min-w-0">
              <input
                type="text"
                placeholder="🔍 Search jobs by title, company or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm md:text-base bg-white text-slate-800 shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
            </div>

            <button className="px-6 md:px-8 py-4 border-none rounded-xl text-sm md:text-base bg-linear-to-br from-[#1A4767] to-[#1A4767] text-white cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap flex items-center gap-2 tracking-wide">
              🔍 Search Jobs
            </button>

            <div className="bg-slate-100 px-5 py-3 rounded-lg text-[#1A4767] font-bold text-sm md:text-base whitespace-nowrap flex items-center gap-2 border border-gray-200">
              <span className="text-lg">📋</span>
              <span>
                {filteredJobs.length} of {jobs.length} Jobs
              </span>
            </div>
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
            {/* Location Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">📍</span>
                Location
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="all">All Locations</option>
                <option value="Lahore, Pakistan">Lahore, Pakistan</option>
                <option value="Karachi, Pakistan">Karachi, Pakistan</option>
                <option value="Islamabad, Pakistan">Islamabad, Pakistan</option>
                <option value="Rawalpindi, Pakistan">Rawalpindi, Pakistan</option>
                <option value="Faisalabad, Pakistan">Faisalabad, Pakistan</option>
                <option value="Multan, Pakistan">Multan, Pakistan</option>
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">💼</span>
                Job Type
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="all">All Types</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Physical">Onsite</option>
                <option value="Full-time">Full time</option>
                <option value="Part-time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Salary Sort */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span className="text-base">💰</span>
                Salary Sort
              </label>
              <select
                value={salarySort}
                onChange={(e) => setSalarySort(e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-800 cursor-pointer shadow-sm focus:border-[#1A4767] focus:ring-2 focus:ring-[#1A4767]/20 focus:outline-none transition-all duration-300 appearance-none pr-10"
              >
                <option value="none">Default Sorting</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex flex-col justify-end gap-2">
              <label className="text-xs font-semibold text-slate-700 opacity-0">Reset</label>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setLocationFilter("all")
                  setTypeFilter("all")
                  setSalarySort("none")
                }}
                className="w-full px-6 py-3.5 border-2 border-gray-200 rounded-lg text-sm bg-white text-slate-500 cursor-pointer font-semibold hover:bg-gray-50 hover:text-[#1A4767] hover:border-[#1A4767] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span className="text-base">🔄</span>
                Reset Filters
              </button>
            </div>
          </div>
        </div>