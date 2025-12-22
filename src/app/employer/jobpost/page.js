'use client'
import { useState } from 'react';
import { 
  BriefcaseIcon, 
  DocumentTextIcon, 
  CalendarIcon, 
  ArrowUpTrayIcon, 
  MapPinIcon, 
  CurrencyDollarIcon, 
  Squares2X2Icon 
} from '@heroicons/react/24/outline';

const EmployerJobPost = () => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    skills: '',
    experience: '',
    jobType: 'Full Time',
    city: '',
    salary: '',
    deadline: '',
    companyLogo: null
  });

  const handleInputChange = (fieldName, value) => {
    setJobData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      handleInputChange('companyLogo', uploadedFile.name);
    }
  };

  const submitJobForm = (event) => {
    event.preventDefault();
    console.log('Job data submitted:', jobData);
  };

  const saveAsDraft = () => {
    console.log('Saved as draft:', jobData);
  };

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: "white" }}>
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 max-w-4xl mx-auto">
          
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <BriefcaseIcon className="h-7 w-7 text-[#1A4767]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Post New Job Opening</h1>
          </div>

          <form onSubmit={submitJobForm} className="space-y-8">
            
            {/* Job Details */}
            <section className="border-b pb-8">
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-6 w-6 text-gray-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Position Title
                  </label>
                  <input 
                    type="text"
                    value={jobData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] transition"
                    placeholder="Software Engineer"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Job Description
                  </label>
                  <textarea 
                    value={jobData.jobDescription}
                    onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4767] focus:border-[#1A4767] resize-none"
                    placeholder="Describe responsibilities, expectations, and day-to-day tasks..."
                  />
                </div>
              </div>
            </section>

            {/* Requirements */}
            <section className="border-b pb-8">
              <div className="flex items-center mb-6">
                <Squares2X2Icon className="h-6 w-6 text-gray-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Requirements & Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Technical Skills
                  </label>
                  <input 
                    type="text"
                    value={jobData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767]"
                    placeholder="JavaScript, React, Node.js"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Experience Level
                  </label>
                  <input 
                    type="text"
                    value={jobData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767]"
                    placeholder="3-5 years, Entry Level, Senior"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Work Arrangement
                  </label>
                  <select 
                    value={jobData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767] bg-white"
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    <MapPinIcon className="inline-block h-4 w-4 mr-1" />
                    Location
                  </label>
                  <input 
                    type="text"
                    value={jobData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767]"
                    placeholder="Karachi, Lahore, Islamabad"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    <CurrencyDollarIcon className="inline-block h-4 w-4 mr-1" />
                    Salary Range
                  </label>
                  <input 
                    type="text"
                    value={jobData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767]"
                    placeholder="PKR 150,000 - 250,000"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    <CalendarIcon className="inline-block h-4 w-4 mr-1" />
                    Application Deadline
                  </label>
                  <input 
                    type="date"
                    value={jobData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1A4767] focus:border-[#1A4767]"
                  />
                </div>
              </div>
            </section>

            {/* Company Logo */}
            <section className="pb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Company Branding</h2>
              
              <div>
                <label className="block mb-3 font-medium text-gray-700">
                  Upload Company Logo
                </label>
                <div 
                  onClick={() => document.getElementById('fileInput').click()}
                  className="border-2 border-dashed border-gray-400 rounded-xl p-8 text-center cursor-pointer hover:border-[#1A4767] transition-colors"
                >
                  <ArrowUpTrayIcon className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    {jobData.companyLogo || 'Click to upload company logo'}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    PNG, JPG up to 5MB
                  </p>
                  <input 
                    id="fileInput"
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#1A4767] to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-[#1A4767] hover:to-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#1A4767]"
              >
                Publish Job Posting
              </button>
              
              <button
                type="button"
                onClick={saveAsDraft}
                className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Save as Draft
              </button>
              
              <button
                type="button"
                onClick={() => setJobData({
                  jobTitle: '',
                  jobDescription: '',
                  skills: '',
                  experience: '',
                  jobType: 'Full Time',
                  city: '',
                  salary: '',
                  deadline: '',
                  companyLogo: null
                })}
                className="px-8 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerJobPost;
