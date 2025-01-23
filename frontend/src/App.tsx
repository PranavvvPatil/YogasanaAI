import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));

import YogaPoseUpload from "./components/YogaChatBot/YogaPoseUpload";

import Layout from "./layout/Layout";
import Loading from "./components/Loading/Loading";

import YogaChatHome from "./components/YogaChatBot/YogaChatHome";
import PoseResult from "./components/YogaChatBot/PoseResults";
import PoseDetails from "./components/YogaChatBot/PoseDetails";
import YogaPoseReport from "./components/YogaChatBot/YogaPoseReport";
import PrivacyPolicy from "./components/YogaChatBot/PrivacyPolicy";
import ReachOut from "./components/YogaChatBot/ReachOut";



export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<YogaChatHome />} />
          <Route path="/upload" element={<YogaPoseUpload />} />
          <Route path="/pose-result" element={<PoseResult />} />
          <Route path="/pose-details" element={<PoseDetails />} />
          <Route path="/yoga-pose-report" element={<YogaPoseReport />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/reach-out" element={<ReachOut />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
