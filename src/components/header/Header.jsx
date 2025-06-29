import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
export default function Header({ claimFreeCredit, coin, resetCoin }) {
  return (
    <header>
      <Navbar coin={coin}></Navbar>
      <Banner claimFreeCredit={claimFreeCredit} resetCoin={resetCoin}></Banner>
    </header>
  );
}
