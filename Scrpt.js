const lifeExpectancy = {
    both: 77.2,
    male: 74.2,
    female: 80.1
};


function calculate() {

    const dobInput = document.getElementById("dob");
    const sexInput = document.getElementById("sex");

    if (!dobInput.value) {
        alert("Please enter your date of birth.");
        return;
    }

    const birthDate = new Date(dobInput.value);

    const birthYear = birthDate.getFullYear();

    const selectedSex = sexInput.value;

    const expectedAge = lifeExpectancy[selectedSex];

    const estimatedYear =
        Math.round(birthYear + expectedAge);


    document.getElementById("lifeYears").textContent =
        expectedAge.toFixed(1);

    document.getElementById("birthYear").textContent =
        birthYear;

    document.getElementById("deathYear").textContent =
        estimatedYear;

    document.getElementById("description").textContent =
        `Using the Sri Lankan ${selectedSex} population baseline, ` +
        `the statistical life expectancy is ${expectedAge.toFixed(1)} years.`;


    document
        .getElementById("result")
        .classList.remove("hidden");
}