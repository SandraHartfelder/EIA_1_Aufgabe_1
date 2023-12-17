stories = ['Du hast dich dafür entschieden nach links zu gehen und triffst auf einen blauäugigen weißen Drachen, welchen du zähmst.',
'Du hast dich entschieden nach rechts zu gehen und findest eine myteriöse Frucht, welche dir geheimnisvolle Kräfte verspricht.', 'Nun bist du die stärkste Person im ganzen Land.']

const input = document.querySelector(".inputForm__field")
const output = document.getElementById("output");

input.value = ""
input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (input.value == "links") {
            output.innerHTML = stories[0]
            input.value = ""
        } else if (input.value == "rechts") {
            output.innerHTML = stories[1]
            input.value = ""
        }else if (input.value == "cool") {
            output.innerHTML = stories[2]
            input.value = ""
        }
    }
})
