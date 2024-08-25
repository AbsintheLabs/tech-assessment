import BadgeCarousel from "./components/BadgeCarousel";
import EarningDetails from "./components/EarningDetails/EarningDetails";
import CommunityBadges from "./components/CommunityBadges";
import { LastActivitiesTable } from "./components/LastActivitiesTable";
import LogsComponent from "@/components/LogsComp";

export default async function BadgesPage() {
  return (
    <div className=" bg-elevation-background-dark text-text-primary-dark p-6 space-y-8">
      {/* <LogsComponent /> */}
      <p className="text-sm text-text-secondary-dark">Last Activities</p>
      <LastActivitiesTable />

      <p className="text-sm text-text-secondary-dark">Badges</p>
      <BadgeCarousel />
      <EarningDetails />
      <CommunityBadges />
    </div>
  );
}
