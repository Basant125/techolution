// const apiUrl = "https://form-submit-techolution.vercel.app"
const apiUrl = "https://contact-api.techolution.com"

const apiCall = (data, callback) => {
    const xhr = new XMLHttpRequest()
    const url = apiUrl
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert(xhr.responseText) // Returns a 200 response if the submission is successful.
            callback()
        } else if (xhr.readyState === 4 && xhr.status === 403) {
            alert(xhr.responseText) //Returns a 403 if the portal isn't allowed to post submission.
        } else if (xhr.readyState === 4 && xhr.status === 404) {
            alert(xhr.responseText) // Returns a 404 error if the formGuid isn't found
        }
    }

    const final_data = JSON.stringify(data)
    // console.log(final_data);
    //Sends the request
    xhr.send(final_data);
}


export const connectFormFirst = (data, callback) => {
    const dataToSubmit = {
        fields: [
            {
                name: "full_name",
                value: data.name,
            },
            {
                name: "email",
                value: data.email,
            },
            {
                name: "phone",
                value: data.phone,
            },
            {
                name: "your_interests",
                value: data.interests?.toString(),
            },
            {
                name: "what_can_we_solve_for_you_",
                value: data.other?.toString(),
            }
        ],
        context: {
            pageUri: "https://techolution.com",
            pageName: "Techolution",
        },
    }
    apiCall(dataToSubmit, callback)
}


export const connectFormSecond = (data, callback) => {

    const dataToSubmit = {
        fields: [
            {
                name: "full_name",
                value: data.name,
            },
            {
                name: "email",
                value: data.email,
            },
            {
                name: "phone",
                value: data.phone,
            },
            {
                name: "your_interests",
                value: data.interests?.toString(),
            },
            {
                name: "company",
                value: data.companyName
            },
            {
                name: "tell_us_about_your_company",
                value: data.aboutCompany
            },
            {
                name: "company_employee_count",
                value: data.employeeCount
            },
            {
                name: "what_s_your_budget",
                value: data.budget
            },
        ],
        context: {
            pageUri: "https://techolution.com",
            pageName: "Techolution",
        },
    }
    apiCall(dataToSubmit, callback)
} 
