function calculateScore() {
    var score = 0;
    var username = document.getElementById('username').value;

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q2 && q3) {
        score += parseInt(q1.value);
        score += parseInt(q2.value);
        score += parseInt(q3.value);

        document.getElementById('result').innerHTML = `<p>${username}, your score is: ${score}/3</p>`;
    } else {
        alert('Please answer all the questions.');
    }
}