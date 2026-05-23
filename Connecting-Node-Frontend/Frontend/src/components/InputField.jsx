export default function InputField({
  type,
  content,
  placeholder,
  handleChange,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#6b6560]">
        {content}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, content)}
        className="
          h-10.5 w-full rounded-lg px-3.5 bg-[#0a0908] border border-[#2a2620] text-sm text-[#f0ebe3] placeholder-[#3a3530] outline-none transition-all duration-150 focus:border-[#e8a045] focus:ring-2 focus:ring-[#e8a045]/10
        "
      />
    </div>
  );
}
