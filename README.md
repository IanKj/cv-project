App will contain 'table of contents'
    General info/header
    contact info
    Education
    Work Experience
    skills/awards

Edit button turns each section into editable form with a submit button and reset button available


Add Experience Button
    'add job' button only displays when edit mode is active
    check if edit mode is active => display button, else return nothing ('')
    place button below edit button
        position: absolute;
        top: 20px;
        right: 0px;
    LOGIC
        when button is clicked
        set state with a new job added
            use placeholder values for default text        