import Header from "./components/header";

export default function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-7xl mx-auto">
      <Header />
      <main className="flex justify-center items-center flex-col gap-4">
        <div className="text-5xl font-medium font-mono">Fullstack</div>
      </main>
    </div>
  );
}
