import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import styles from '../../../styles/layout/footer/FooterCopyrightSection.module.css'
const FooterCopyrightSection = () => {
    return (
        <div className={`container-fluid ${styles.containerInner}`}>
            <div className={styles.innerContent}>
                <p>The web-site is operated by B.W.I. BLACK-WOOD LIMITED acting as a payment agent, a company registered and established under the laws of Cyprus, with registered address Spyrou Kyprianou 61, SK HOUSE, 4003 Limassol, Cyprus, its parent company Carletta N.V. <br /> Carletta N.V. is licensed (Curacao License #8048/JAZ2017-0003) and regulated by Antillephone N.V. Carletta N.V.s registration number is 142346 and its Business address: Perseusweg 27A, Curaçao.<br />Mailing address: Perseusweg 27A, Curaçao.</p>
                <div className={styles.androidLogo}>
                    <Link href="https://www.pin-up622.com/en/promo_android">
                        <a>
                            <Image src="/images/Android.svg" alt="" width={93} height={32} />
                        </a>
                    </Link>
                </div></div>
        </div>
    )
}

export default FooterCopyrightSection