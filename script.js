// Listing element
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their ID's
    var profilePictureInput = document.getElementById("profilePicture");
    //Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //********** 
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //**********       
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //********* 
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile) : "";
        // Create Resume Output
        var resumeOutput = "\n        <h2>Resume</h2>\n        \n       ".concat(profilePictureURL ?
            "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile picture\"/>") : "", "\n\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\"> ").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\"> ").concat(experience, " </p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </p>\n        ");
        //*********
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html; charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume";
        //Resume Output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            //*********
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more form elements are missing');
    }
    ;
});