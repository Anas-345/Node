import { useNavigate } from "react-router";
import InputField from "../../components/InputField";
import { sendRequest } from "../../functions/sendData";
import { toastNotification } from "../../functions/notifications";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  function handleChange(e, content) {
    setUser((prev) => ({ ...prev, [content.toLowerCase()]: e.target.value }));
  }

  async function handleClick() {
    const { email, password } = user;
    if (!email.trim() || !password) {
      toastNotification({ content: "Please fill input fields", type: "error" });
      return;
    }
    const data = await sendRequest("login", user, "/", navigate)
    setUser(data)
  }

  return (
    <div className="min-h-screen w-3xl flex items-center justify-center p-4">
      <div className="absolute rounded-full bg-[#e8a045]/5 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-110 bg-[#0f0d0b] border border-[#1e1c18] rounded-2xl p-8 shadow-2xl shadow-black/60">
        <div className="mb-8">
          <h1 className="mt-2 text-[28px] font-bold text-[#f0ebe3] tracking-tight leading-tight">
            Login
          </h1>
        </div>

        <div className="h-px bg-linear-to-r from-[#1e1c18] via-[#2a2620] to-[#1e1c18] mb-7" />

        <div className="flex flex-col gap-5">
          {[
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
          onClick={handleClick}
        >
          Login
        </button>

        <p className="mt-5 text-center text-[13px] text-[#4a4540]">
          Don't have an account?{" "}
          <span
            className="text-[#e8a045] hover:text-[#f5b05a] cursor-pointer transition-colors duration-150 font-medium"
            onClick={() => navigate("/auth/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
