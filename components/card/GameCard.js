import Image from "next/image";
import styles from "../../styles/gameCard/GameCard.module.css";
const GameCard = ({ data }) => {
  return (
    <div className={styles.cardMain}>
      <div className={`row`}>
        <div className={`col-12`}>
          <Image
            src={data?.imageUrl}
            alt={data?.alt}
            width={192}
            height={145}
            layout="responsive"
          />
        </div>
        <div className={`col-12 d-flex text-light mt-2 ms-2`}>
          {data?.gameTitle}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
