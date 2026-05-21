export default function Button({ content, handleClick, variant = "primary" }) {
  const variants = {
    primary:
      "bg-[#e8a045] hover:bg-[#f0aa55] text-[#0f0e0c] font-semibold shadow-md hover:shadow-[#e8a045]/30",
    secondary:
      "bg-transparent border border-[#2e2a24] hover:border-[#e8a045] text-[#f0ebe3] hover:text-[#e8a045]",
    ghost:
      "bg-transparent text-[#7a7268] hover:text-[#e8a045] underline-offset-4 hover:underline",
    danger:
      "bg-red-700/80 hover:bg-red-600 text-white font-semibold",
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer px-5 py-2.5 rounded-lg text-sm transition-all duration-200 active:scale-95 ${variants[variant]}`}
    >
      {content}
    </button>
  );
}