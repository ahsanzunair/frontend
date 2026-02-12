'use client'
import { useState } from 'react';
import {
  BriefcaseIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowUpTrayIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  TagIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import { jobsApi } from '@/lib/api/jobs';

const EmployerJobPost = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    logo: null,
    skills: '',
    experience: '',
    experience_level: '',
    location: '',
    job_type: 'Full Time',
    employement_type: 'Permanent',
    requirements: '',
    benefits: '',
    salary_range: '',
    expiry_date: '',
    status: 'draft',
    is_active: true
  });

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (fieldName, value) => {
    setJobData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleInputChange('logo', file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    handleInputChange('logo', null);
    setLogoPreview(null);
  };

  const submitJobForm = async (event) => {
    event.preventDefault();
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()

      Object.entries(jobData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      if (jobData.status === "published") {
        formData.set("is_active", true);
      } else {
        formData.set("is_active", false);
      }

      const response = await jobsApi.createJob(formData);

      console.log("Job Created", response);

    } catch (err) {
      console.error(err);
      setError("Failed to Post the Job ❌")
    } finally {
      setLoading(false);
    }
  };

  const saveAsDraft = async () => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData()

      Object.entries({ ...jobData, status: "draft", is_active: "false" }).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      await jobsApi.createJob(formData);
      alert("Job saved as draft 📝");
    } catch (err) {
      console.error(err);
      setError("Failed to save draft ❌")
    } finally {
      setLoading(false)
    }
  };

  const experienceLevels = [
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Lead',
    'Manager',
    'Director',
    'Executive'
  ];

  const jobTypes = [
    'Full Time',
    'Part Time',
    'Contract',
    'Internship',
    'Freelance',
    'Remote',
    'Hybrid'
  ];

  const employmentTypes = [
    'Permanent',
    'Temporary',
    'Contract',
    'Seasonal',
    'Probationary'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-linear-to-r from-[#1A4767] to-blue-700 p-3 rounded-xl mr-4 shadow-sm">
                <BriefcaseIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Post New Job Opening</h1>
                <p className="text-gray-600 mt-1">Create a compelling job post to attract top talent</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Auto-save enabled</span>
            </div>
          </div>

          <form onSubmit={submitJobForm} className="space-y-10">

            {/* Basic Information */}
            <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-7 w-7 text-[#1A4767] mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">
                      <span className="text-red-500 mr-1">*</span>
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={jobData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] transition-all shadow-sm"
                      placeholder="e.g., Senior Frontend Developer"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">
                      <span className="text-red-500 mr-1">*</span>
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={jobData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2.5 font-semibold text-gray-800">
                    <span className="text-red-500 mr-1">*</span>
                    Job Description
                  </label>
                  <textarea
                    value={jobData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] resize-none shadow-sm"
                    placeholder="Describe the role, responsibilities, and what makes this position unique..."
                    required
                  />
                </div>
              </div>
            </section>

            {/* Company Logo */}
            <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-6">
                <BuildingOfficeIcon className="h-7 w-7 text-[#1A4767] mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Company Branding</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-3 font-semibold text-gray-800">
                    Company Logo
                    <span className="text-gray-500 text-sm font-normal ml-2">(Optional)</span>
                  </label>
                  <div className="space-y-4">
                    <div
                      onClick={() => document.getElementById('logoInput').click()}
                      className={`border-2 ${logoPreview ? 'border-solid' : 'border-dashed'} ${logoPreview ? 'border-gray-300' : 'border-gray-400'} rounded-xl p-6 text-center cursor-pointer hover:border-[#1A4767] transition-colors bg-white`}
                    >
                      {logoPreview ? (
                        <div className="flex flex-col items-center">
                          <img
                            src={logoPreview}
                            alt="Logo preview"
                            className="h-32 w-32 object-contain mb-4 rounded-lg"
                          />
                          <p className="text-gray-700 font-medium">Logo uploaded successfully</p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeLogo();
                            }}
                            className="mt-2 text-sm text-red-600 hover:text-red-800"
                          >
                            Remove logo
                          </button>
                        </div>
                      ) : (
                        <>
                          <ArrowUpTrayIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">Click to upload company logo</p>
                          <p className="text-gray-500 text-sm mt-2">
                            PNG, JPG, SVG up to 5MB
                          </p>
                        </>
                      )}
                      <input
                        id="logoInput"
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg"
                        className="hidden"
                        onChange={handleLogoUpload}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      A professional logo helps your job stand out and attracts more applicants
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">
                      <span className="text-red-500 mr-1">*</span>
                      Location
                    </label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={jobData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                        placeholder="e.g., New York, NY or Remote"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">
                      Expiry Date
                      <span className="text-gray-500 text-sm font-normal ml-2">(Optional)</span>
                    </label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        value={jobData.expiry_date}
                        onChange={(e) => handleInputChange('expiry_date', e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Requirements & Skills */}
            <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="h-7 w-7 text-[#1A4767] mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Requirements & Skills</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">Requirements</label>
                    <textarea
                      value={jobData.requirements}
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                      rows={5}
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                      placeholder="List the requirements and qualifications needed..."
                    />
                  </div>

                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">Benefits</label>
                    <textarea
                      value={jobData.benefits}
                      onChange={(e) => handleInputChange('benefits', e.target.value)}
                      rows={5}
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                      placeholder="What benefits do you offer? (Healthcare, Remote work, etc.)"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2.5 font-semibold text-gray-800">Skills</label>
                    <textarea
                      value={jobData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      rows={5}
                      className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                      placeholder="Technical and soft skills required (comma separated)"
                    />
                    <p className="text-sm text-gray-500 mt-2">Example: JavaScript, React, Communication, Teamwork</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2.5 font-semibold text-gray-800">Experience</label>
                      <input
                        type="text"
                        value={jobData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                        placeholder="e.g., 3-5 years"
                      />
                    </div>

                    <div>
                      <label className="block mb-2.5 font-semibold text-gray-800">Experience Level</label>
                      <select
                        value={jobData.experience_level}
                        onChange={(e) => handleInputChange('experience_level', e.target.value)}
                        className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] bg-white shadow-sm"
                      >
                        <option value="">Select level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Type & Salary */}
            <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-6">
                <TagIcon className="h-7 w-7 text-[#1A4767] mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Job Type & Compensation</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2.5 font-semibold text-gray-800">Job Type</label>
                  <select
                    value={jobData.job_type}
                    onChange={(e) => handleInputChange('job_type', e.target.value)}
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] bg-white shadow-sm"
                  >
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2.5 font-semibold text-gray-800">Employment Type</label>
                  <select
                    value={jobData.employement_type}
                    onChange={(e) => handleInputChange('employement_type', e.target.value)}
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] bg-white shadow-sm"
                  >
                    {employmentTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2.5 font-semibold text-gray-800">Salary Range</label>
                  <div className="relative">
                    <CurrencyDollarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={jobData.salary_range}
                      onChange={(e) => handleInputChange('salary_range', e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A4767]/30 focus:border-[#1A4767] shadow-sm"
                      placeholder="e.g., $60,000 - $80,000"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Publication Status */}
            <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-7 w-7 text-[#1A4767] mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Publication Status</h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${jobData.status === 'published' ? 'border-[#1A4767] bg-[#1A4767]' : 'border-gray-300'}`}>
                      {jobData.status === 'published' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 group-hover:text-[#1A4767]">Publish Now</span>
                      <p className="text-sm text-gray-600 mt-1">Make this job visible to candidates immediately</p>
                    </div>
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={jobData.status === 'published'}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="sr-only"
                    />
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${jobData.status === 'draft' ? 'border-[#1A4767] bg-[#1A4767]' : 'border-gray-300'}`}>
                      {jobData.status === 'draft' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800 group-hover:text-[#1A4767]">Save as Draft</span>
                      <p className="text-sm text-gray-600 mt-1">Save without publishing for later editing</p>
                    </div>
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={jobData.status === 'draft'}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="sr-only"
                    />
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                  <div className="flex items-center">
                    {jobData.status === 'published' ? (
                      <EyeIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    )}
                    <div>
                      <p className="font-medium text-yellow-800">
                        {jobData.status === 'published'
                          ? 'This job will be publicly visible'
                          : 'This job will be saved as draft'}
                      </p>
                      <p className="text-sm text-yellow-700 mt-1">
                        You can change this later from the job management dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                      <span className="font-medium">Required field</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                      <span className="font-medium">Optional field</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all fields?')) {
                        setJobData({
                          title: '',
                          description: '',
                          company: '',
                          logo: null,
                          skills: '',
                          experience: '',
                          experience_level: '',
                          location: '',
                          job_type: 'Full Time',
                          employement_type: 'Permanent',
                          requirements: '',
                          benefits: '',
                          salary_range: '',
                          expiry_date: '',
                          status: 'draft',
                          is_active: true
                        });
                        setLogoPreview(null);
                      }
                    }}
                    className="px-7 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Clear All
                  </button>

                  <button
                    type="button"
                    onClick={saveAsDraft}
                    className="px-7 py-3.5 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-800 shadow-sm"
                  >
                    Save as Draft
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 bg-linear-to-r from-[#1A4767] to-blue-700 text-white font-semibold rounded-xl hover:from-[#1A4767] hover:to-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#1A4767]/50 shadow-lg hover:shadow-xl"
                  >
                    {loading ? "Processing..." : jobData.status === 'published' ? 'Publish Job' : 'Save & Publish'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerJobPost;