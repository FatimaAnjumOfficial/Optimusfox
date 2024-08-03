import { Cross, Diamond, Discount, Hand, Image } from "../../assets/Icons";
import { SharedButton } from "../shared/SharedButton";
//import "../../pages/StylishButton.css";
import Search from "../../pages/Search";
import Button from "../../pages/Button";

export function MarketPlaceSubmenu() {
  return (
    <>
      <div>
        <div>
          {/*<Search />
        <input type="search" placeholder="Search" className="bg-zinc-800" />*/}
          <Search />
        </div>
        <br />
        <div className="flex gap-3">
          <SharedButton
            className="md:flex hidden gap-2.5 rounded-xl px-[50px]  bg-secondary-danger items-center"
            variant="ghost"
          >
            <Image />
            <span>NFT</span>
            <Cross />
          </SharedButton>
          <SharedButton
            className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
            variant="ghost"
          >
            <Discount />
            <span>Discount Codes</span>
          </SharedButton>

          <SharedButton
            className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center  min-w-max"
            variant="ghost"
          >
            <Hand />
            <span>Physical Items</span>
          </SharedButton>
          <Button
            className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center  min-w-max"
            variant="ghost"
          >
            <Diamond />
            <span>Perks</span>
          </Button>
          <Button />
        </div>
      </div>
    </>
  );
}
