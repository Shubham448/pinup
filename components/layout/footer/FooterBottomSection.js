import React from 'react'
import styles from '../../../styles/layout/footer/FooterBottomSection.module.css'
import Image from 'next/image'
const FooterBottomSection = () => {

    const images = [
        {
            "imageURL": "/images/cira-2.png",
            "width": "24",
            "height": "36",
            "alt": "cirasco",
        },
        {
            "imageURL": "/images/eighteen.svg",
            "width": "38",
            "height": "36",
            "alt": "eighteen",
        },
        {
            "imageURL": "/images/mastercard_securty_code.svg",
            "width": "117",
            "height": "28",
            "alt": "master_card",
        },
        {
            "imageURL": "/images/verified_by_visa.svg",
            "width": "58",
            "height": "28",
            "alt": "verified_by_visa",
        },
        {
            "imageURL": "/images/astropay-logo.svg",
            "width": "101",
            "height": "102",
            "alt": "astropay-logo",
        },
        {
            "imageURL": "/images/Neteller.svg",
            "width": "102",
            "height": "28",
            "alt": "Neteller",
        },
        {
            "imageURL": "/images/WebMoney.svg",
            "width": "113",
            "height": "28",
            "alt": "WebMoney",
        },
        {
            "imageURL": "/images/Skrill.svg",
            "width": "85",
            "height": "28",
            "alt": "Skrill",
        },
        {
            "imageURL": "/images/jeton-voucher.svg",
            "width": "85",
            "height": "28",
            "alt": "jeton-voucher",
        }
    ]
    return (
        <div className={`container-fluid ${styles.containerInner}`}>
            <div className={styles.imagesSection}>
                {
                    images.map((item, index) => (
                        <Image src={item.imageURL} width={item.width} height={item.height} alt={item.alt} key={index} />
                    ))
                }

            </div>
        </div>
    )
}

export default FooterBottomSection