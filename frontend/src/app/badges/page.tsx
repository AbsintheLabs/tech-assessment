import BadgeCarousel from "./components/BadgeCarousel";
import EarningDetails from "./components/EarningDetails/EarningDetails";
import CommunityBadges from "./components/CommunityBadges";
import { LastActivitiesTable } from "./components/LastActivitiesTable";
import LogsComponent from "@/components/LogsComp";

export default async function BadgesPage() {
  return (
    <div className=" bg-elevation-background-dark text-text-primary-dark p-6 space-y-8">
      <LogsComponent />
      <p className="text-sm text-text-secondary-dark">Last Activities</p>
      <LastActivitiesTable />

      <p className="text-sm text-text-secondary-dark">Badges</p>
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
