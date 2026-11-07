document.getElementById("surveyForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let awareness =
    document.getElementById("awareness").value;

    let suggestion =
    document.getElementById("suggestion").value;

    let response = {
        name: name,
        awareness: awareness,
        suggestion: suggestion
    };

    let responses = JSON.parse(
        localStorage.getItem("responses") || "[]"
    );

    responses.push(response);

    localStorage.setItem(
        "responses",
        JSON.stringify(responses)
    );

    document.getElementById("message").innerHTML =
    "Thank you " + name + "! Your response is submitted.";

    document.getElementById("surveyForm").reset();

});