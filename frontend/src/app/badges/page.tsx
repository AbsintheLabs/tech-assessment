import BadgeCarousel from "./components/BadgeCarousel";
import EarningDetails from "./components/EarningDetails";
import CommunityBadges from "./components/CommunityBadges";

export default async function BadgesPage() {
  return (
    <div className=" bg-elevation-background-dark text-text-primary-dark p-6 space-y-8">
      <h2 className="text-2xl font-semibold">Badges</h2>
      <BadgeCarousel />
      <EarningDetails />
      <CommunityBadges />
    </div>
  );

  // return (
  //     <Suspense fallback={<div>Loading...</div>}>
  //         <main className="flex min-h-[84vh] w-full h-full flex-col items-center justify-between bg-elevation-background-dark">

  //             <p>Badges page</p>

  //         </main>
  //     </Suspense>
  // );
}
