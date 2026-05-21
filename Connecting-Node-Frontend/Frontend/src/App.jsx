import { ToastContainer } from "react-toastify";
import PageRouter from "./router/PageRouter";

export default function App() {
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-[#080706] flex flex-col items-center justify-center gap-8 px-4">
        <PageRouter />
      </div>
    </>
  );
}
