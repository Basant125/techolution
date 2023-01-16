import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header/header"
import "../styles/styles.css";
import * as styles from "../styles/privacy-policy.module.css";
import MobileFooter from "../components/mobile-footer/mobile-footer"
import Footer from "../components/footer/footer"
import downarrow from "../images/black-nav-down -arrow.svg"

const PrivacyPolicy = ({ location }) => {
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        window.scrollTo({ top: 0});
        resizeCallback()
        function resizeCallback() {
          const width = document.documentElement.clientWidth
          if (width < 550) {
            setIsMobile(true)
          } else {
            setIsMobile(false)
          }
        }
        window.addEventListener("resize", resizeCallback)
    return () => window.removeEventListener("resize", resizeCallback)
    }, [])

  return (
    <div className="privacyPolicyPage">
        <Header location={location} />
        <div className={styles.container}>


            <h1 className={styles.title}>Techolution Website Privacy Notice Latest Update – November 2022</h1>
            <div className={styles.content}>
                Techolution Consulting LLC., and its subsidiaries, directly controlled entities and affiliated companies located across the world as may exist from time to time and their web presence via the domains techolution.com and any other domains created from time to time, (hereinafter referred to as ‘Techolution’, ‘we’, ‘us’ or ‘our) is committed to respect your privacy and choices. The statement highlights our privacy practices regarding Personal Information that we collect and store through this website and for the Personal Information that you provide us while interacting with us on our website (this “Site”) and participating in our events and campaigns.
            </div>


            <h2 className={styles.subTitle}>
                1. Collection of Personal Data and its Processing
            </h2>

                <h3 className={styles.childSubTitle}>
                    1.1. Personal Information that we process:
                </h3>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    For the purposes of this privacy notice, ‘Personal Information’ is any data which relates to an individual who may be identified from that data, or from a combination of a set of data, and other information which is in possession of Techolution.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    In general, you may browse our website without providing any Personal Information about yourself. However, we collect certain information such as: Personal Data that you provide via our website, including information you provide through forms on this Site e.g. name, email address, designation and company;
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    Information about your computer and about your visits to and use of this Site, such as your Internet Protocol (IP) address, demographics, your computers’ operating system, and browser type and information collected via cookies; Cookie related details are provided in the Cookie Policy
                </div>

                <h3 className={styles.childSubTitle}>
                    1.2. Use of your Personal Data
                </h3>

                    <div className={styles.content}>
                        1.2.1. To provide better usability, troubleshooting and Site maintenance;
                    </div>
                    <div className={styles.content}>
                        1.2.2. To understand which parts of this Site are visited and how frequently;
                    </div>
                    <div className={styles.content}>
                        1.2.3. To provide access to desirable content based on your preferences;
                    </div>
                    <div className={styles.content}>
                        1.2.4. To process job applications (more details about which are available on corresponding portals of this website);
                    </div>
                    <div className={styles.content}>
                        1.2.5. To provide information and services as requested by you;
                    </div>
                    <div className={styles.content}>
                        1.2.6. To assess queries, requirements, and process requests for products and services;
                    </div>
                    <div className={styles.content}>
                        1.2.7. To perform client communication, service, billing and administration;
                    </div>
                    <div className={styles.content}>
                        1.2.8. To conduct data analysis;
                    </div>
                    <div className={styles.content}>
                        1.2.9. To maintain leads;
                    </div>
                    <div className={styles.content}>
                        1.2.10. To run marketing or promotional campaigns;
                    </div>
                    <div className={styles.content}>
                        1.2.11. To create brand awareness;
                    </div>
                    <div className={styles.content}>
                        1.2.12. To provide better services and generate demand;
                    </div>
                    <div className={styles.content}>
                        1.2.13. To market products and services based on legitimate business interest under the applicable law; <br/> and 
                    </div>
                    <div className={styles.content}>
                        1.2.14. To conduct processing necessary to fulfill other contractual obligations for the individual.
                    </div>
                <h3 className={`${styles.childSubTitle} ${styles.mt_30}`}>
                    1.3. Legal basis for processing Personal Data
                </h3>
                    <div className={`${styles.content} ${styles.mb_30}`}>
                        1.3.1 . Communication – We may use your Personal Data to administer and provide the services you request or have expressed an interest in, to communicate
                         with you in case of customer support, to process transactions, for sending newsletters,
                          updates and promotional materials, for seeking your opinion and feedback and personalize and/or tailor any communications that we may send you.
                    </div>
                    <div className={`${styles.content} ${styles.mb_30}`}>
                        1.3.2. Advertising – We may use your Personal Data to carry out advertising and market research based on behavioral metrics,
                          geo-location data, demographic data and marketing preferences we capture. We may permit certain third-party companies
                           to help us tailor advertising based on use.
                    </div>
                    <div className={`${styles.content} ${styles.mb_30}`}>
                        1.3.3. Activity Tracking – We may use your Personal Data to track your activity on our digital platforms and personalize and
                          improve your experience. This can be used to create an individual profile for you so that we can understand and respect your
                           preferences or for profiling purposes to enable us to personalize and/or tailor any marketing communications that you may consent
                            to receive from us.
                    </div>
                    <div className={`${styles.content} ${styles.mb_30}`}>
                        1.3.4. Optimization — We may use your Personal Data to operate, improve and maintain this Site, to prevent fraud and abuse.
                    </div>
                    <div className={`${styles.content} ${styles.mb_30}`}>
                        1.3.5. Data Sharing – We may use and share your Personal Data with third parties with whom we have contractual relationship. For example, we may connect you with our empanelled repairer or broker for processing of claims.
                    </div>


            <h2 className={styles.subTitle}>
                2. Disclosure of Personal Data, Data Recipients and Transfer:
            </h2>

                <div className={`${styles.content} ${styles.mb_30}`}>
                    Techolution does not share your Personal Data with third parties for marketing purposes without seeking your prior permission.<br/> We share your Personal Data within:
                </div>
                <div>
                    <li className={`${styles.content}`}>Techolution;</li>
                    <li className={`${styles.content}`}>Business partners;</li>
                    <li className={`${styles.content}`}>Service vendors;</li>
                    <li className={`${styles.content}`}>Authorized third-party agents; or</li>
                    <li className={`${styles.content}`}>Contractors</li>
                </div>
                <div className={`${styles.content} ${styles.mb_30} ${styles.mt_20}`}>
                    We transfer Personal Data to third parties, including to countries which have different data protection standards. For transfers to Techolution group companies , we use standard contractual clauses or rely on controller-processor contracts entered into with the service providers.
                </div>
            

            <h2 className={styles.subTitle}>
                3. Use of cookies: Please refer to the Cookie Policy.
            </h2>


            <h2 className={styles.subTitle}>
                4. Access, correction, objection of your Personal Data:
            </h2>

                <div className={`${styles.content} ${styles.mb_30}`}>
                    Subject to the local legal requirements, you have the right to access, correct, delete or transfer your Personal Data that we hold, including your profile and preferences. You also have the right to object to certain processing and, where we have asked for your consent to process your Personal Data, to withdraw this consent. Where we process your Personal Data because we have a legitimate interest in doing so (as explained above), you also have a right to object to this. These rights may be limited in some situations – for example, where we can demonstrate that we have a legal requirement to process your Personal Data. Specifically, in certain circumstances, you have the following personal data protection rights:
                </div>

                <div className={`${styles.content} ${styles.mb_30}`}>
                    4.1. The right to be informed. As a data controller, we are obliged to provide clear and transparent information about
                     our data processing activities. This is provided by this privacy policy and any related communications we may send you.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    4.2. The right to access, update or delete the personal information we have on you.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    4.3. The right to be forgotten. Where no overriding legal basis or legitimate reason continues to exist for processing
                       personal data, you may request that we delete the personal data. This includes personal data that may have been unlawfully processed.
                        We will take all reasonable steps to ensure erasure.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    4.4. The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete. 
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    4.5. The right to object. You have the right to object to our processing of your Personal Data including where processing involves automated
                        decision-making.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                        4.6. The right of restriction. You can also ask us to delete or restrict how we use your personal information, but this right is determined by applicable law and may impact your access to some of our services. 4.7. The right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format. 4.8. The right to withdraw consent. You also have the right to withdraw your consent at any time where we relied on your consent to process your personal information.
                </div>

                <div className={`${styles.content} ${styles.mb_30}`}>
                    Please note that we may ask you to verify your identity before responding to such requests. You can assert your rights in the corresponding sections by contacting us at legal@techolution.com
                </div>


            <h2 className={styles.subTitle}>
                5. Security of your Personal Data
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    Techolution intends to protect your Personal Data and to maintain its accuracy, and we implement reasonable administrative, physical security, and technical controls in order to safeguard your Personal Data from unauthorised access, use and disclosure.
                </div>


            <h2 className={styles.subTitle}>
                6. Retention of your Personal Data
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                Personal Data will not be retained for a period more than necessary to fulfil the purposes outlined in this privacy notice, unless a longer retention period is required by law or for directly related to legitimate business purposes.
                </div>

        
            <h2 className={styles.subTitle}>
                7. Partner Websites
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    Techolution provides links to third-party websites and services. However, Techolution is not responsible for the privacy statements, practices, or the content of such third-party websites. 8. How to contact us.
                </div>


            <h2 className={styles.subTitle}>
                8. How to Contact Us
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    If you have any questions regarding our privacy practices or this privacy notice, please contact us at
                    <br/>
                    legal@techolution.com
                    <br/>Alternately, you can write to us at:
                    <br/>Legal Department
                    <br/>Techolution Consulting LLC
                    <br/>222 Broadway
                    <br/>19th Floor
                    <br/>New York, NY 10038
                    <br/>State: New York
                    <br/>Country: USA
                </div>


            <h2 className={styles.subTitle}>
                9. Updates to this Privacy Notice
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    Techolution may change the data privacy practices and update this privacy statement as and when the need arises, and the same will be made available on the website.
                </div>
        </div>
        <div className="section section-footer">
            {isMobile ? (
            <div>
                <MobileFooter />
            </div>
            ) : (
            <div className="section-footer-container">
                <div className={"footer-top-section"}
                >
                    <div className="black-up-arrow-container">
                        <div
                            role="button"
                            className="black-up-arrow"
                            tabIndex={0}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            onKeyUp={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <img src={downarrow} alt="up-arrow" />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            )}
        </div>
    </div>
  )
}

export const Head = () => (
  <Seo
    title="Privacy Policy"
  />
)

export default PrivacyPolicy
