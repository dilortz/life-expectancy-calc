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

    const birthDate = new Date(dobInput.value + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        alert("Date of birth cannot be in the future.");
        return;
    }

    // -------------------------
    // EXACT AGE
    // -------------------------

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }


    // -------------------------
    // LIFE EXPECTANCY BASELINE
    // -------------------------

    const lifeExpectancy = {
        both: 77.2,
        male: 74.2,
        female: 80.1
    };

    const selectedSex = sexInput.value;

    const expectedAge =
        lifeExpectancy[selectedSex];


    // -------------------------
    // APPROXIMATE CALENDAR YEAR
    // -------------------------

    const birthYear =
        birthDate.getFullYear();

    const estimatedYear =
        Math.round(birthYear + expectedAge);


    // -------------------------
    // DISPLAY
    // -------------------------

    document.getElementById("lifeYears").textContent =
        expectedAge.toFixed(1);

    document.getElementById("birthYear").textContent =
        birthYear;

    document.getElementById("deathYear").textContent =
        estimatedYear;

    document.getElementById("description").textContent =
        `You are currently ${years} years, ${months} months and ${days} days old. ` +
        `The selected Sri Lankan population baseline is ` +
        `${expectedAge.toFixed(1)} years.`;


    document
        .getElementById("result")
        .classList.remove("hidden");
}