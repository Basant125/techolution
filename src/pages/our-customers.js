import * as React from "react"
import { useRef, useEffect } from "react"
import ContentPage from "../components/content-page/content-page"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useOurCustomersSanityData } from "../graphql/queries/our-customers-queries"
import "../styles/our-customers.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { navigate } from "gatsby"

gsap.registerPlugin(ScrollTrigger)

const goToSuccessStories = (customer) => {
  let customerName = customer.customerName.split(" ").join("_")
  navigate(`/success-stories?project=${customerName}`)
  // if(projectSlide){
  //   const slides = projectSlide.split("-");
  //   const slide = slides[slides.length-1]
  //   window.history.replaceState(null, null, `?projectList=${slide}`);
  // }
  // else{
  //   window.history.replaceState(null, null, '?projectList=0');
  // }
  // window.fullpage_api.moveTo(slideNumber)
}
const OurCustomers = ({ location }) => {
  const { sanityPage, allSanityPage } = useOurCustomersSanityData()
  const iconsRef = useRef(null)
  const highlightedProjectRef = useRef(null)
  const highlightedProjectRefMob = useRef(null)

  const revealRefs = useRef([])
  revealRefs.current = []
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  var sectionIndex = 0
  const onContactUsBtnClick = () => {
    document.getElementById("heartElement").click()
  }

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 3, repeatDelay: 8 })
    // revealRefs.current.forEach((el, index) => {
    //   const bound = el.parentNode.querySelector("img").getBoundingClientRect()
    //   console.log(el, bound)
    //   console.log("Left Space:", bound.x)
    //   console.log("Top Space:", bound.y)
    //   console.log(
    //     "Bottom Space:",
    //     window.innerHeight - (bound.y + bound.height)
    //   )
    //   console.log("Right Space:", window.innerWidth - (bound.x + bound.width))
    //   tl.to(el.parentNode.querySelector("img"), {
    //     opacity: 0.6,
    //     // filter: "grayscale(0%)",
    //     duration: 0.5,
    //     ease: "sine.in",
    //   })
    //     .fromTo(
    //       el,
    //       {
    //         autoAlpha: 0,
    //         scale: 0,
    //       },
    //       {
    //         duration: 1,
    //         autoAlpha: 1,
    //         ease: "sine.in",
    //         scale: 1,
    //       }
    //     )
    //     .to(el, {
    //       autoAlpha: 0,
    //       scale: 0,
    //       delay: 5,
    //       ease: "sine.out",
    //     })
    //     .to(el.parentNode.querySelector("img"), {
    //       opacity: 0.1,
    //       filter: "grayscale(100%)",
    //     })
    // })
  }, [])

  const fadedClassName = "success-stories-logo-faded"

  const [selectedLogo, setSelectedLogo] = React.useState("")
  const [vertical, setVertical] = React.useState([])
  // const [hasClickedNext, setHasClickedNext] = React.useState(false)
  const [initialWorkingIdx, setInitialWorkingIdx] = React.useState("")
  const [showCase, setShowCase] = React.useState(false)

  React.useEffect(() => {
    if (sanityPage?.slide[0]?.vertical) {
      // console.log(sanityPage?.slide[0]?.vertical)
      setVertical(sanityPage?.slide[0]?.vertical)
    }
  }, [sanityPage])

  React.useEffect(() => {
    // console.log("selectedLogo", selectedLogo)
  }, [selectedLogo])

  React.useEffect(() => {
    if (vertical?.length > 0) {
      let idx = ""

      let shouldBreakout = false
      for (let i = 0; i < vertical.length; i++) {
        for (let j = 0; j < vertical[i].highlightedCustomers.length; j++) {
          if (
            vertical[i]?.highlightedCustomers[j].highlightedProjects?.length
          ) {
            idx = `${i}-${j}`
            shouldBreakout = true
            break
          }
        }
        if (shouldBreakout) {
          break
        }
      }
      setInitialWorkingIdx(idx)
      const [pIdx, cIdx] = idx.split("-");
      if(window.location.hash === '#success-stories') {
        // goToSuccessStories(3);
      } else {
        // Animation on load
        // Icons fading out
        // const tl = gsap.timeline({});
        // tl
        //   .fromTo('.vertical__customer_mobile img, .vertical__customer img, .vertical__title_mobile', {
        //     autoAlpha: 0,
        //     duration: 3,
        //     delay: 0.3,
        //   }, {
        //     autoAlpha: 0
        //   });
        // tl
        //   .to('.vertical__customer_mobile img, .vertical__customer img, .vertical__title_mobile', {
        //     autoAlpha: 0.8,
        //     duration: 3,
        //     delay: 1,
        //     onComplete: () => {
        //       setTimeout(() => onSelect(+pIdx, +cIdx), 3000);
        //     }
        //   })
        setTimeout(() => showCaseCustomers(), 1000);
      }
    }
  }, [vertical])

  useEffect(() => {
    const arrow = document.getElementById("downArrowBtn");
    const clickEventListener = () => {
      if(document.body.classList.contains("fp-viewing-0") || document.body.classList.contains("fp-viewing-1")){
          onSelect(null, null, window.innerWidth < 771)
      } 
    }
    if(arrow){
      arrow.addEventListener("click", clickEventListener)
    }
    return () => {
      if(arrow){
        arrow.removeEventListener("click", clickEventListener)
      }
    }
  }, [vertical])

  const showCaseCustomers = () => {
    setShowCase(true)
    const brandsWithHighlightedProjects = []
    vertical.forEach((row, parentIndex) =>
      row?.highlightedCustomers?.forEach((customer, childIndex) => {
        if (customer?.highlightedProjects?.length) {
          const idx = `${parentIndex}-${childIndex}`
          brandsWithHighlightedProjects.push(idx)
        }
      })
    )
    const requiredClass = window.outerWidth < 771
      ? ".vertical__customer_mobile"
      : ".vertical__customer";

      Array.from(document.querySelectorAll(requiredClass)).forEach(
        userElement => {
          // const elementPosition = userElement.getAttribute("data-custom")
          // if(brandsWithHighlightedProjects.includes(elementPosition)){
          //   gsap.to(userElement.querySelector('img'), {
          //     autoAlpha: 0.8,
          //     duration: 1
          //   });
          //   userElement.classList.add('vertical__customer-logo--clickable');
          // }
            gsap.to(userElement.querySelector('img'), {
              autoAlpha: 0.13,
              duration: 0.5
            });
        }
      )
      setTimeout(()=>{
        Array.from(document.querySelectorAll(requiredClass)).forEach(
          userElement => {
            const elementPosition = userElement.getAttribute("data-custom")
            if(brandsWithHighlightedProjects.includes(elementPosition)){
              gsap.to(userElement.querySelector('img'), {
                autoAlpha: 0.8,
                duration: 1
              });
              userElement.classList.add('vertical__customer-logo--clickable');
            }
          })
        // brandsWithHighlightedProjects.forEach((project)=>{
        //   const element = document.querySelector(`[data-custom="${project}"]`)
        //   gsap.to(element.querySelector('img'), {
        //     autoAlpha: 0.8,
        //     duration: 1
        //   });
        //   element.classList.add('vertical__customer-logo--clickable');
        // })
      }, 1500)
  }

  const onSelect = (parentIndex, childIndex, flagMobile = false) => {
    // move to next page after row 3 in mobile
    if (flagMobile && parentIndex > 2 && typeof window !== "undefined") {
      // full pae move to next page
      window.fullpage_api.moveTo(2)
    }
    const selectedPosition = `${parentIndex}-${childIndex}`
    const requiredClass =
      window.outerWidth < 771
        ? ".vertical__customer_mobile"
        : ".vertical__customer"

    if (parentIndex == null && childIndex == null) {
      // console.log('last');
      // gsap.to(`${requiredClass} > img`, {
      //   opacity: 0.8,
      //   duration: 2
      // });

      // gsap.to('.vertical__title_mobile', {
      //   autoAlpha: 1,
      //   duration: 2
      // });
      showCaseCustomers()
      // Array.from(document.querySelectorAll(requiredClass)).forEach(
      //   userElement => {
      //     if(!userElement.classList.contains('success-stories-logo-faded')){
      //       userElement.classList.add('success-stories-logo-faded');
      //     }
      //   });
    } else {
      Array.from(document.querySelectorAll(requiredClass)).forEach(
        userElement => {
          const elementPosition = userElement.getAttribute("data-custom")
          if (selectedPosition === elementPosition) {
            gsap.to(userElement.querySelector("img"), {
              autoAlpha: 0.8,
              duration: 1,
            })
            gsap.to(".vertical__title_mobile", {
              autoAlpha: 0.1,
              duration: 0.2
            });
          } else if (
            selectedPosition !== elementPosition
          ) {            
            gsap.to(userElement.querySelector('img'), {
              autoAlpha: 0.13,
              duration: 0.5
            });
          }
        }
      )
    }

    setSelectedLogo(selectedPosition)
    setTimeout(() => {
      const tl1 = gsap.timeline({});
      tl1.fromTo(window.outerWidth < 771 ? '.highlighted-project-mob': highlightedProjectRef.current,
        {autoAlpha: 0},
        {autoAlpha: 0, duration: 1}
      );
      tl1.to(window.outerWidth < 771 ? '.highlighted-project-mob': highlightedProjectRef.current,
      {autoAlpha: 1, duration: 2}
    );
    }, 0)
  }

  const onClickedNext = (parentIndex, childIndex, flagNextClick) => {
    const selectedPosition = `${parentIndex}-${childIndex}`

    const tempArr = []
    vertical.forEach((row, parentIndex) =>
      row?.highlightedCustomers?.forEach((customer, childIndex) => {
        if (customer?.highlightedProjects?.length) {
          const idx = `${parentIndex}-${childIndex}`
          tempArr.push(idx)
        }
      })
    )
    const lastLogo = tempArr[tempArr?.length - 1]

    const initialLogoXY = initialWorkingIdx?.split("-")
    if (lastLogo === selectedPosition) {
      // close if last logo
      onSelect(null, null, flagNextClick)
      // onSelect(+initialLogoXY[0], +initialLogoXY[1], flagNextClick)
    } else {
      const sIdx = tempArr.findIndex(pos => pos === selectedPosition)
      const newTemp = tempArr.slice(sIdx + 1)[0]
      const newTempXY = newTemp.split("-")
      onSelect(+newTempXY[0], +newTempXY[1], flagNextClick)
    }
    // console.log("dimensions", lastLogo, selectedPosition)
    // const idx = selectedPosition === vertical ? initialWorkingIdx : index + 1
    // onSelect(idx, testimonial[idx])
    // setHasClickedNext(true)
  }

  return (
    <div>
      <Layout classNameProp="our-customers-page" location={location}>
        {/* Our Customers Slide */}
        <div className={`section section-ourpurpose-0`}>
          {sanityPage.slide
            .filter(value => Object.keys(value).length !== 0)
            .map((slide, index) => (
              <div key={index}>
                <div className="our-customers-desktop">
                  <h1 className="our-customers-page__title">
                    The brands that trust us with
                  </h1>
                  <h2 className="our-customers-page__subtitle">
                    <span className="our-customers-page__subtitle--red">
                      INNOVATION
                    </span>{" "}
                    &#123; Enterprise Cloud | Product Innovation | Real World AI
                    &#125;
                  </h2>
                  {showCase && (
                    <h3 className="our-customers-page__showCasing">
                      {" "}
                      Showcasing...
                    </h3>
                  )}
                  <div className="t-our-customers">
                    <div className="vertical__titles">
                      {slide.vertical.map((vertical, index2) => (
                        <div
                          key={"vertical-title" + index2}
                          className="vertical__title"
                        >
                          {vertical.title}
                        </div>
                      ))}
                    </div>
                    <div className="vertical__customers" ref={iconsRef}>
                      {slide.vertical
                        .filter(value => Object.keys(value).length !== 0)
                        .map((vertical, index3) => (
                          <div
                            key={"vertical-customer" + index3}
                            className="t-our-customers__vertical vertical"
                          >
                            {vertical.highlightedCustomers.map(
                              (customer, index4) => (
                                <div
                                  key={customer.customerName + index4}
                                  className="vertical__customer"
                                  data-custom={`${index3}-${index4}`}
                                >
                                  <img
                                    onClick={() =>
                                      customer.highlightedProjects.length &&
                                      onSelect(index3, index4)
                                    }
                                    className="vertical__customer-logo"
                                    src={customer.customerLogo.asset.url}
                                    alt={customer.customerName}
                                    width={
                                      customer.customerLogo.asset.width / 2.5
                                    }
                                    height={
                                      customer.customerLogo.asset.height / 2.5
                                    }
                                  />
                                  {selectedLogo?.length > 0 &&
                                    selectedLogo === `${index3}-${index4}` && (
                                      <>
                                        {customer.highlightedProjects.filter(
                                          Boolean
                                        ).length &&
                                        customer.highlightedProjects[0]
                                          .projectHighlightImage ? (
                                          <div
                                            className={`highlighted-project highlighted-project-ready highlighted-project-${index3}-${index4}`}
                                            data-row={index3 + 1}
                                            data-column={index4 + 1}
                                            ref={highlightedProjectRef}
                                          >
                                            <div
                                              className="highlighted-project__crossIcon"
                                              onClick={() =>
                                                onSelect(null, null, false)
                                              }
                                            ></div>
                                            <div>
                                            <img
                                              className="highlighted-project__image for-desktop"
                                              src={
                                                customer.highlightedProjects[0]
                                                  .projectHighlightImage.asset
                                                  .url
                                              }
                                              alt={
                                                customer.highlightedProjects[0]
                                                  .projectName
                                              }
                                              // width={
                                              //   customer.highlightedProjects[0]
                                              //     .projectHighlightImage.asset
                                              //     .width / 2.5
                                              // }
                                              // height={
                                              //   customer.highlightedProjects[0]
                                              //     .projectHighlightImage.asset
                                              //     .height / 2.5
                                              // }
                                            /></div>
                                            <div className="highlighted-project-content">
                                              <div className="highlighted-project-title">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectTitle
                                                }
                                              </div>
                                              <div className="highlighted-project-description">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectDescription
                                                }
                                              </div>
                                              <div className="highlighted-projects__action-container-responsive">
                                              <button
                                                className="dialog-next-btn dialog-next-btn-learnmore"
                                                onClick={() =>
                                                  goToSuccessStories(customer)
                                                }
                                              >
                                                Learn More
                                              </button>
                                              <button
                                                className="dialog-next-btn dialog-next-btn-next"
                                                onClick={() =>
                                                  onClickedNext(
                                                    index3,
                                                    index4,
                                                    false
                                                  )
                                                }
                                              >
                                                Next<span></span>
                                              </button>
                                            </div>
                                            </div>
                                            <div className="highlighted-projects__action-container for-desktop">
                                              <button
                                                className="dialog-next-btn dialog-next-btn-learnmore"
                                                onClick={() =>
                                                  goToSuccessStories(customer)
                                                }
                                              >
                                                Learn More
                                              </button>
                                              <button
                                                className="dialog-next-btn dialog-next-btn-next"
                                                onClick={() =>
                                                  onClickedNext(
                                                    index3,
                                                    index4,
                                                    false
                                                  )
                                                }
                                              >
                                                Next<span></span>
                                              </button>
                                            </div>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </>
                                    )}
                                </div>
                              )
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* <div class="highlighted-projects">
            {
                [{title: 'Relias'}, {title: 'WaWa'}, {title: 'Thmbl'}].map(({title}) => (
                    <div className="highlighted-project" key={title} ref={addToRefs}>
                        <h2>{title}</h2>
                    </div>
                ))
            }
          </div> */}
                </div>
                <div className="our-customers-mobile">
                  <h1
                    key={index + "-mobile-title"}
                    className="our-customers-page__title title_mobile"
                  >
                    THE BRANDS THAT TRUST US WITH
                  </h1>
                  <h2 className="our-customers-page__subtitle our-customers-page__subtitle--mobile">
                    <span className="our-customers-page__subtitle--red">
                      INNOVATION
                    </span>{" "}
                    &#123; Enterprise Cloud | Product Innovation | AI &#125;
                  </h2>
                  {showCase && (
                    <h3 className="our-customers-page__showCasing">
                      {" "}
                      Showcasing...
                    </h3>
                  )}
                  <div
                    className="t-our-customers-mobile"
                    key={index + "-mobile-title-container"}
                  >
                    <div
                      className="vertical__titles"
                      key={index + "-mobile-vertical-title"}
                    >
                      {slide.vertical.map(
                        (vertical, index2) =>
                          index2 <= 2 && (
                            <div key={index2}>
                              <div
                                key={"vertical-title-mobile" + index2}
                                className="vertical__title_mobile"
                              >
                                {vertical.title}
                              </div>
                              <div
                                key={"vertical-customer-mobile" + index2}
                                className="t-our-customers__vertical_mobile vertical"
                              >
                                {vertical.highlightedCustomers.map(
                                  (customer, index4) => (
                                    <div
                                      key={
                                        customer.customerName +
                                        index4 +
                                        "mobile"
                                      }
                                      data-custom={`${index2}-${index4}`}
                                      className="vertical__customer_mobile"
                                    >
                                      <img
                                        onClick={() =>
                                          customer.highlightedProjects.length &&
                                          onSelect(index2, index4, true)
                                        }
                                        key={index4 + "-mobile-image"}
                                        className="vertical__customer-logo vertical__customer-logo_mobile"
                                        src={customer.customerLogo.asset.url}
                                        alt={customer.customerName}
                                        width={
                                          customer.customerLogo.asset.width /
                                          2.5
                                        }
                                        height={
                                          customer.customerLogo.asset.height /
                                          2.5
                                        }
                                      />
                                      {selectedLogo?.length > 0 &&
                                        selectedLogo ===
                                          `${index2}-${index4}` && (
                                          <div>
                                            {customer.highlightedProjects.filter(
                                              Boolean
                                            ).length &&
                                            customer.highlightedProjects[0]
                                              .projectHighlightImage ? (
                                              <div
                                                className={`highlighted-project-mob`}
                                                // style={{
                                                //   marginLeft: "-20rem",
                                                //   marginTop: "-10rem",
                                                //   width: "40rem",
                                                //   position: "absolute",
                                                //   zIndex: "99",
                                                // }}
                                                data-row={index2 + 1}
                                                data-column={index4 + 1}
                                                ref={highlightedProjectRefMob}
                                              >
                                                <div
                                                  className="highlighted-project__crossIcon"
                                                  onClick={() =>
                                                    onSelect(null, null, true)
                                                  }
                                                ></div>
                                                <img
                                                  className="highlighted-project__image"
                                                  src={
                                                    customer
                                                      .highlightedProjects[0]
                                                      .projectHighlightImage
                                                      .asset.url
                                                  }
                                                  alt={
                                                    customer
                                                      .highlightedProjects[0]
                                                      .projectName
                                                  }
                                                  // width={
                                                  //   customer.highlightedProjects[0]
                                                  //     .projectHighlightImage.asset
                                                  //     .width / 2.5
                                                  // }
                                                  // height={
                                                  //   customer.highlightedProjects[0]
                                                  //     .projectHighlightImage.asset
                                                  //     .height / 2.5
                                                  // }
                                                />
                                                <div className="highlighted-project-content">
                                              <div className="highlighted-project-title">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectTitle
                                                }
                                              </div>
                                              <div className="highlighted-project-description">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectDescription
                                                }
                                              </div>
                                            </div>
                                            <div className="highlighted-projects__action-container">
                                                <button
                                                  className="dialog-next-btn dialog-next-btn-learnmore"
                                                  onClick={() =>
                                                    goToSuccessStories(customer)
                                                  }
                                                >
                                                  Learn More
                                                </button>
                                                <button
                                                  className="dialog-next-btn dialog-next-btn-next"
                                                  onClick={() =>
                                                    onClickedNext(
                                                      index2,
                                                      index4,
                                                      true
                                                    )
                                                  }
                                                >
                                                  Next<span></span>
                                                </button>
                                                </div>
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* slide 1 Mobile */}

        {/* end of slide 1 Mobile */}
        {/* slide 1 Mobile */}
        {sanityPage.slide
          .filter(value => Object.keys(value).length !== 0)
          .map((slide, index) => (
            <div
              key={index + slide.length + "section2"}
              className={`section only-mobile section-ourpurpose-0`}
            >
              <div className="our-customers-mobile">
                <h1
                  key={index + "-mobile-title2"}
                  className="our-customers-page__title title_mobile"
                >
                  THE BRANDS THAT TRUST US WITH
                </h1>
                <h2 className="our-customers-page__subtitle our-customers-page__subtitle--mobile">
                  <span className="our-customers-page__subtitle--red">
                    INNOVATION
                  </span>{" "}
                  &#123; Enterprise Cloud | Product Innovation | AI &#125;
                </h2>
                {showCase && (
                  <h3 className="our-customers-page__showCasing">
                    {" "}
                    Showcasing...
                  </h3>
                )}
                <div
                  className="t-our-customers-mobile"
                  key={index + "-mobile-title-container2"}
                >
                  <div
                    className="vertical__titles"
                    key={index + "-mobile-vertical-title"}
                  >
                    {slide.vertical.map(
                      (vertical, index2) =>
                        index2 > 2 && (
                          <div key={index2}>
                            <div
                              key={"vertical-title-mobile2" + index2}
                              className="vertical__title_mobile"
                            >
                              {vertical.title}
                            </div>
                            <div
                              key={"vertical-customer-mobile2" + index2}
                              className="t-our-customers__vertical_mobile vertical"
                            >
                              {vertical.highlightedCustomers.map(
                                (customer, index4) => (
                                  <div
                                    key={
                                      customer.customerName + index4 + "mobile2"
                                    }
                                    className="vertical__customer_mobile"
                                    data-custom={`${index2}-${index4}`}
                                  >
                                    <img
                                      key={index4 + "-mobile-image2"}
                                      className="vertical__customer-logo vertical__customer-logo_mobile"
                                      src={customer.customerLogo.asset.url}
                                      alt={customer.customerName}
                                      onClick={() =>
                                        customer.highlightedProjects.length &&
                                        onSelect(index2, index4, true)
                                      }
                                      width={
                                        customer.customerLogo.asset.width / 2.5
                                      }
                                      height={
                                        customer.customerLogo.asset.height / 2.5
                                      }
                                    />
                                    {selectedLogo?.length > 0 &&
                                      selectedLogo ===
                                        `${index2}-${index4}` && (
                                        <div>
                                          {customer.highlightedProjects.filter(
                                            Boolean
                                          ).length &&
                                          customer.highlightedProjects[0]
                                            .projectHighlightImage ? (
                                            <div
                                              className={`highlighted-project-mob`}
                                              // style={{
                                              //   marginLeft: "-20rem",
                                              //   marginTop: "-10rem",
                                              //   width: "40rem",
                                              //   position: "absolute",
                                              //   zIndex: "99",
                                              // }}
                                              data-row={index2 + 1}
                                              data-column={index4 + 1}
                                              ref={highlightedProjectRefMob}
                                            >
                                              <div
                                                className="highlighted-project__crossIcon"
                                                onClick={() =>
                                                  onSelect(null, null, true)
                                                }
                                              ></div>
                                              <img
                                                className="highlighted-project__image"
                                                src={
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectHighlightImage.asset
                                                    .url
                                                }
                                                alt={
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectName
                                                }
                                                // width={
                                                //   customer.highlightedProjects[0]
                                                //     .projectHighlightImage.asset
                                                //     .width / 2.5
                                                // }
                                                // height={
                                                //   customer.highlightedProjects[0]
                                                //     .projectHighlightImage.asset
                                                //     .height / 2.5
                                                // }
                                              />
                                              <div className="highlighted-project-content">
                                              <div className="highlighted-project-title">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectTitle
                                                }
                                              </div>
                                              <div className="highlighted-project-description">
                                                {
                                                  customer
                                                    .highlightedProjects[0]
                                                    .projectDescription
                                                }
                                              </div>
                                            </div>
                                            <div className="highlighted-projects__action-container">
                                              <button
                                                className="dialog-next-btn dialog-next-btn-learnmore"
                                                onClick={() =>
                                                  goToSuccessStories(customer)
                                                }
                                              >
                                                Learn More
                                              </button>
                                              <button
                                                className="dialog-next-btn dialog-next-btn-next"
                                                onClick={() =>
                                                  onClickedNext(
                                                    index2,
                                                    index4,
                                                    true
                                                  )
                                                }
                                              >
                                                Next<span></span>
                                              </button>
                                              </div>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Normal Slides */}
        {allSanityPage?.nodes[0]?.slide
          .filter(value => Object.keys(value).length !== 0)
          ?.map((pagesValue, index) => (
            <div
              key={index}
              className={`section section-ourcustomers-normal-slides-${index}`}
            >
              <ContentPage
                pagesValue={pagesValue}
                isContactUsBtn={pagesValue?.cta[0]?.cta_name === "CONTACT US"}
              />
            </div>
          ))}
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Our Customers" />

export default OurCustomers
