export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100vw] min-h-[250px] flex items-center justify-center text-xl flex-col">
      {children}
    </div>
  );
}
