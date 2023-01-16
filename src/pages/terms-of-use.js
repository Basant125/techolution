import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header/header"
import "../styles/styles.css";
import * as styles from "../styles/terms-of-use.module.css";
import MobileFooter from "../components/mobile-footer/mobile-footer"
import Footer from "../components/footer/footer"
import downarrow from "../images/black-nav-down -arrow.svg"

const TermsOfUse = ({ location }) => {
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
    <div className="termsOfUsePage">
        <Header location={location} />
        <div className={styles.container}>


            <h1 className={styles.title}>Terms of use</h1>
            <div className={styles.content}>
                Techolution, LLC, a Delaware limited liability company, headquartered at 222 Broadway, 19th Floor, New York, NY 10038, USA ( “Company,” “we” or “us”), operates the website(s) located at techolution.com (the “Website”). By using the Website, you agree to comply with all the terms, conditions and notices contained or referenced herein (the “Policy”). In addition, when subscribing to or otherwise utilizing certain services from the Website, you will be subject to additional rules applicable to such services.    
            </div>


            <h2 className={styles.subTitle}>
                1. Acceptance of Terms of Use
            </h2>
            <div className={`${styles.content} ${styles.mb_30}`}>
                These Terms of Use which includes our <a href={"/privacy-policy"}>Privacy Policy</a> and <a href={"/cookie-policy"}>Cookie Policy</a> govern your use of the website. By using, visiting, or browsing the Website you accept and agree to these Terms of Use. If you do not agree to these Terms of Use, cease using the website.
            </div>


            <h2 className={styles.subTitle}>
                2. Accessing the Website
            </h2>

                <div className={`${styles.content} ${styles.mb_30}`}>
                You are responsible for any steps necessary for you to have access to the Website. We reserve the right to shutdown or change the Website, and any service or material that we provide on the Website, in our sole discretion and without notice to you. We will not be liable if, for any reason, all or any part of the Website is unavailable at any time or for any period.
                </div>


            <h2 className={styles.subTitle}>
                3. Intellectual Property Rights
            </h2>

            <div className={`${styles.content} ${styles.mb_30}`}>
                The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof) are owned by the Company, its licensors or other providers of such material, and are protected by United States and international copyright, trademark, patent,
                trade secret and other intellectual property or proprietary rights laws. No right, title or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted, are reserved by the Company. This Policy permits you to use the Website for your non-commercial use only.         
            </div>

            <div className={`${styles.content} ${styles.mb_30}`}>
                You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on the Website.
            </div>


            <div className={`${styles.content} ${styles.mb_30}`}>
                <div style={{fontWeight: 500}}>You may not:</div>
                 a. use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text; or <br/>
                 b. delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from the Website; or <br/>
                 c. access or use for any commercial purposes any part of the Website or any services or materials available through the Website. <br/>
                 <br/>
                 The Company name, the Company logo, and all related names, logos, product and service names, designs and slogans, are trademarks of the Company or its affiliates or licensors. You may not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs and slogans on the Website are the trademarks of their respective owners.
            </div>


            <h2 className={styles.subTitle}>
                4. Monitoring and Termination of Access
            </h2>

            <div className={`${styles.content} ${styles.mb_30}`}>
                <div style={{fontWeight: 500}}>We have the right to:</div>
                    a. monitor your use of the Website,<br/>
                    b. take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website, and <br/>
                    c. terminate or suspend your access to all or part of the Website.
            </div>

            <h2 className={styles.subTitle}>
                5. Your Representations and Obligations
            </h2>
                <div className={`${styles.content} ${styles.mb_20}`}>
                    You may use the Website only for lawful purposes and in accordance with this Policy.
                </div>
                <div className={`${styles.content} ${styles.mb_30}`}>
                <div style={{fontWeight: 500}}>You warrant that: </div>
                    a. you are of legal age in your jurisdiction to contract with the Company;<br/>
                    b.you will not use the Website in any way that violates any applicable federal, state, local or international law or regulation;<br/>
                    c. you will not send, knowingly receive, upload, download, use or re-use any material which does not comply with the ‘Content Standards’ (defined below);<br/>
                    d. you will not impersonate or attempt to impersonate the Company, a Company employee, another user or any other person or entity;<br/>
                    e. you will not do anything that could disable, overburden, damage, or impair the operation of the Website or interfere with any person’s use of the Website;<br/>
                    f. you will not use any robot, spider or other automatic program, device, process or means to access the Website for any unlawful purpose or in violation of this Policy;<br/>
                    g. you will not introduce any malware, including but not limited to viruses, trojan horses, worms, logic bom rootkits or other material which is malicious or technologically harmful;<br/>
                    h. you will not access or attempt to access data or files on the Website that you are not expressly authorized to access, and <br/>
                    i. you will not co-brand or frame the Website or hyper-link to it without the express prior written permission of an authorized representative of the Company.
                </div>

            <h2 className={styles.subTitle}>
                6. Copyright Infringement
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    We take claims of copyright infringement seriously.
                    We will respond to notices of alleged copyright infringement where appropriate.
                    If any materials accessible on or from the Website infringe your copyright, you may request removal of those materials (or access thereto)
                    from the Website by submitting DMCA Notice to our Copyright Agent (designated below). 
                    Please provide the DMCA Notice to our agent listed below: <br/>
                    Techolution Consulting LLC <br/>
                    222 Broadway, 19th Floor, <br/>
                    New York, NY 10038 <br/>
                    Tel: __________<br/>
                    Email: legal@techolution.com <br/><br/>

                    In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512) (“DMCA”), the DMCA Notice must include substantially the following: <br/>
                    1. Your physical or electronic signature. <br/>
                    2. Identification of the copyrighted work you believe to have been infringed or, if the claim involves multiple works on the Website, 
                    a representative list of such works. <br/>
                    3. Identification of the material you believe to be infringing, in a sufficiently precise manner to allow us to locate that material. <br/>
                    4. Adequate information by which we can contact you (including your name, postal address, telephone number and, if available, e-mail address). <br/>
                    5. A statement that you have a good faith belief that use of the copyrighted material is not authorized by the copyright owner, its agent or the law. <br/>
                    6. A statement that informs the company that the information in the written notice is accurate. <br/>
                    7. A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.
                    <br/><br/>
                     If you fail to comply with all of the requirements of Section 512(c)(3) of the DMCA, your DMCA Notice may not be effective and may be disregarded in our sole discretion. If you knowingly misrepresent that material or activity on the Website is infringing your copyright, you may be legally liable for damages (including costs and legal fees).
                </div>

        
            <h2 className={styles.subTitle}>
                7. Reliance on Information
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    The information presented on or through the Website is made available solely for general information purposes. The information presented on or through the Website is subjective and is opinion, and the Company makes no representations or warranties whatsoever regarding the accuracy of the information. We do not make any statements regarding the accuracy, completeness or usefulness of this information. The advice and strategies contained herein may not be suitable for every situation. 
                    <br/><br/>Any reliance you place on such information is strictly at your own risk, and under no circumstances shall the Company be liable for any loss suffered as a result of such reliance. The Website includes content provided by third parties, including materials provided by other users and third-party licensors. We are not responsible, or liable to you or any third-party, for the content or accuracy of materials provided by any third parties.    
                </div>


            <h2 className={styles.subTitle}>
                8. Privacy
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    All information we collect on the Website is subject to our Techolution Website Privacy Notice. By using the Website, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.
                </div>


            <h2 className={styles.subTitle}>
                9. Subscriptions and other Terms and Conditions
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    In addition to this Policy and the Privacy Policy (together, the “Website Policies”), all subscriptions to the Company’s products and services, are governed by any applicable terms of service, or other conditions, depending on the type of product, service or subscription you are using.
                </div>

            <h2 className={styles.subTitle}>
                10. Links to Third Party Sites
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. We have no control over the contents of such sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any third-party websites linked to the Website, you do so entirely at your own risk and subject to the terms and conditions of use for such third-party websites.
                </div>

            <h2 className={styles.subTitle}>
                11. Links to the Website and Social Media Features
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    You may link to our homepage, but you may not establish a link in such a way as to suggest any form of association,
                    approval or endorsement on our part (unless you have received the express written consent of the Company’s authorized approving authority).<br/><br/>
                    
                    <div style={{fontWeight: 500}}>The Website may provide certain social media features that enable you to:</div>
                     a. Link from your own or certain third-party websites to certain content on the Website<br/>
                     b. Send e-mails or other communications with certain content or links to specific content on the Website<br/>
                     c. Cause limited portions of content on the Website to be displayed or appear to be displayed on your own or certain third-party websites 
                     <br/><br/>
                     
                     You may use these features solely as they are provided by the Company, and solely with respect to the content they are displayed in connection with,
                    and otherwise in accordance with any additional restrictions we provide with respect to such features.<br/><br/>
                      
                    <div style={{fontWeight: 500}}>Subject to the foregoing, you must not:</div>
                    a. Establish a link from any website that is not owned by you <br/>
                    b. Cause the Website or portions of them to be displayed, or appear to be displayed by, for example, framing, deep linking or in-line linking, on any other site <br/>
                    c. Link to any part of the Website other than the homepage <br/>
                    d. Otherwise take any action with respect to the materials on the Website that is inconsistent with any other provision of this Policy<br/><br/>
                    
                    The website from which you are linking, or on which you make certain content accessible, must comply in all respects with any content standards determined by the Company in its sole discretion. You agree to cooperate with us in causing any unauthorized framing or linking to cease immediately. We reserve the right to withdraw linking permission without notice. We may disable all or any social media features and any links at any time without notice at our sole discretion.
                 </div>

            <h2 className={styles.subTitle}>
                12. Disclaimers
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    YOUR USE OF THE WEBSITE, OR ITEMS OR INFORMATION OBTAINED THROUGH THE WEBSITE, IS AT YOUR OWN RISK. THE WEBSITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY PROMISES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY PROMISE, WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY PROMISES, REPRESENTS OR WARRANTS THAT THE WEBSITE OR ITEMS OR INFORMATION OBTAINED THROUGH THE WEBSITE OR ANY PORTION THEREOF WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE WEBSITE OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR PARTICULAR PURPOSE.
                </div>

            <h2 className={styles.subTitle}>
                13. Limitation of Liability
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY, ITS MANAGERS, MEMBERS, LICENSORS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY SPECIAL, PUNITIVE, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOSS OF USE, LOSS OF DATA, OR LOSS OF PROFITS, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND ON ANY THEORY OF LIABILITY, ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE WEBSITE OR OF ANY WEBSITE REFERENCED OR LINKED TO FROM OUR WEBSITE. YOU WILL BE RESPONSIBLE FOR ALL CLAIMS AND DAMAGES RESULTING FROM THE MISUSE OF THE WEBSITE BY YOU.    
                </div>

            <h2 className={styles.subTitle}>
                14. Changes
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    We reserve the right, in our sole discretion, to change the terms of this Policy at any time. Any changes are effective immediately upon posting to the Website. Your continued use of the Website constitutes your agreement to all such terms and conditions
                </div>

            <h2 className={styles.subTitle}>
                15. Equitable Relief
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    You acknowledge that a breach of any proprietary rights provision of this Policy may cause the Company irreparable damage, for which the award of damages would not be adequate compensation. Consequently, the Company may institute an action to enjoin you from any and all acts in violation of those provisions, which remedy shall be cumulative and not exclusive, and the Company may seek the entry of an injunction enjoining any breach or threatened breach of those provisions, in addition to any other relief to which the Company may be entitled at law or in equity.    
                </div>

            <h2 className={styles.subTitle}>
                16. Waiver and Amendment
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    No waiver of any right, obligation or default by the Company shall be implied, but must be in writing, signed by an authorized agent of the Company. If the Company fails to insist upon strict performance of your obligations under any of these terms and conditions, or if the Company fails to exercise any of the rights or remedies to which it is entitled under this Policy, this will not constitute a waiver of such rights or remedies and will not relieve you from compliance with such obligations. No waiver by the Company of any default will constitute a waiver of any subsequent default, and no waiver by the Company of any of these terms and conditions will be effective unless it is expressly stated to be a waiver and is communicated to you in writing.    
                </div>

            <h2 className={styles.subTitle}>
                17. Severability
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    If any provision of this Policy is held by a court of competent jurisdiction to be contrary to law, such provision shall be changed and interpreted so as to best accomplish the objectives of the original provision to the fullest extent allowed by law and the remaining provisions of this Policy will remain in full force and effect.   
                </div>

            <h2 className={styles.subTitle}>
                18. Governing Law and Venue
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    This Policy shall be construed and governed by the laws of the State of New York, without regard to its principles of conflict of laws. You agree that any legal action or proceeding in connection with the Website, its contents, or this Policy shall be brought in the Courts of the State of New York, and you expressly waive any objection to the jurisdiction or venue of such Courts.    
                </div>

            <h2 className={styles.subTitle}>
                19. Geographic Restrictions
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    Software, functionality, and/or features (collectively, “Downloadable Content”), that may be available on or through the Website from time-to-time
                    , may be subject to United States Export Controls.<br/><br/>

                    <div style={{fontWeight: 500}}>No Downloadable Content from the Website may be downloaded or exported;</div> 
                    
                    a. Into (or to a resident of) Cuba, North Korea, Russia, Iran, Sudan, Syria, or any other country which the United States has embargoed goods
                     or otherwise restricted the exportation of software; or<br/> 
                    b. By anyone on the United States Treasury Department's list of Specially Designated Nationals or theUnited States Commerce Department's
                     Table of Deny Orders.<br/><br/>
                     
                    By downloading or using any Downloadable Content, you represent and warrant that you are not located in,
                      under the control of, or a national or resident of any such country or on any such list. Although the Website may be accessible worldwide, we make no representation that the content on the Website is appropriate or available for use in locations outside the United States. Accessing the Website or its content from territories where such content is illegal is prohibited. Those who choose to access the Website from other locations do so at their own initiative and are responsible for compliance with local laws. Any offer for any product, service, and/or information made in connection with the Website or its Content is void where prohibited.
                </div>

            <h2 className={styles.subTitle}>
                20. Complete Understanding
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    This Policy, together with the documents expressly referred to herein, constitutes the sole and entire agreement between you and the Company with respect to the Website and supersedes all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the Website. No representation, inducement, promise or agreement, oral or written has been made by the Company or anyone acting on its behalf which is not contained herein.    
                </div>

            <h2 className={styles.subTitle}>
                21. Future Business Transactions
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    As we continue to develop our business, we might undergo a change of ownership such as a merger and/or a sale of all or substantially all our stock or assets. In such transactions, user information generally is one of the transferred business assets, and by submitting any data or contributions (collectively, “Data”) to us, you agree that such Data may be transferred to such parties in these circumstances.    
                </div>

            <h2 className={styles.subTitle}>
                22. Your Comments and Concerns
            </h2>
                <div className={`${styles.content} ${styles.mb_30}`}>
                    The Website is operated by Techolution Consulting LLC, a Delaware limited liability company,
                    headquartered at 222 Broadway, 19th Floor, New York, NY 10038, USA . If you have any questions,
                    please contact us via email at legal@techolution.com or mail us at the above address.
                    
                    <br/><br/><br/>
                    LAST MODIFIED: NOVEMBER, 2022    
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
    title="Terms of Use"
  />
)

export default TermsOfUse
