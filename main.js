function ageInDays(){
    let year = document.getElementById('age').value;
    let days = (2021-year)*365;
    var element = document.getElementById("result");
    var h1 = document.createElement("h1");
    var text = document.createTextNode("You are "+days+" days old:)");
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(text)
    element.appendChild(h1);
    document.getElementById('age').value = '';
}

function RESet(){
    document.getElementById('ageInDays').remove();
    document.getElementById('age').value = '';
}
