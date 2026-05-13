import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toastNotification } from "./Notifications";

export default function Register() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const roleRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfrmRef = useRef();

  async function API_Call() {
    const data = await axios.get("http://localhost:3000/");
    console.log("data", data);
    setUsers(data.data);
  }

  async function sendDataToServer() {
    const response = await axios.post("http://localhost:3000/", users);
    toastNotification(response.data)
  }

  function resetInputs() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    cnfrmRef.current.value = "";
    roleRef.current.value = "owner";
  }

  function handleRegister() {
    const name = nameRef.current.value.trim();
    const role = roleRef.current.value;
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    setUsers({ name, email, role, password });
    resetInputs();
  }

  function handleEnter(focusRef) {
    focusRef.current.focus();
  }

  const inputClass =
    "w-full bg-[#0f0e0c] border border-[#2e2a24] rounded-lg px-3 py-2.5 text-sm text-[#f0ebe3] placeholder-[#3a3630] outline-none focus:border-[#e8a045] focus:ring-1 focus:ring-[#e8a045]/20 transition-all";

  useEffect(() => {
    sendDataToServer();
  }, [users]);

  useEffect(() => {
    API_Call();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0e0c] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#161412] border border-[#2e2a24] rounded-2xl p-7">
        <p className="text-[10px] uppercase tracking-widest text-[#e8a045] mb-1">
          Get Started
        </p>
        <h2
          className="text-2xl font-bold text-[#f0ebe3] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Create Account
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs text-[#7a7268] mb-1.5">Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your name"
              className={inputClass}
              onKeyDown={(e) => e.key === "Enter" && handleEnter(roleRef)}
            />
          </div>
          <div>
            <label className="block text-xs text-[#7a7268] mb-1.5">Role</label>
            <select
              ref={roleRef}
              className={inputClass + " cursor-pointer"}
              onKeyDown={(e) => e.key === "Enter" && handleEnter(emailRef)}
            >
              <option value="owner">Owner</option>
              <option value="customer">Customer</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs text-[#7a7268] mb-1.5">Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="you@example.com"
            className={inputClass}
            onKeyDown={(e) => e.key === "Enter" && handleEnter(passwordRef)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-[#7a7268] mb-1.5">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Create a password"
            className={inputClass}
            onKeyDown={(e) => e.key === "Enter" && handleEnter(cnfrmRef)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-xs text-[#7a7268] mb-1.5">
            Confirm Password
          </label>
          <input
            ref={cnfrmRef}
            type="password"
            placeholder="Repeat your password"
            className={inputClass}
            onKeyDown={(e) => e.key === "Enter" && handleRegister()}
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-2.5 bg-[#e8a045] hover:bg-[#f0aa55] active:scale-95 text-[#0f0e0c] text-sm font-semibold rounded-lg transition-all mb-4 cursor-pointer"
        >
          Create Account
        </button>

        <p className="text-center text-xs text-[#7a7268]">
          Already have an account?{" "}
          <span className="text-[#e8a045] hover:text-[#f0aa55] font-semibold cursor-pointer transition-colors">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
