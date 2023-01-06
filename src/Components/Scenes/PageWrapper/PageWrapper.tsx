import { Routes, Route } from "react-router-dom";
import Board from "../Board/Board";
import HomeScreen from "../HomeScreen/HomeScreen";
import WaitingScreen from "../WaitingScreen/WaitingScreen";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import Records from "../Records/Records";

const PageWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname == "/game") {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/waiting" element={<WaitingScreen />} />
      <Route path="/game" element={<Board />} />
      <Route path="/record" element={<Records />} />
    </Routes>
  );
};

export default PageWrapper;
