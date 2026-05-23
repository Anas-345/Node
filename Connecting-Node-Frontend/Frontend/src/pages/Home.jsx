import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { sendRequest } from "../functions/sendData";

export default function Home() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    sendRequest("logout", { email: user.email }, "/", navigate);
    setUser({});
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-[#e8a045] mb-2">
          Welcome
        </p>
        <h1
          className="text-4xl font-bold text-[#f0ebe3]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome to Home Page
        </h1>
        <p className="mt-3 text-sm text-[#7a7268]">
          Get started by registering or signing into your account.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {user?.active ? (
          <Button content="Logout" variant="danger" handleClick={handleClick} />
        ) : (
          <>
            <Button
              content="Register"
              variant="primary"
              handleClick={() => navigate("/auth/register")}
            />
            <Button
              content="Login"
              variant="secondary"
              handleClick={() => navigate("/auth/login")}
            />
          </>
        )}
      </div>
    </div>
  );
}
