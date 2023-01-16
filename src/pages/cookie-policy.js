import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header/header"
import "../styles/styles.css";
import * as styles from "../styles/terms-of-use.module.css";
import MobileFooter from "../components/mobile-footer/mobile-footer"
import Footer from "../components/footer/footer"
import downarrow from "../images/black-nav-down -arrow.svg"

const CookiePolicy = ({ location }) => {
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
    <div className="cookiePolicyPage">
        <Header location={location} />
        <div className={styles.container}>


            <h1 className={styles.title}>Cookie Policy</h1>
            <div className={styles.content}>
                This policy explains how Techolution Consulting LLC., and its subsidiaries, directly controlled entities and affiliated companies located across the world as may exist from time to time and their web presence via the domains techolution.com and any other domains created from time to time (hereinafter referred to as ‘Techolution’, ‘we’, ‘us’ or ‘our) use cookies and similar tracking technologies when you interact with us online through our websites    
            </div>


            <h2 className={styles.subTitle}>
                Consent for Cookies:
            </h2>
            <div className={`${styles.content} ${styles.mb_30}`}>
                We are required to obtain your consent for all non-essential cookies used on our website. You can block cookies (including essential cookies) at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block essential cookies you may not be able to access all or parts of the content/ information on our site. 
            </div>


            <h2 className={styles.subTitle}>
                Purpose of Cookies:
            </h2>

                <div className={`${styles.content} ${styles.mb_30}`}>
                    We use cookies to track your use of our website. This enables us to understand how you use the site and track any patterns with regards to how you are using our website. This helps us to develop and improve our website as well as products and / or services in response to what you might need or want.
                </div>


            <h2 className={styles.subTitle}>
                Kind of Cookies:
            </h2>

            <div className={`${styles.content} ${styles.mb_30}`}>
                Depending on the entity managing the domain from which the cookies are sent and processing the data, two types of cookie can be distinguished:    
            </div>

            <div className={`${styles.content} ${styles.mb_30}`}>
                <div style={{fontWeight: 500}}>1. Proprietary cookies:</div>
                 Sent to the user’s device from equipment or a domain managed by the publisher of the website 
                 from which the service requested by the user is provided.<br/><br/>

                 <div style={{fontWeight: 500}}>2. Third-party cookies:</div>
                 Sent to the user’s device from equipment or a domain that is not managed by the website published, but rather by another entity
                that processes the data obtained through the cookies, such as where we may have adverts on our website or use Facebook pixels
                 so that we may show you relevant content from us when you are on Facebook.<br/><br/>
                 
                  In cases where the cookies are installed from a computer or domain managed by the publisher, but the information collected through
                them is managed by a third party, they cannot be considered proprietary cookies.
                 There is also another classification based on the period of time during which cookies remain stored in the client’s browser: <br/><br/>
                 

                 <div style={{fontWeight: 500}}>a. Session cookies:</div>
                   Session Cookies are only stored on your computer during your web session and are automatically deleted when you close your browser – they usually
                    store an anonymous session ID allowing you to browse a website without having to log in to each page but they do not collect any personal
                    data from your computer<br/><br/>
                 
                  <div style={{fontWeight: 500}}> b. Persistent cookies:</div>
                  A persistent cookie is stored as a file on your computer, and it remains there when you close your web browser.
                   The cookie can be read by the website that created it when you visit that website again.<br/><br/>

                   Finally, there is another classification involving four types of cookies according to the purpose of the processing of the data obtained:<br/><br/>

                   <div style={{fontWeight: 500}}>a. Strictly necessary cookies:</div>
                    These cookies are essential to enable you to use the website effectively, such as when buying a product and / or service.
                    Without these cookies, the services available to you on our website cannot be provided.
                    These cookies do not gather information about you that could be used for marketing or remembering where you have been on the internet.<br/><br/>
                    
                    <div style={{fontWeight: 500}}>b. Performance cookies:</div>
                      These cookies enable us to monitor and improve the performance of our website. For example, they allow us to count visits,
                       identify traffic sources and see which parts of the site are most popular.<br/><br/>
                       
                    <div style={{fontWeight: 500}}>c. Functionality cookies:</div>
                        These cookies allow our website to remember choices you make and provide enhanced features. For instance, we may be able to provide
                        you with news or updates relevant to the services you use.
                        They may also be used to provide services you have requested such as viewing a video or commenting on a blog.
                        The information these cookies collect is usually anonymised.<br/><br/>

                     <div style={{fontWeight: 500}}>d. Targeting cookies:</div>  
                        These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.<br/><br/>
            </div>


            <h2 className={styles.subTitle}>
                How to disable and eliminate cookies
            </h2>

            <div className={`${styles.content} ${styles.mb_30}`}>
                You can restrict, block or delete cookies using the browser. If you disable cookies, some services can be inactive.
                Settings are different in every browser, but you can usually modify cookies configuration, through “Options” or “Tools”. 
                The “Help” functionality can also help you. On this website, users can always choose what cookies want to install in their browser.
                
                <br/><br/> If you disable cookies, some of the features that make your site more efficient, may not function properly. Cookies can be disabled at any time, even if you have previously accepted them. You can allow, block or eliminate cookies installed, through the options of your browser’s setting.
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
    title="Cookie Policy"
  />
)

export default CookiePolicy
