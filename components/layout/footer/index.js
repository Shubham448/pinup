import FooterTopSection from "./FooterTopSection"
import styles from '../../../styles/layout/footer/Footer.module.css'
import FooterMiddleSection from "./FooterMiddleSection"
import FooterCopyrightSection from "./FooterCopyrightSection"
import FooterBottomSection from "./FooterBottomSection"
const Footer = () => {
    return (
        <footer><div className="d-lg-block d-none">
            <FooterTopSection /></div>
            <FooterMiddleSection />
            <FooterBottomSection />
            <FooterCopyrightSection />
        </footer>
    )
}

export default Footer