import { ProfileCard } from "./ProfileCard";
import { SocialSection } from "./SocialSection";
import { ActionGroup } from "./ActionGroup";

export function Sidebar() {
  return (
    <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center z-10">
      <aside className="w-full h-fit bg-background rounded-[32px] border border-border p-5 flex flex-col items-center shadow-lg">
        <ProfileCard />
        <div className="w-full py-4">
          <SocialSection />
        </div>
        <div className="w-full mt-1">
          <ActionGroup />
        </div>
      </aside>
    </div>
  );
}
