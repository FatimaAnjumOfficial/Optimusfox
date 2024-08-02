import { NftSection } from "../components/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";
import Button from "./Button";
import "./HomePage.css";

export function HomePage() {
  return (
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />

      <Button />

      <MarketPlaceFilters />
      <NftSection />
    </LayoutContainer>
  );
}
