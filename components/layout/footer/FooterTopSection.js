import Link from 'next/link';
import styles from '../../../styles/layout/footer/FooterTopSection.module.css'

const FooterTopSection = () => {
    const termsOfUse = [
        {
            slug: "Terms and Conditions",
            url: "/",
        },
        {
            slug: "Betting Rules",
            url: "/",
        },
        {
            slug: "Types of bets",
            url: "/",
        },
        {
            slug: "General Rules for Accepting bets",
            url: "/",
        },
        {
            slug: "Rules for specific sports",
            url: "/",
        },
        {
            slug: "Refund Policy",
            url: "/",
        },
        {
            slug: "Data protection policy",
            url: "/",
        },
    ];
    const information = [
        {
            slug: "Promotions",
            url: "/",
        },
        {
            slug: "About us",
            url: "/",
        },
        {
            slug: "FAQ",
            url: "/",
        },
        {
            slug: "Privacy policy",
            url: "/",
        },
        {
            slug: "Responsible gambling",
            url: "/",
        },
        {
            slug: "KYC / AML Policy",
            url: "/",
        },
        {
            slug: "Risk warning notice",
            url: "/",
        },
    ];
    const bets = [
        {
            slug: "Live bets",
            url: "/",
        },
        {
            slug: "Pre-match bets",
            url: "/",
        },
        {
            slug: "Multi-live",
            url: "/",
        },
        {
            slug: "Results",
            url: "/",
        },
        {
            slug: "Live calendar",
            url: "/",
        },
    ];
    const casino = [
        {
            slug: "New",
            url: "/",
        },
        {
            slug: "Slots",
            url: "/",
        },
        {
            slug: "Roulettes",
            url: "/",
        },
        {
            slug: "Table games",
            url: "/",
        },
        {
            slug: "Lottery",
            url: "/",
        },
        {
            slug: "VIP Programme",
            url: "/",
        },
    ];
    return (
        <div className={`container-fluid ${styles.containerInner}`}>
            <div className={`row`}>
                <div className={`col`}>
                    <div className={styles.innerContent}>
                        <h2>Terms of use:</h2>
                        <ul>
                            {termsOfUse.map((item, id) => (
                                <li key={id}>
                                    <Link href={item.url}>
                                        <a>{item.slug}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`col`}>
                    <div className={styles.innerContent}>
                        <h2>Information:</h2>
                        <ul>
                            {information.map((item, id) => (
                                <li key={id}>
                                    <Link href={item.url}>
                                        <a>{item.slug}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`col`}>
                    <div className={styles.innerContent}>
                        <h2>Bets:</h2>
                        <ul>
                            {bets.map((item, id) => (
                                <li key={id}>
                                    <Link href={item.url}>
                                        <a>{item.slug}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`col`}>
                    <div className={styles.innerContent}>
                        <h2>Casino:</h2>
                        <ul>
                            {casino.map((item, id) => (
                                <li key={id}>
                                    <Link href={item.url}>
                                        <a>{item.slug}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`col`}>
                    <div className={`text-center ${styles.innerContent}`}>
                        <h2>For Partners:</h2>
                        <div className={styles.partnersSection}>
                            <Link href="/">
                                <a className={`${styles.partnersLabel}`}>Affiliate Program</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.partnersLink}>
                                    <svg
                                        className={`${styles.svgLogo}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 97.453 97.453"
                                    >
                                        <g>
                                            <circle
                                                className={styles.svgLogoCircle}
                                                cx="48.727"
                                                cy="48.727"
                                                r="48.727"
                                            ></circle>
                                            <path
                                                d="M103.368,173.117c0-.021,0-.036,0-.038.016-.427-.028-12.542-.039-14.54,0,0-.074-18.669.039-20.446a2.7,2.7,0,0,0,0-.4v-.019c-.011-.274.471-.528.752-.589a1.863,1.863,0,0,1,.233-.032,1.629,1.629,0,0,1,.227,0c.313.021,6.855-.005,7.675-.013a.53.53,0,0,1,.149.019,1.035,1.035,0,0,1,.6.926,1.488,1.488,0,0,1,0,.152c-.009.528,0,1.057,0,1.585q0,.385,0,.769c0,1.157,0,1.984,0,2.8,0,1.249,0,2.036-.006,2.82-.01,2.964,0,5.924.006,11.116,0,6.458-.011,6.191,0,6.392,0,0,.077,1.361.029,9.321a.731.731,0,0,1-.019.165.843.843,0,0,1-.243.408.954.954,0,0,1-.583.253.928.928,0,0,1-.155,0c-.6-.05-6.859,0-7.957,0a.577.577,0,0,1-.068,0A.755.755,0,0,1,103.368,173.117Z"
                                                transform="translate(-89.547 -106.447)"
                                                style={{ fill: "#fff" }}
                                            ></path>
                                            <path
                                                d="M164.227,173.117c0-.021,0-.036,0-.038.016-.427-.028-12.542-.039-14.54,0,0-.074-18.669.039-20.446a2.7,2.7,0,0,0,0-.4v-.019c-.011-.274.471-.528.752-.589a1.863,1.863,0,0,1,.233-.032,1.629,1.629,0,0,1,.227,0c.313.021,6.855-.005,7.675-.013a.53.53,0,0,1,.149.019,1.035,1.035,0,0,1,.6.926,1.491,1.491,0,0,1,0,.152c-.009.528,0,1.057,0,1.585q0,.385,0,.769c0,1.157,0,1.984,0,2.8,0,1.249,0,2.036-.006,2.82-.01,2.964,0,5.924.006,11.116,0,6.458-.011,6.191,0,6.392,0,0,.077,1.361.029,9.321a.731.731,0,0,1-.019.165.843.843,0,0,1-.243.408.954.954,0,0,1-.583.253.928.928,0,0,1-.155,0c-.6-.05-6.859,0-7.957,0a.577.577,0,0,1-.068,0A.755.755,0,0,1,164.227,173.117Z"
                                                transform="translate(-89.547 -106.447)"
                                                style={{ fill: "#fff" }}
                                            ></path>
                                            <path
                                                d="M115.183,163.79a.353.353,0,0,1-.04-.3c.128-.642-.057-1.315.039-1.963.1-.673.009-1.189,0-8.86,0-1.52,0-3.324,0-3.523,0-1.746,0-1.72,0-2.82,0-2.632,0-3.948,0-3.995-.009-.1.014-.2,0-.294a.019.019,0,0,1,0-.011c.014-.034.137-.011.168-.006a25.762,25.762,0,0,0,3.038,0,1.091,1.091,0,0,0,.214-.039,1.269,1.269,0,0,0,.6-.408,15.6,15.6,0,0,1,5.674-3.342c.149-.035.344-.074.389,0,.093.156-.546.694-2.779,2.507-.565.458-1.118.931-1.691,1.38a22.492,22.492,0,0,0-2.351,2.157,1.9,1.9,0,0,0-.253.33,2.584,2.584,0,0,0-.155,1.9c.394,1.69,2.338,2.914,2.623,3.09a9.043,9.043,0,0,0,5.033,1.2,11.56,11.56,0,0,0,4.528-.991,14.177,14.177,0,0,0,2.409-1.341,29.008,29.008,0,0,0,2.332-1.846c.673-.584,1.5-.967,2.215-1.5a.877.877,0,0,1,.525-.194,1.021,1.021,0,0,1,.68.35c2.194,2.214,4.081,4.527,4.081,4.527.449.551.185.185,1.71,1.924,1.371,1.563,2.24,2.607,2.9,3.381,3.1,3.666,2.963,3.14,5.052,5.713,2.593,3.194,2.549,3.687,3.789,4.489a3.074,3.074,0,0,1,1.244,1.282,2.99,2.99,0,0,1-.291,2.915,3.164,3.164,0,0,1-1.982,1.2,4.458,4.458,0,0,1-2.021-.117c-1.129-.274-1.478-.7-1.768-.505-.467.313.346,1.472-.214,2.487a2.926,2.926,0,0,1-2.215,1.146,4.122,4.122,0,0,1-2.546-.622c-.652-.424-.966-.925-1.185-.816s.056.647-.117,1.3a3.015,3.015,0,0,1-2.468,1.865,3.522,3.522,0,0,1-1.885-.272c-1.2-.506-1.686-1.455-2.04-1.282-.218.106-.058.476-.233,1.069a3.081,3.081,0,0,1-2.06,1.924,3.181,3.181,0,0,1-1.768-.039c-2.623-.734-5.356-3.211-7.753-5.246-3.446-2.927-2.917-2.155-4.722-3.828a28.572,28.572,0,0,0-4.061-3.07,5,5,0,0,0-2.273-.874C115.507,163.853,115.286,163.9,115.183,163.79Z"
                                                transform="translate(-89.547 -106.447)"
                                                style={{ fill: "#fff" }}
                                            ></path>
                                            <path
                                                d="M120.176,145.21a1.04,1.04,0,0,1,.123-.168c.807-.879,5.3-4.262,5.3-4.262,1.021-.769,2.565-1.969,3.436-2.534a11.889,11.889,0,0,0,1.733-1.255,11.728,11.728,0,0,1,3.09-1.846,8.948,8.948,0,0,1,2.526-.447,21.293,21.293,0,0,1,5.5.253,22.142,22.142,0,0,1,3.051.7,6.982,6.982,0,0,1,1.108.389,13.328,13.328,0,0,1,1.885,1.244s.36.242,1.321.8a24.93,24.93,0,0,0,5.363,2.04c3.04.9,5.518,1.425,6.069,1.606a2.722,2.722,0,0,0,.622.155c.252.029.343.045.343.045.15.014.471.036.482.1l0,.026a.8.8,0,0,1,0,.082c-.006.3.007.6,0,.9-.006.182,0,.173,0,1.227s0,1.828,0,1.973c0,12.358,0,18.538.01,18.636a.739.739,0,0,1-.062.427c-.118.234-.364.349-1.788.57-.841.13-1.185.156-1.5-.052a1.107,1.107,0,0,1-.311-.311c-2.021-2.954-4.793-5.32-7.1-8.058-1.726-2.05-1.1-1.191-4.21-4.78-4.236-4.892-6.354-7.338-6.762-7.928a8.931,8.931,0,0,0-1.166-1.373,4.745,4.745,0,0,0-.712-.609c-1.029-.6-3.032.94-4.094,1.723-3.275,2.416-4.913,3.624-6.969,4.132a7.467,7.467,0,0,1-5.907-.816,3.455,3.455,0,0,1-1.5-2.06A1.147,1.147,0,0,1,120.176,145.21Z"
                                                transform="translate(-89.547 -106.447)"
                                                style={{ fill: "#fff" }}
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FooterTopSection