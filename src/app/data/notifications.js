export const notifications = [
  {
    id: 1,
    slug: "new-job-application",
    title: "New Job Application",
    body:
      "A new candidate has applied for your Frontend Developer position.",

    type: "info",
    isRead: false,
    priority: "high",

    actionText: "View Application",
    actionUrl: "/employer/applications/1",

    icon: "briefcase",
    createdAt: "2025-12-18T08:30:00Z",
    updatedAt: "2025-12-18T08:30:00Z",
  },
  {
    id: 2,
    slug: "application-shortlisted",
    title: "Candidate Shortlisted",
    body:
      "You have shortlisted a candidate for the Full Stack Developer role.",

    type: "success",
    isRead: false,
    priority: "medium",

    actionText: "View Candidate",
    actionUrl: "/employer/candidates/12",

    icon: "user-check",
    createdAt: "2025-12-18T07:50:00Z",
    updatedAt: "2025-12-18T07:50:00Z",
  },
  {
    id: 3,
    slug: "interview-scheduled",
    title: "Interview Scheduled",
    body:
      "An interview has been scheduled for the Backend Developer position.",

    type: "danger",
    isRead: false,
    priority: "high",

    actionText: "View Schedule",
    actionUrl: "/employer/interviews",

    icon: "calendar",
    createdAt: "2025-12-17T17:15:00Z",
    updatedAt: "2025-12-17T17:15:00Z",
  },
  {
    id: 4,
    slug: "job-post-approved",
    title: "Job Post Approved",
    body:
      "Your React Developer job post has been approved and is now live.",

    type: "success",
    isRead: true,
    priority: "medium",

    actionText: "View Job",
    actionUrl: "/employer/jobs/react-developer",

    icon: "check-circle",
    createdAt: "2025-12-17T14:20:00Z",
    updatedAt: "2025-12-17T14:20:00Z",
  },
  {
    id: 5,
    slug: "job-expiring-soon",
    title: "Job Expiring Soon",
    body:
      "Your posted job will expire in 3 days. Renew it to keep receiving applications.",

    type: "warning",
    isRead: false,
    priority: "high",

    actionText: "Renew Job",
    actionUrl: "/employer/jobs/renew",

    icon: "clock",
    createdAt: "2025-12-17T11:00:00Z",
    updatedAt: "2025-12-17T11:00:00Z",
  },
  {
    id: 6,
    slug: "new-message-received",
    title: "New Message Received",
    body:
      "A candidate has sent you a message regarding job requirements.",

    type: "info",
    isRead: true,
    priority: "low",

    actionText: "Open Chat",
    actionUrl: "/messages",

    icon: "message-square",
    createdAt: "2025-12-16T19:45:00Z",
    updatedAt: "2025-12-16T19:45:00Z",
  },
  {
    id: 7,
    slug: "subscription-expiring",
    title: "Subscription Expiring",
    body:
      "Your premium subscription will expire in 5 days. Renew now.",

    type: "warning",
    isRead: false,
    priority: "high",

    actionText: "Renew Subscription",
    actionUrl: "/billing",

    icon: "credit-card",
    createdAt: "2025-12-16T10:30:00Z",
    updatedAt: "2025-12-16T10:30:00Z",
  },
  {
    id: 8,
    slug: "profile-viewed",
    title: "Profile Viewed",
    body:
      "Your company profile was viewed by 3 candidates today.",

    type: "info",
    isRead: true,
    priority: "low",

    actionText: "View Profile",
    actionUrl: "/employer/profile",

    icon: "eye",
    createdAt: "2025-12-15T16:10:00Z",
    updatedAt: "2025-12-15T16:10:00Z",
  },
  {
    id: 9,
    slug: "password-changed",
    title: "Password Changed",
    body:
      "Your account password was changed successfully.",

    type: "success",
    isRead: true,
    priority: "low",

    actionText: "Security Settings",
    actionUrl: "/settings/security",

    icon: "lock",
    createdAt: "2025-12-15T09:00:00Z",
    updatedAt: "2025-12-15T09:00:00Z",
  },
  {
    id: 10,
    slug: "new-job-recommendation",
    title: "New Job Recommendation",
    body:
      "A new job matching your skills has been recommended.",

    type: "info",
    isRead: false,
    priority: "medium",

    actionText: "View Job",
    actionUrl: "/jobs/recommended",

    icon: "star",
    createdAt: "2025-12-14T18:40:00Z",
    updatedAt: "2025-12-14T18:40:00Z",
  },
];
