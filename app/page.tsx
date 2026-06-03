import Home from "./components/home";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-4 px-4 sm:items-start">
        <Home />
      </main>
    </div>
  );
}
