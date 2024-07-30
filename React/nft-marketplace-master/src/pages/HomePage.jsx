import { NftSection } from "../components/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";

export function HomePage() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/nfts");
        setNfts(response.data);
      } catch (error) {
        setError("Failed to fetch NFTs.");
      } finally {
        setLoading(false);
      }
    };

    fetchNfts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (nfts.length === 0) return <p>No data available.</p>;

  return (
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />
      <MarketPlaceFilters />
      {nfts.map((nft) => (
        <NFTSection key={nft.rank} {...nft} />
      ))}
    </LayoutContainer>
  );
}
