import Navbar from "./components/navbar";
import Home from "./components/home";
import Me from "./components/me";
import MyJourney from "./components/my-journey";
import Contact from "./components/contact";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-4 px-4 sm:items-start">
        <Home />
        <Me />
        <MyJourney />
        <Contact />
      </main>
    </div>
  );
}
