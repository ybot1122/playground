export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center text-3xl flex-col">
      {children}
    </div>
  );
}
