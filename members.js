function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/skills/" + member + "/" + skill, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                document.getElementById("skillMember").innerHTML = response;
            } else {
                alert("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
}