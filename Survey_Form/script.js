function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = getSelectedGender();
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || gender === '' || !profession || !email || !mobile) {
        alert('All fields are required.');
        return;
    }

    const popupResults = document.getElementById('popup-results');
    popupResults.innerHTML = `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Profession:</b> ${profession}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
    `;

    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function getSelectedGender() {
    const male = document.getElementById('male');
    const female = document.getElementById('female');

    if (male.checked && female.checked) {
        return 'Male, Female';
    } else if (male.checked) {
        return 'Male';
    } else if (female.checked) {
        return 'Female';
    }

    return '';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    resetForm();
}
