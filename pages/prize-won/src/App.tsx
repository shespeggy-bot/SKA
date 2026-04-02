import { PrizeWonModal } from "./components/PrizeWonModal";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-neutral-900 py-4">
      <div className="relative h-[1624px] w-[750px] max-w-full overflow-hidden shadow-2xl">
        <PrizeWonModal />
      </div>
    </div>
  );
}
