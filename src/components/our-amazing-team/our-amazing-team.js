import * as React from "react"
import "./our-amazing-team.css"
import Dialog from "../our-amazing-team-dialog/our-amazing-team-dialog"

const OurAmazingTeam = props => {
  // const testimonial = props?.testimonial ?? []
  const [testimonial, setTestimonial] = React.useState([])
  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  const [hasClickedNext, setHasClickedNext] = React.useState(false)
  const fadedClassName = "team-user-faded"
  const [initialWorkingIdx, setInitialWorkingIdx] = React.useState(-1)
  const [showCase, setShowCase] = React.useState(false)

  React.useEffect(() => {
    if (props?.testimonial) {
      setTestimonial(props.testimonial)
    }
  }, [props?.testimonial])

  React.useEffect(() => {
    // if (testimonial?.length > 0) {
    //   const firstUserWithVideo = testimonial.filter(
    //     (user, index) => {
    //       // console.log('user', user);
    //       return user?.video_url;
    //     }
    //   )[0]
    //   const idx = testimonial.findIndex(
    //     user => user.id === firstUserWithVideo.id
    //   )
    //   setInitialWorkingIdx(idx)
    //   onSelect(idx, firstUserWithVideo)
    // }
    // intersection observer to check when the slide in coming to view
    // let observer = new IntersectionObserver(() => {
    //   // console.log('inview');
    // }, {
    //   root: document.querySelector('.section-ourTeam-3'),
    //   rootMargin: '0px',
    //   threshold: 0.8
    // });
  }, [testimonial])

  React.useEffect(() => {
    function callback(mutationList, observer) {
      mutationList.forEach(function (mutation, index) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          index === 0
        ) {
          // handle class change
          if (
            mutation.target.className &&
            mutation.target.className.split(" ").includes("fp-viewing-3")
          ) {
            /**
             * Only for first time we should do the animation and showcase employees with videos.
             * checking for following class loaded_team_with_videos.
             */
            if (!document.querySelector(".loaded_team_with_videos")) {
              setTimeout(() => {
                dimAllTeam()
                setShowCase(true)
                setTimeout(() => {
                  showCaseTeamMembers()
                }, 1000)
              }, 1800)
            }
          } else {
            if (document.getElementById("our-amazing-team-dialog-container")) {
              setTimeout(() => closeDialog(), 500)
            }
          }
          if (
            mutation.target.className &&
            mutation.target.className.split(" ").includes("fp-viewing-1")
          ) {
            window.fullpage_api.setAllowScrolling(false, 'up');
          }
          else{
            window.fullpage_api.setAllowScrolling(true, 'up');
          }
        }
      })
    }
    const observer = new MutationObserver(callback)
    if (props.isAmazingTeamSecondSlide) {
      const body = document.body
      const options = {
        attributes: true,
      }
      observer.observe(body, options)
    }

    return () => {
      if (props.isAmazingTeamSecondSlide) {
        window.fullpage_api.setAllowScrolling(true, 'up');
        observer.disconnect()
      }
    }
  }, [props.isAmazingTeamSecondSlide, testimonial])

  function resizeCallback() {
    setTimeout(() => {
      if (selectedIndex > -1) {
        onSelect(selectedIndex, testimonial[selectedIndex])
      }
    }, 2600)
  }

  React.useEffect(() => {
    if (props.isAmazingTeamSecondSlide) {
      window.addEventListener("resize", resizeCallback)
    }
    return () => window.removeEventListener("resize", resizeCallback)
  }, [selectedIndex, testimonial, props.isAmazingTeamSecondSlide])

  const dimAllTeam = () => {
    Array.from(
      document.querySelectorAll(
        ".section-dynamicTemplate-3 .testimonials-amazing-team"
      )
    ).forEach(userElement => {
      userElement.classList.add(fadedClassName)
    })
  }

  const showCaseTeamMembers = () => {
    const usersIndexWithVideo = []
    testimonial.forEach((user, index) => {
      if (user?.video_url) {
        usersIndexWithVideo.push(index)
      }
    })
    Array.from(
      document.querySelectorAll(
        ".section-dynamicTemplate-3 .testimonials-amazing-team"
      )
    ).forEach(userElement => {
      const currentUserIndex = +userElement.getAttribute("data-custom")
      if (usersIndexWithVideo.includes(currentUserIndex)) {
        if (userElement.classList.contains(fadedClassName)) {
          userElement.classList.remove(fadedClassName)
        }

        userElement.style.setProperty("--our-team-user-top", "-25%")
        userElement.style.setProperty("--our-team-user-left", "-25%")
        userElement.style.setProperty("--our-team-user-opacity", "0")
      } else if (
        !usersIndexWithVideo.includes(currentUserIndex) &&
        !userElement.classList.contains(fadedClassName)
      ) {
        userElement.classList.add(fadedClassName)
      }
    })
    const container = document.querySelector(
      ".section-dynamicTemplate-3 .our-amazing-team-container"
    )
    const mobilecontainer = document.querySelector(
      ".section-dynamicTemplate-3 .our-amazing-team-container-mobile"
    )
    if (mobilecontainer) {
      setTimeout(
        () => mobilecontainer.classList.add("loaded_team_with_videos"),
        500
      )
    }
    if (container) {
      setTimeout(() => container.classList.add("loaded_team_with_videos"), 500)
    }
  }

  const closeDialog = () => {
    setSelectedIndex(-1)
    showCaseTeamMembers()
  }

  const onSelect = (updatedIdx, user) => {
    if (!Boolean(user?.video_url)) {
      return
    }
    Array.from(
      document.querySelectorAll(
        ".section-dynamicTemplate-3 .testimonials-amazing-team"
      )
    ).forEach(userElement => {
      const selectedUserIndex = +userElement.getAttribute("data-custom")
      if (selectedUserIndex === updatedIdx) {
        if (userElement.classList.contains(fadedClassName)) {
          userElement.classList.remove(fadedClassName)
        }

        userElement.style.setProperty("--our-team-user-top", "-25%")
        userElement.style.setProperty("--our-team-user-left", "-25%")
        userElement.style.setProperty("--our-team-user-opacity", "0")
      } else if (
        selectedUserIndex !== updatedIdx &&
        !userElement.classList.contains(fadedClassName)
      ) {
        userElement.classList.add(fadedClassName)
      }
    })
    if (updatedIdx > testimonial.length - 1) {
      setHasClickedNext(false)
      Array.from(
        document.querySelectorAll(
          `.section-dynamicTemplate-3 .testimonials-amazing-team`
        )
      ).forEach(userElement => {
        userElement.classList.remove(fadedClassName)
      })
    }
    setSelectedIndex(updatedIdx)
    // setSelectedIndex(index > testimonial.length - 1 ? 0 : index)
  }

  // const findNextUserWithVideo = currentIndex => {
  //   const firstUserWithVideo = testimonial.filter(
  //     (user, index) => index > currentIndex && user?.video_url
  //   )[0]

  //   if (!firstUserWithVideo) return { index: -1, user: null }

  //   const idx = testimonial.findIndex(user => user.id === firstUserWithVideo.id)
  //   return { index: idx, user: firstUserWithVideo }
  // }

  const hasVideo = idx => {
    return testimonial[idx]?.video_url ? true : false
  }

  const onClickedNext = index => {
    // const res = findNextUserWithVideo(index)
    // onSelect(res.index, res.user)
    if (index === testimonial.length - 1) {
      closeDialog()
      return
    }
    let idx = index + 1
    while (!hasVideo(idx)) {
      if (idx === testimonial.length - 1) {
        closeDialog()
        return
      } else {
        idx = idx + 1
      }
    }
    onSelect(idx, testimonial[idx])
    setHasClickedNext(true)
  }

  // React.useEffect(() => {
  //   // if (selectedIndex === -1) {
  //   //   setHasClickedNext(false)
  //   //   Array.from(document.querySelectorAll(`.${fadedClassName}`)).forEach(
  //   //     userElement => {
  //   //       userElement.classList.remove(fadedClassName)
  //   //     }
  //   //   )
  //   // }
  // }, [selectedIndex])
  // React.useEffect(() => {
  //   const onClickOutside = e => {
  //     const clickedEl = e.target

  //     if (!clickedEl.closest(".our-amazing-team-wrapper") && !hasClickedNext) {
  //       // Clicked outside the box
  //       setSelectedIndex(-1)
  //     }
  //   }
  //   document.addEventListener("click", onClickOutside)

  //   // cleanup the listener
  //   return () => {
  //     document.removeEventListener("click", onClickOutside)
  //   }
  // }, [hasClickedNext])

  return (
    <div className="our-amazing-team-wrapper">
      {showCase && (
        <h3 className="our-teams-page__showCasing"> Showcasing...</h3>
      )}
      <div className="our-amazing-team-container">
        {testimonial.map((testimonialValue, index) => (
          <React.Fragment key={`team-user-${testimonialValue?.id}`}>
            <div
              key={index}
              className={`testimonials-amazing-team`}
              data-custom={index}
              data-hey={selectedIndex !== index}
            >
              <img
                className="userProfilePic"
                alt={`${testimonialValue.userName}Pic`}
                src={testimonialValue.profilePicUrl?.asset?.url}
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              />
              <p
                className="testimonials-am-user-name"
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              >
                {testimonialValue?.userName}
              </p>
              <p
                className="testimonials-am-job-profile"
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              >
                {testimonialValue?.jobProfile}
              </p>
            </div>
            {selectedIndex > -1 && selectedIndex === index && (
              <Dialog
                idx={index}
                testimony={testimonialValue}
                clickedNext={() => onClickedNext(index)}
                close={closeDialog}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="our-amazing-team-container-mobile">
        {testimonial.map((testimonialValue, index) => (
          <React.Fragment key={`team-user-${testimonialValue?.id}`}>
            <div
              key={index}
              className={`testimonials-amazing-team`}
              data-custom={index}
              data-hey={selectedIndex !== index}
            >
              <img
                className="userProfilePic"
                alt={`${testimonialValue.userName}Pic`}
                src={testimonialValue.profilePicUrl?.asset?.url}
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              />
              <p
                className="testimonials-am-user-name"
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              >
                {testimonialValue?.userName}
              </p>
              <p
                className="testimonials-am-job-profile"
                onClick={() =>
                  props.isAmazingTeamSecondSlide &&
                  onSelect(index, testimonialValue)
                }
              >
                {testimonialValue?.jobProfile}
              </p>
            </div>
            {selectedIndex > -1 && selectedIndex === index && (
              <Dialog
                idx={index}
                testimony={testimonialValue}
                clickedNext={() => onClickedNext(index)}
                close={closeDialog}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default OurAmazingTeam
