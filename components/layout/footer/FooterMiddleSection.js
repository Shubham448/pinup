import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

import styles from '../../../styles/layout/footer/FooterMiddleSection.module.css'
const FooterMiddleSection = () => {
    return (
        <div className={`container-fluid ${styles.containerInner}`}>
            <div className='row'>
                <div className='col-lg-4 col-12 text-lg-start text-center'>
                    <div className={`${styles.textSection}`}>
                        <h2>Pin-Up Virtual Casino</h2>
                        <p>Want to indulge your favourite hobby with a little extra excitement? Then you will appreciate all the attraction of Pin-up online casino! A new awesome adventure is waiting for you to become our next big winner.</p>
                    </div>
                    <div className={`${styles.textSectionBottom}`}>
                        <h2>Entertainment for all tastes in Pin-up online casino.</h2>
                        <p className='m-0'>You will definitely enjoy playing new games surrounded by gorgeous Pin-up girls. Yes, girls with red lips, wearing lacy stockings and standing in attractive poses. Our online casino website has been designed as a place where you can relax and let yourself go. Another advantage of the Pin-up casino is its unique VIP system! Play new slot machines, complete missions and climb from level to level! As you make discoveries, you will upgrade your account and quickly go from Beginner to Gambling Lord.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-12 text-lg-start text-center mt-3 mt-lg-0'><div className={`${styles.textSectionBottom}`}>
                    <h2>Pin-up online casino has advantages in every detail!</h2>
                    <p className='m-0'>Looking for a big win? Take small steps to reach a major victory. We have developed an alternative currency — Pincoins! If you complete simple missions, you can exchange your pincoins collected for BONUSES and very interesting prizes. You won’t get bored as the list of loyalty rewards and other perks is regularly updated. We have something special for you every time you visit the Pin-up website. The list of slots is updated every day, and there are always new ones. In addition, you will be impressed by the multitude of available bonuses. We will give you 100 of your first deposit amount. Online casino by Pin-up is a multilingual platform operating in the world’s most popular languages. Play, win and have fun! We have an exclusive format for you. So why don’t you try it!</p>
                </div>
                </div>

                <div className='col-lg-4 col-12 d-lg-block d-none '>
                    <div className={`${styles.textSectionBottom} ${styles.benefitListSection}`}>
                        <h2>Benefits:</h2>

                        <ul className={`d-grid ${styles.benefitList}`}>
                            <li>Payouts of all winnings
                            </li>
                            <li>A wide range of games</li>
                            <li>Software from top providers</li>

                            <li>Top-quality service</li>

                            <li>Great customer support</li>

                            <li>Great bonuses and promotions</li>

                            <li>Regular rewards for active players</li>

                        </ul>
                        <div className={styles.footerLogo}>
                            <Link href="/">
                                <a>
                                    <Image src="/images/logo_birthday.svg" alt="logo" width={150} height={60} />
                                </a>
                            </Link>

                        </div>

                    </div>
                </div>


            </div>
        </div >
    )
}

export default FooterMiddleSection