import { Metadata } from "next";
import { CreateUser } from "@/components/common/CreateUser";

export const metadata: Metadata = {
  title: "Ibude – Location de logements uniques entre particuliers",
  description: "Découvrez Ibude, la plateforme de location entre particuliers pour trouver et réserver des logements uniques, simplement et en toute confiance.",
  keywords: [
    "Ibude",
    "location de logements",
    "location entre particuliers",
    "hébergement de vacances",
    "alternative Airbnb",
    "réservation logement",
    "locations courte durée",
    "séjours authentiques",
    "plateforme de voyage"
  ]
}


export default function Home() {
  return (
    <div className="">
      <main
        className="relative bg-no-repeat bg-cover bg-center h-auto py-90 flex items-center md:h-[60vh] justify-center overflow-hidden"
        style={{backgroundImage: `url("/ibude-background.jpg")`}}
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4 animate-in zoom-in-95 duration-200">
                  <CreateUser/>
              </div>
        </div>
      </main>
    </div>
  );
}
