import { NftSection } from "../components/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";
import AddButton from "./AddButton";
import "./HomePage.css";

export function HomePage() {
  return (
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />
      <AddButton />
      <MarketPlaceFilters />
      <NftSection />
    </LayoutContainer>
  );
}
