import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
const BannerCarousel = () => {
  const BannerImages = [
    {
      imageURL: "/images/banner/bn-august-smm-draw-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 1",
    },
    {
      imageURL: "/images/banner/bn-august-smm-draw-insta-com-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 2",
    },
    {
      imageURL: "/images/banner/bn-birthday-pinup-bg.png",
      width: "800",
      height: "150",
      alt: "Slide 3",
    },
    {
      imageURL: "/images/banner/bn-cybersport-casino-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 4",
    },
    {
      imageURL: "/images/banner/bn-freespin-days-gamzix-1-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 5",
    },
    {
      imageURL: "/images/banner/bn-ganesh-chaturthi-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 6",
    },
    {
      imageURL:
        "/images/banner/bn-network-promotion-smart-soft-august-hot-days-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 7",
    },
    {
      imageURL:
        "/images/banner/bn-network-tournament-non-stop-drop-500k-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 8",
    },
    {
      imageURL: "/images/banner/bn-playtech-two-games-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 9",
    },
    {
      imageURL: "/images/banner/bn-prerealese-play-n-go-mount-m-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 10",
    },
    {
      imageURL: "/images/banner/bn-prerealese-spinomenal-1-reel-buffalo-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 11",
    },
    {
      imageURL:
        "/images/banner/bn-spinomenal-pinup-casino-local-tournament-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 12",
    },
    {
      imageURL: "/images/banner/bn-telegram-weekly-quiz-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 13",
    },
    {
      imageURL: "/images/banner/bn-weekly-draw-bg.jpg",
      width: "800",
      height: "150",
      alt: "Slide 14",
    },
  ];

  return (
    <Carousel>
      {BannerImages.map((item, id) => (
        <Carousel.Item key={id}>
          <Image
            className="d-block w-100"
            src={item.imageURL}
            alt={item.alt}
            width={1000}
            height={300}
            layout="responsive"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
