import * as React from "react"
import { slide as Menu } from "react-burger-menu"
import { connectSideBarMaxWidth } from "../../constants/constants.const"
import {
  // selectInterestOptions,
  connectSideBarContent,
  connectSideBarContactForm,
  connectSideBarCompanyForm,
  FieldTypes,
  connectSideBarInterestsForm,
  FormPage,
} from "../../constants/connectSideBar.const"
import * as cssStyles from "./connectSideBar.module.css"
import CustomInput from "../customInput/customInput"
// import CustomDropdown from "../customDropdown/customDropdown"
import SelectChip from "../customSelectChip/customSelectChip"
import { useForm } from "react-hook-form"
import CustomButton from "../buttonWithArrow/buttonWithArrow"
import { useState } from "react"
import {
  connectFormFirst,
  connectFormSecond,
} from "../../services/connect.service"
import Multiselect from "../multiselect/multiselect"
const ConnectSideBar = props => {
  const [yourInterestValue, setyourInterestValue] = useState([])

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues: getValuesForm1,
    reset: resetForm1,
  } = useForm()
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    getValues: getValuesForm2,
    reset: resetForm2,
  } = useForm()

  const [currentPage, setCurrentPage] = useState(FormPage.FIRST)

  const scrollTop = () => {
    const element = document.getElementById("formContainer")
    if (element) {
      element.scrollTop = 0
    }
  }

  const onFirstPageSubmit = (data, event) => {
    event.preventDefault()
    setCurrentPage(FormPage.SECOND)
    var data = { ...getValuesForm1() }
    data.interests = yourInterestValue?.map(item => item.label)
    connectFormFirst({ ...data }, () => setCurrentPage(FormPage.SECOND))
    scrollTop()
  }

  const onSecondPageSubmit = (data, event) => {
    props.chooseClass("connectsidebar_third_page")
    setCurrentPage(FormPage.THIRD)
    event.preventDefault()
    var data = { ...getValuesForm1() }
    data.interests = yourInterestValue?.map(item => item.label)
    connectFormSecond({ ...data, ...getValuesForm2() }, saveSuccess)
  }

  const saveSuccess = () => {
    setCurrentPage(FormPage.THIRD)
    resetForm1()
    resetForm2()
  }

  const goBack = () => {
    setCurrentPage(FormPage.FIRST)
    scrollTop()
  }
  const updateFormValue = val => {
    setyourInterestValue(val)
  }

  const [styles, setStyles] = React.useState({
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: 0,
      maxWidth: `${connectSideBarMaxWidth}px`,
      width: `${connectSideBarMaxWidth}px`,
      background: "rgb(239 239 239 / 60%)",
      WebkitBackdropFilter: "blur(17px)",
    },
    bmMenu: {
      padding: "9% 14%",
      fontSize: "1.15em",
      backdropFilter: "blur(17px)",
    },
    bmMorphShape: {
      fill: "#373a47",
    }
  })

  React.useEffect(() => {
    resizeCallback()
    function resizeCallback() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      setStyles({
        ...styles,
        bmMenuWrap: {
          ...styles.bmMenuWrap,
          maxWidth: `${
            width > connectSideBarMaxWidth ? connectSideBarMaxWidth : width
          }px`,
          width: `${
            width > connectSideBarMaxWidth ? connectSideBarMaxWidth : width
          }px`,
        },
        bmMenu: {
          ...styles.bmMenu,
          padding: "9% 0%"
        },
      })
    }
    window.addEventListener("resize", resizeCallback)
    return () => window.removeEventListener("resize", resizeCallback)
  }, [])

  React.useEffect(() => {
    if (currentPage === FormPage.THIRD) {
      props.setFinalPage()
    }
  }, [currentPage])

  const closeSideBar = () => {
    props.close()
    if (currentPage === FormPage.THIRD) {
      setTimeout(() => setCurrentPage(FormPage.FIRST), 500)
    }
    window.fullpage_api?.setAllowScrolling(true)
  }
  return (
    <Menu
      id="connectSideBar"
      className={`scrollable-content ${
        currentPage === FormPage.THIRD
          ? `formThreeContainer ${cssStyles.formThreeContainer}`
          : ""
      }`}
      isOpen={props.isOpen}
      //noOverlay
      disableOverlayClick
      overlayClassName={`${cssStyles.contact_us_overlay}`}
      customCrossIcon={false}
      customBurgerIcon={false}
      right
      styles={styles}
      onClose = {closeSideBar}
    >
      <div className={`${cssStyles.sideBarContainer}`}>
        <div
          role="presentation"
          className={cssStyles.backArrow}
          onClick={closeSideBar}
          onKeyPress={closeSideBar}
        ></div>
        {currentPage === FormPage.FIRST && (
          <div className={cssStyles.sideBarTitle}>
            {connectSideBarContent.sideBarTitle}
          </div>
        )}
        {currentPage === FormPage.SECOND && (
          <div className={cssStyles.sideBarTitle}>
            {connectSideBarContent.thankYou}
          </div>
        )}
        <form
          id="formContainer"
          className={`${cssStyles.sideBarForm} ${
            currentPage === FormPage.THIRD ? cssStyles.formThreeActive : ""
          }`}
        >
          {currentPage === FormPage.FIRST && (
            <>
              <div className={cssStyles.formSectionTitle}>
                {connectSideBarContent.formOneSectionTitle1}
              </div>
              {connectSideBarContactForm.map((field, index) => {
                if (
                  index < 2 &&
                  [FieldTypes.Text, FieldTypes.TextArea].includes(
                    field.fieldType
                  )
                ) {
                  return (
                    <CustomInput
                      key={field.controlName}
                      inputType={field.fieldType}
                      register={register(
                        field.controlName,
                        Object.assign({}, ...field.validations)
                      )}
                      label={field.label}
                      control={field.controlName}
                      errors={errors}
                    />
                  )
                }
                return ""
              })}
              {/* <div className={cssStyles.formSectionTitle}>
                {connectSideBarContent.formOneSectionTitle2}
              </div> */}
              {connectSideBarInterestsForm.map((field, index) => {
                if (field.fieldType === FieldTypes.Select) {
                  return (
                    // <CustomDropdown
                    //   key={index}
                    //   setValue={setValue}
                    //   getValues={getValuesForm1}
                    //   register={register(
                    //     field.controlName,
                    //     Object.assign({}, ...field.validations)
                    //   )}
                    //   label={field.label}
                    //   options={selectInterestOptions}
                    //   control={field.controlName}
                    //   errors={errors}
                    // />
                    <Multiselect
                      {...register(field.controlName)}
                      updateFormValue={updateFormValue}
                    />
                  )
                }
                return ""
              })}
              {connectSideBarContactForm.map((field, index) => {
                if (
                  index == 2 &&
                  [FieldTypes.Text, FieldTypes.TextArea].includes(
                    field.fieldType
                  )
                ) {
                  return (
                    <CustomInput
                      key={field.controlName}
                      inputType={field.fieldType}
                      register={register(
                        field.controlName,
                        Object.assign({}, ...field.validations)
                      )}
                      label={field.label}
                      control={field.controlName}
                      errors={errors}
                      className={"contactTextBox"}
                    />
                  )
                }
                return ""
              })}
              {connectSideBarContactForm.map((field, index) => {
                if (
                  index === 3 &&
                  [FieldTypes.Text, FieldTypes.TextArea].includes(
                    field.fieldType
                  )
                ) {
                  return (
                    <CustomInput
                      key={field.controlName}
                      inputType={field.fieldType}
                      register={register(
                        field.controlName,
                        Object.assign({}, ...field.validations)
                      )}
                      label={field.label}
                      control={field.controlName}
                      errors={errors}
                      className={"firstpage_textarea"}
                    />
                  )
                }
                return ""
              })}
              <div className={styles.submitBtn}>
                <CustomButton
                  label={"SUBMIT"}
                  click={handleSubmit(onFirstPageSubmit)}
                />
              </div>
            </>
          )}
          {currentPage === FormPage.SECOND && (
            <>
              <div
                className={`${cssStyles.formSectionTitle} ${cssStyles.secondpage_form_title}`}
              >
                {connectSideBarContent.formTwoSectionTitle1}
              </div>
              <div className={`${cssStyles.formSectionSubTitle}`}>
                {connectSideBarContent.formTwoSectionSubTitle}
              </div>
              {connectSideBarCompanyForm.map((field, index) => {
                if (
                  [FieldTypes.Text, FieldTypes.TextArea].includes(
                    field.fieldType
                  )
                ) {
                  return (
                    <CustomInput
                      key={field.controlName}
                      inputType={field.fieldType}
                      register={register2(
                        field.controlName,
                        Object.assign({}, ...field.validations)
                      )}
                      label={field.label}
                      control={field.controlName}
                      errors={errors2}
                    />
                  )
                } else if (field.fieldType === FieldTypes.selectChip) {
                  return (
                    <SelectChip
                      key={field.controlName}
                      options={field.options}
                      register={register2(
                        field.controlName,
                        Object.assign({}, ...field.validations)
                      )}
                      control={field.controlName}
                      label={field.label}
                      errors={errors2}
                      className={`${index == 3 ? "your_budget_section" : ""}`}
                    />
                  )
                }
                return ""
              })}
              <div style={{ marginTop: "auto" }}>
                <CustomButton
                  label={"SUBMIT"}
                  click={handleSubmit2(onSecondPageSubmit)}
                />
                {/* <div
                  role="presentation"
                  className={cssStyles.backButtonLabel}
                  onClick={goBack}
                  onKeyPress={goBack}
                >
                  {connectSideBarContent.formTwoBackButton}
                </div> */}
              </div>
            </>
          )}
          {currentPage === FormPage.THIRD && (
            <>
              {/* <div
                className={`${cssStyles.formSectionContent} ${cssStyles.formThreeSection}`}
              >
                {connectSideBarContent.formThreeSectionTitle1}
              </div> */}

              {/* 
                  finalPageContent ID from below html is used in header component to position the heart element.
               */}
              <div
                id="finalPageContent"
                className={`${cssStyles.formSectionContent} ${cssStyles.formSectionContent1}`}
              >
                {connectSideBarContent.formThreeSectionContent1}
              </div>
              <div
                className={`${cssStyles.formSectionContent} ${cssStyles.formSectionContent2}`}
              >
                {connectSideBarContent.formThreeSectionContent2}
              </div>
              <div
                className={`${cssStyles.formSectionContent} ${cssStyles.formSectionContent3}`}
              >
                <CustomButton
                  label={connectSideBarContent.formThreeSectionContent3}
                  click={closeSideBar}
                />
              </div>
            </>
          )}
        </form>
      </div>
    </Menu>
  )
}

export default ConnectSideBar
