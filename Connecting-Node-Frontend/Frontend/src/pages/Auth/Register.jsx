import { useState } from "react";
import InputField from "../../components/InputField";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleChange(e, content) {
    setUser((prev) => ({ ...prev, [content.toLowerCase()]: e.target.value }));
  }

  return (
    <div className="min-h-screen w-3xl flex items-center justify-center p-4">
      <div className="absolute rounded-full bg-[#e8a045]/5 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-110 bg-[#0f0d0b] border border-[#1e1c18] rounded-2xl p-8 shadow-2xl shadow-black/60">
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8a045]">
            Get started
          </span>
          <h1 className="mt-2 text-[28px] font-bold text-[#f0ebe3] tracking-tight leading-tight">
            Create account
          </h1>
          <p className="mt-1.5 text-sm text-[#4a4540]">
            Join us today — it's free to get started.
          </p>
        </div>

        <div className="h-px bg-linear-to-r from-[#1e1c18] via-[#2a2620] to-[#1e1c18] mb-7" />

        <div className="flex flex-col gap-5">
          {[
            { content: "Name", type: "text", placeholder: "Enter your name" },
            {
              content: "Email",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              content: "Password",
              type: "password",
              placeholder: "Enter your password",
            },
            {
              content: "Confirm",
              type: "password",
              placeholder: "Confirm password",
            },
          ].map((i) => (
            <InputField
              key={i.content}
              content={i.content}
              type={i.type}
              placeholder={i.placeholder}
              handleChange={handleChange}
            />
          ))}
        </div>

        <button
          className="
          mt-7 w-full h-12 rounded-xl bg-[#e8a045] hover:bg-[#f5b05a] active:bg-[#d4923a] text-[13px] font-bold tracking-wide text-[#0a0908] shadow-lg shadow-[#e8a045]/20 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#e8a045]/40 cursor-pointer"
        >
          Create account
        </button>

        <p className="mt-5 text-center text-[13px] text-[#4a4540]">
          Already have an account?{" "}
          <span className="text-[#e8a045] hover:text-[#f5b05a] cursor-pointer transition-colors duration-150 font-medium">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
