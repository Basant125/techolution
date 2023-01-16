export const connectSideBarContent = {
    sideBarTitle : "Let's Connect",
    formOneSectionTitle1: "CONTACT DETAILS",
    formOneSectionTitle2: "HOW CAN WE HELP?",
    thankYou: "Thank You!",
    //  formOneSectionSubTitle1: "HELP US UNDERSTAND YOUR NEEDS BY UNDERSTANDING YOUR INTERESTS",
    formTwoSectionTitle1: "Help us connect you with the right innovation specialist",
    formTwoSectionSubTitle: "COMPANY DETAILS",
    formTwoBackButton: "BACK",
    formThreeSectionTitle1: "Thank You For Your Interests",
    formThreeSectionContent1: "We got you! \n One of our specialist\n will be in touch shortly",
    formThreeSectionContent2: "innovate@techolution.com",
    formThreeSectionContent3: "EXPLORE"
}
 
export const selectInterestOptions = [
    {
        key: "co_create",
        title: "Co - Create"
    },
    {
        key: "enterprise_cloud",
        title: "Enterprise Cloud"
    },
    {
        key: "real_world_ai",
        title: "Real World AI"
    },
    {
        key: "our_cutsomers",
        title: "Our Customers"
    }
]

export const connectSideBarContactForm = [
    {
        fieldType : "Text",
        controlName : "name",
        label: "Full Name*",
        validations: [
            { required: { value: true, message: "Name is Required"}},
            { maxLength: { value: 20, message: "Max 50 characters allowed"} },
            { pattern: { value:/^[^\s]+(?:$|.*[^\s]+$)/, message:"Name shouldn't start/end or contain only white spacing" } }
        ]
    },
    {
        fieldType : "Text",
        controlName : "email",
        label: "Email Address*",
        validations: [
            { required: { value: true, message: "Email is Required"}},
            { pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid Email address',
              }
            }
        ]
    },
    {
        fieldType : "Text",
        controlName : "phone",
        label: "Contact Number",
        validations: [
            { pattern: {
                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: 'Enter a valid Contact Number',
              }
            }
        ]
    },
    {
        fieldType : "TextArea",
        controlName : "other",
        label: "What can we solve for you?",
        validations: []
    }
]

export const connectSideBarInterestsForm = [
    {
        fieldType : "Select",
        controlName : "your_interests",
        label: "Select your interests",
        validations: []
    }
]

export const employeeCountList = [
    {
      key: "lessThanTen",
      title: "Small"
    },
    {
        key: "10Plus",
        title: "Medium"
    },
    {
        key: "100Plus",
        title: "Enterprise"
    }
]

export const budgetList = [
    {
      key: "100k",
      title: "<100k"
    },
    {
        key: "250k",
        title: "<250k"
    },
    {
        key: "500k",
        title: "<500k"
    },
    {
        key: "1M",
        title: "<1M"
    },
    {
        key: "1Mplus",
        title: "1M+"
    }
]

export const connectSideBarCompanyForm = [
    {
        fieldType : "Text",
        controlName : "companyName",
        label: "Company name *",
        validations: [
            { required: { value: true, message: "Company Name is Required"}},
            { maxLength: { value: 20, message: "Max 50 characters allowed"} }
        ]
    },
    {
        fieldType : "TextArea",
        controlName : "aboutCompany",
        label: "What problem are you looking to solve? *",
        validations: [
            { required: { value: true, message: "Please fill this field"}}
        ]
    },
    {
        fieldType : "selectChip",
        controlName : "employeeCount",
        label: "YOUR COMPANY SIZE *",
        validations: [
            { required: { value: true, message: "Company Employee Count is Required"}},
        ],
        options: employeeCountList
    },
    {
        fieldType : "selectChip",
        controlName : "budget",
        label: "WHAT’S YOUR BUDGET? *",
        validations: [
            { required: { value: true, message: "Budget is Required"}},
        ],
        options: budgetList
    }
]

export const FieldTypes = {
    Text : "Text",
    Select : "Select",
    TextArea: "TextArea",
    selectChip: "selectChip"
}

export const FormPage = {
    FIRST : 1,
    SECOND : 2,
    THIRD : 3,
}

