// Home
import Modules from "../components/home/Modules.js";
import Assign from "../components/home/Assign.js";
import Profile from "../components/profile/Profile.js";
import Help from "../components/home/Help.js";
// Employee KYC
import EmployeeKYC from "../components/hrManagement/employeeKyc/EmployeeKYC.js";
import ViewIndividualKyc from "../components/hrManagement/employeeKyc/ViewIndividualKyc.js";
import EditEmployeeKyc from "../components/hrManagement/employeeKyc/EditEmployeeKyc.js";
// Employee Onboarding
import EmployeeOnboarding from "../components/hrManagement/employeeOnboarding/EmployeeOnboarding.js";
// Employee Management
import JobOpenings from "../components/employeeManagement/job-openings/JobOpenings.js";
import RecruitmentProcess from "../components/employeeManagement/recruitmentProcess/Recruitment.js";
import ExitFeedback from "../components/employeeManagement/exitFeedback/ExitFeedback.js";
import Appraisal from "../components/employeeManagement/appraisal/Appraisal.js";
import TrainingAndDevelopment from "../components/employeeManagement/training/TrainingAndDevelopment.js";
import EmployeeRelation from "../components/employeeManagement/employeeRelation/EmployeeRelation.js";
import IsoCompliance from "../components/employeeManagement/iso/IsoCompliance.js";
// Attendance
import Attendance from "../components/hrManagement/attendance/Attendance.js";
import Dashboard from "../components/dashboard/Dashboard.js";
// Document Request Form
import DocumentRequest from "../components/hrManagement/documentRequest/DocumentRequest.js";
// DRA Profile
import DraProfile from "../components/hrManagement/dra/DraProfile.js";
// Resignation
import Resignation from "../components/hrManagement/resignation/Resignation.js";
// Salaries and Commissions
import SalariesAndCommissions from "../components/hrManagement/salariesAndCommissions/SalariesAndCommissions.js";
// Interview
import Interview from "../components/interview/Interview.js";

const routesConfig = [
  {
    path: "/profile",
    element: <Profile />,
    allowedModules: [],
    name: "Profile",
    category: null,
    canBeAssigned: false,
  },
  {
    path: "/",
    element: <Dashboard />,
    allowedModules: [],
    name: "Dashboard",
    category: null,
    canBeAssigned: false,
  },
  {
    path: "/modules",
    element: <Modules />,
    allowedModules: [],
    name: "Modules",
    category: null,
    canBeAssigned: false,
  },
  {
    path: "/assign",
    element: <Assign />,
    allowedModules: [],
    name: "Assign",
    category: null,
    canBeAssigned: false,
  },
  {
    path: "/help",
    element: <Help />,
    allowedModules: [],
    name: "Help",
    category: null,
    canBeAssigned: false,
  },
  {
    path: "/kyc",
    element: <EmployeeKYC />,
    allowedModules: ["Basic KYC Details"],
    name: "Basic KYC Details",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/view-kyc/:username",
    element: <ViewIndividualKyc />,
    allowedModules: ["Basic KYC Details"],
    name: "View KYC Details",
    category: "HR & Management",
    canBeAssigned: false,
  },
  {
    path: "/edit-kyc/:username",
    element: <EditEmployeeKyc />,
    allowedModules: ["Basic KYC Details"],
    name: "Edit KYC Details",
    category: "HR & Management",
    canBeAssigned: false,
  },
  {
    path: "/employee-onboarding",
    element: <EmployeeOnboarding />,
    allowedModules: ["Employee Onboarding"],
    name: "Employee Onboarding",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/job-openings",
    element: <JobOpenings />,
    allowedModules: ["Job Openings"],
    name: "Job Openings",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/recruitment",
    element: <RecruitmentProcess />,
    allowedModules: ["Recruitment Process"],
    name: "Recruitment Process",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/exit-feedback",
    element: <ExitFeedback />,
    allowedModules: ["Exit Feedback"],
    name: "Exit Feedback",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/performance-appraisal",
    element: <Appraisal />,
    allowedModules: ["Performance Appraisal"],
    name: "Performance Appraisal",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/training",
    element: <TrainingAndDevelopment />,
    allowedModules: ["Training And Development"],
    name: "Training And Development",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/employee-relation",
    element: <EmployeeRelation />,
    allowedModules: ["Employee Relation"],
    name: "Employee Relation",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/iso-and-statutory-compliance",
    element: <IsoCompliance />,
    allowedModules: ["ISO and Statutory Compliance"],
    name: "ISO and Statutory Compliance",
    category: "Employee Management",
    canBeAssigned: true,
  },
  {
    path: "/attendance",
    element: <Attendance />,
    allowedModules: ["Attendance"],
    name: "Attendance",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/document-request",
    element: <DocumentRequest />,
    allowedModules: ["Document Request"],
    name: "Document Request",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/dra-profile",
    element: <DraProfile />,
    allowedModules: ["DRA Profile"],
    name: "DRA Profile",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/resignation-process",
    element: <Resignation />,
    allowedModules: ["Resignation Process"],
    name: "Resignation Process",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/salaries",
    element: <SalariesAndCommissions />,
    allowedModules: ["Salaries and Commission Details"],
    name: "Salaries and Commission Details",
    category: "HR & Management",
    canBeAssigned: true,
  },
  {
    path: "/interview",
    element: <Interview />,
    allowedModules: ["Interview"],
    name: "Interview",
    category: "Interview",
    canBeAssigned: true,
  },
];

export default routesConfig;
