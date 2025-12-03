import { MobileNavigationButton } from "./mobile-navigation-button/MobileNavigationButton";
import { MobileNavigationMenu } from "./mobile-navigation-menu/MobileNavigationMenu";

export const MobileNavigation = () => {
  return (
    <>
      <div className="block md:hidden ml-auto mr-2  my-auto cursor-pointer transition-all">
        <MobileNavigationButton/>
        <MobileNavigationMenu/>
      </div>
    </>
  );
};
