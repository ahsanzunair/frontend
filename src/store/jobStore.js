// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useJobStore = create(
//     persist(
//         (set, get) => ({
//             savedJobs: [],
//             savedJobsIds: new Set(),
//             recentlyViewed: [],
//             appliedJobs: [],


//             saveJob: (job) => {
//                 const state = get();

//                 if (!state.savedJobsIds.has(job.id)) {
//                     set((state) => ({
//                         savedJobs: [...state.savedJobs, job],
//                         savedJobsIds: new Set([...state.savedJobsIds, job.id]),
//                     }));
//                 }
//             },

//             unsaveJob: (jobId) => {
//                 set((state) => ({
//                     savedJob: state.savedJob.filter(j => j.id !== jobId),
//                     savedJobIds: new Set([...state.savedJobIds].filter(id => id !== jobId)),
//                 }));
//             },

//             isJobSaved: (jobId) => {
//                 return get().savedJobIds.has(jobId);
//             },

//             addToRecentlyViewed: (job) => {
//                 set((state) => {
//                     const filtered = state.recentlyViewed.filter(j => j.id !== job.id);
//                     return {
//                         recentlyViewed: [job, ...filtered].slice(0, 10),
//                     };
//                 });
//             },

//             clearRecentlyViewed: () => {
//                 set({ recentlyViewed: [] });
//             },

//             markAsApplied: (jobId) => {
//                 set((state) => ({
//                     appliedJobs: [...new Set([...state.appliedJobs, jobId])],
//                 }));
//             },
//         }),

//         {
//             name: "job-storage",
//             partialize: (state) => ({
//                 savedJobs: state.savedJobs,
//                 recentlyViewed: state.recentlyViewed,
//                 appliedJobs: state.appliedJobs,
//             }),
//         }
//     )
// );


import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useJobStore = create(
  persist(
    (set, get) => ({
      savedJobs: [],
      recentlyViewed: [],
      appliedJobs: [],

      saveJob: (job) => {
        const { savedJobs } = get();
        if (!savedJobs.some(j => j.id === job.id)) {
          set({ savedJobs: [...savedJobs, job] });
        }
      },

      unsaveJob: (jobId) => {
        set((state) => ({
          savedJobs: state.savedJobs.filter(j => j.id !== jobId),
        }));
      },

      isJobSaved: (jobId) => {
        return get().savedJobs.some(j => j.id === jobId);
      },

      addToRecentlyViewed: (job) => {
        set((state) => {
          const filtered = state.recentlyViewed.filter(j => j.id !== job.id);
          return {
            recentlyViewed: [job, ...filtered].slice(0, 10),
          };
        });
      },

      clearRecentlyViewed: () => {
        set({ recentlyViewed: [] });
      },

      markAsApplied: (jobId) => {
        set((state) => ({
          appliedJobs: [...new Set([...state.appliedJobs, jobId])],
        }));
      },
    }),
    {
      name: "job-storage",
    }
  )
);
