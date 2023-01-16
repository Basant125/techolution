import React, { useEffect, useRef } from "react";
import ContentPage from "../components/content-page/content-page";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import AOS from 'aos';
import { useOurPurposeSanityData } from "../graphql/queries/our-purpose-queries";
import '../styles/techolution-awards.css';
import backgroundBracketCocreate from "../images/Co-CreateBrackets.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Techolutionawards = ({ location }) => {

    const handleScroll = (content) => {
        document.getElementById(content).scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {

    }, [])
    return <>
        <Layout
            classNameProp="techolutionAward"
            bracketIdsProp={["co-create-bracket-image", "bracket-image"]}
            location={location}
        >

            <div class="section ">
                <img
                    id="co-create-bracket-image-award"
                    className="bracket-image bracket-image-co-create"
                    alt="bracket-img"
                    src={backgroundBracketCocreate}
                />
                <p className="section-content section-content-title awards_title">
                    AT  TECHOLUTION
                </p>
                <p className="section-content main_section_content">We are small enough to care and big enough to be trusted by some of the most recognized brands </p>
                <div className="awards_imgs">
                    <img onClick={() => handleScroll('viewOne')} className="award_img" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <img onClick={() => handleScroll('viewTwo')} className="award_img" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <img onClick={() => handleScroll('viewThree')} className="award_img" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
            </div>
            <div id="viewOne" className="section award_section fp-viewing-0" >
                <div className="award_center">
                    <div className="award_section_content">
                        <h2>Best Cloud Transformation company of the year</h2>
                        <p className="award_text">In 2022, We were named as the best cloud transformation company of the year bt CIO Review Magazine </p>
                        <div className="award_btn_box">
                            <button
                                className="award_btn"
                            >
                                <span> learn more</span>
                                <ArrowForwardIosIcon className="arrow_icon" />
                            </button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: "0px auto" }}>
                        <img className="award_img award_img_content" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>

            <div id="viewTwo" className="section award_section fp-viewing-0">
                <div className="award_center">
                    <div className="award_section_content" >
                        <h2>Best In Business - INC Magazine</h2>
                        <p className="award_text">In 2022, We were awarded as Best in Business for our entire industry sector by INC Magazine</p>
                        <div className="award_btn_box">
                            <button
                                className="award_btn"
                            >
                                <span>  learn more</span>
                                <ArrowForwardIosIcon className="arrow_icon" />
                            </button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: "0px auto" }}>
                        <img className="award_img award_img_content" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>
            <div id="viewThree" className="section award_section fp-viewing-0">
                <div className="award_center">
                    <div className="award_section_content">
                        <h2>One of the fastest-growing companies</h2>
                        <p className="award_text">In 2019, We won the prestigious award. We were awarded as one of the fastest-growing companies in america</p>
                        <div className="award_btn_box">
                            <button
                                className="award_btn"
                            >
                                <span>  learn more</span>
                                <ArrowForwardIosIcon className="arrow_icon" />
                            </button>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: "0px auto" }}>
                        <img className="award_img award_img_content" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>
            <div class="section">
                <img
                    id="co-create-bracket-image-award"
                    className="bracket-image bracket-image-co-create"
                    alt="bracket-img"
                    src={backgroundBracketCocreate}
                />
                <p className="section-content section-content-title awards_title">
                    WHAT MAKE US TRULY HAPPY?
                </p>
                <p className="section-content main_section_content">Helping our customer deliver meaningful innovation, done right at fixed price</p>
                <div className="awards_btns ">
                    <div className="award_btn_box award_trust_btn">
                        <button className="awarded_btn_one" >
                            <span>  Let's connect</span>
                        </button>
                    </div>
                    <div className="award_btn_box award_trust_btn_two">
                        <button className="awarded_btn_two" >
                            <span>success stories</span>
                        </button>
                    </div>


                </div>
            </div>
        </Layout>
    </>
};





export default Techolutionawards;
