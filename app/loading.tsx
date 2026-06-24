export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 border-2 border-gray-100 border-t-black rounded-full animate-spin" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          Loading
        </span>
      </div>
    </div>
  );
}
