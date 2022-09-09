import GameCard from "../components/card/GameCard";
import BannerCarousel from "../components/carousel/BannerCarousel";
export default function Home() {
  const cardData = [
    {
      imageUrl: "/images/cardBanner/pic10.jpg",
      gameTitle: "Wild Depths",
      url: "",
    },
    {
      imageUrl: "/images/cardBanner/pic12.jpg",
      gameTitle: "Book of cleopatra",
      url: "",
    },
  ];
  return (
    <div className="mt-0">
      <BannerCarousel />
      <div className="row mt-3 mb-5 g-3 flex-wrap vh-100">
        {cardData?.map((item, index) => (
          <div className="col-12 col-md-6 " key={index}>
            <GameCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
