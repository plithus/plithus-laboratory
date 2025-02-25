import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/Auth/Login";
import App from "./App";
import Home from "./components/pages/Home/Home";
import Redirection from "./components/pages/Auth/Redirection";
import CompanyInfo from "./components/pages/CompanyInfo/CompanyInfo";
import TestList from "./components/pages/TestManagement/TestList/TestList";
import Inquiry from "./components/pages/CustomerCenter/ Inquiry/Inquiry";
import PliMoneyCharge from "./components/pages/PliWallet/PliMoneyCharge/PliMoneyCharge";
import MakerGuide from "./components/pages/CustomerCenter/Guide/Guide";
import GuideBasic from "./components/pages/CustomerCenter/Guide/Basic/GuideBasic";
import GuideReport from "./components/pages/CustomerCenter/Guide/Report/GuideReport";
import GuidePlimoney from "./components/pages/CustomerCenter/Guide/Plimoney/GuidePlimoney";
import AddTest from "./components/pages/TestManagement/AddTest/AddTest";
import AddTestPhase1 from "./components/pages/TestManagement/AddTest/AddTestPhase1/AddTestPhase1";
import AddTestPhase2 from "./components/pages/TestManagement/AddTest/AddTestPhase2/AddTestPhase2";
import AddTestPhase3 from "./components/pages/TestManagement/AddTest/AddTestPhase3/AddTestPhase3";
import AddTestPhase4 from "./components/pages/TestManagement/AddTest/AddTestPhase4/AddTestPhase4";
import InquiryList from "./components/pages/CustomerCenter/ Inquiry/InquiryList/InquiryList";
import InquiryDetail from "./components/pages/CustomerCenter/ Inquiry/InquiryDetail/InquiryDetail";
import EditCompanyInfo from "./components/pages/CompanyInfo/EditCompanyInfo/EditCompanyInfo";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "company-info",
        element: <CompanyInfo />,
      },
      {
        path: "company-info/edit",
        element: <EditCompanyInfo />,
      },
      {
        path: "plimoney-charge",
        element: <PliMoneyCharge />,
      },
      { path: "test-list", element: <TestList /> },
      { path: "test-list/add", element: <AddTest /> },
      { path: "test-list/add/1", element: <AddTestPhase1 /> },
      { path: "test-list/add/2", element: <AddTestPhase2 /> },
      { path: "test-list/add/3", element: <AddTestPhase3 /> },
      { path: "test-list/add/4", element: <AddTestPhase4 /> },
      { path: "inquiry", element: <Inquiry /> },
      { path: "inquiry/list", element: <InquiryList /> },
      { path: "inquiry/list/:id", element: <InquiryDetail /> },
      {
        path: "guide",
        element: <MakerGuide />,
      },
      {
        path: "guide/basic",
        element: <GuideBasic />,
      },
      {
        path: "guide/report",
        element: <GuideReport />,
      },
      {
        path: "guide/plimoney",
        element: <GuidePlimoney />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/login/complete", element: <Redirection /> },
]);
export default router;
