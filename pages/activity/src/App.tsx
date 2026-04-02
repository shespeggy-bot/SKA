import { ActivityHomePage } from "./components/ActivityHomePage";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-neutral-900 py-4">
      <div className="relative w-[750px] max-w-full min-h-[3200px] overflow-x-hidden bg-[#fef1dd] shadow-2xl">
        <ActivityHomePage />
      </div>
    </div>
  );
}
