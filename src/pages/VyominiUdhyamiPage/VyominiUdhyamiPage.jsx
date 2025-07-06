import styles from "./VyominiUdhyamiPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import udhyamiImage from "../../assets/VyominiUdhyamiImgs/vyomini_udhyami_img.jpg"; // adjust path to match your structure

export default function VyominiUdhyamiPage() {
    return (
        <div>
            <NavBar />
            <section className={styles.container}>
                <h2 className={styles.heading}>VYOMINI UDHYAMI CONSORTIUM</h2>

                <img
                    src={udhyamiImage}
                    alt="Vyomini Udhyami Consortium"
                    className={styles.image}
                />

                <p className={styles.description}>
                    Project launched to support entrepreneurs wherein they receive one stop solution for all their needs to start entrepreneurship journey, right from scratch.
                </p>

                <p className={styles.description}>
                    <strong>Annual membership charges for <span className={styles.highlight}>UDHYAMI CONSORTIUM</span> is Rs 500 Per annum</strong>
                </p>

                <h3 className={styles.subheading}>Benefits to Udhyami Consortium Members</h3>
                <ul className={styles.benefits}>
                    <li>Capacity Building Training.</li>
                    <li>Entity Registration and Legal Compliance Guidance.</li>
                    <li>Financial Literacy.</li>
                    <li>Digital Literacy to promote business online.</li>
                    <li>Linking with Financial institutions.</li>
                    <li>Marketing Linkages and Support.</li>
                    <li>Regular Update about Government Schemes.</li>
                    <li>Linkages with financial institutions.</li>
                </ul>

                <div className={styles.formLinkWrapper}>
                    <Button
                        text="Fill the Membership Form"
                        color="#429122"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSdjglByxGZ6h8GqThp5-e8wU1Sru0LxxiEe6r2Q323wCxOL7w/viewform?vc=0&c=0&w=1"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}
