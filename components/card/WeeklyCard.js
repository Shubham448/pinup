import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/FestivalCard.module.css";
import PlayLotteryForm from "../modal/playLotteryForm";

const WeeklyCard = () => {
  return (
    <>
      <div className={`${styles.cardMain}`}>
        <div className={`row`}>
          <div
            className={`col-4 d-flex align-items-center justify-content-center`}
          >
            <Image src={data?.qrCode} width={200} height={200} />
          </div>
          <div
            className={` text-light col-3 d-flex align-items-center justify-content-center`}
          >
            <div
              className={`d-block text-center ${
                customStyles ? styles.middleSectionFlat : styles.middleSection
              }`}
            >
              <h2>{data?.amount}</h2>
              <h3>{data?.prize}</h3>
            </div>
          </div>
          <div
            className={` text-light col-5 d-flex align-items-center justify-content-center`}
          >
            <div
              className={`d-grid text-center d-grid gap-2 ${
                customStyles ? styles.rightSectionFlat : styles.rightSection
              }`}
            >
              <h5>Ticket Id - {data?.ticketId}</h5>
              <h6>
                Draw Date <br />
                {data?.drawDate}
              </h6>

              {customStyles ? (
                <button
                  className={`btn btn-success shadow-none ${styles.purchaseButtonFlat} `}
                  data-bs-toggle="modal"
                  data-bs-target="#playLottery"
                >
                  Purchase
                </button>
              ) : (
                <Link href="/lottery/festival" passHref>
                  <button
                    className={`btn btn-success shadow-none ${
                      customStyles
                        ? styles.purchaseButtonFlat
                        : styles.purchaseButton
                    }`}
                  >
                    Purchase
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <PlayLotteryForm />
    </>
  );
};

export default WeeklyCard;
