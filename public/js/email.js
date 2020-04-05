const email = $('#email');
const contentType = "application/json; charset=utf-8";

export const getEmail = async () => {
    try {
        const fetchOptions = {
            method: 'get'
        };
        const response = await fetch('/email', fetchOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Unexpected error: ${error.message}. Please try again`)
    }
}

export const postEmail = async () => {
    try {
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify({
                email: email.val()
            }),
            headers: {
                "Content-Type": contentType
            }
        };
        const response = await fetch('/email', fetchOptions);
        const data = await response.json();
        if (!data.error) {
            return data;
        }
    } catch (error) {
        console.error(`Unexpected error: ${error.message}. Please try again`)
    }
};

export const makeEmailReadOnly = (data) => {
    const valueToDisplay = Object.values(data).find(value => value.email);
    if (valueToDisplay) {
        const emailValue = valueToDisplay.email;
        email.prop("disabled", true);
        email.attr("value", emailValue);
        email.val(emailValue);
    }
}
