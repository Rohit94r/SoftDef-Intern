export default function Button({ children, variant = "outline", size = "md", className = "", icon }) {
  const base = "inline-flex items-center justify-center font-medium transition-colors duration-200";

  const styles = {
    outline: "border border-white/80 text-white bg-transparent hover:bg-white/10 rounded-lg",
    icon: "border border-white/80 text-white bg-transparent hover:bg-white/10 rounded-lg",
  };

  const sizes = {
    md: "px-7 py-2.5 text-sm",
    icon: "w-10 h-10 p-0",
  };

  return (
    <button type="button" className={`${base} ${styles[variant]} ${sizes[size]} ${className}`}>
      {icon || children}
    </button>
  );
}
