function runMe() {

var userName = document.getElementById('input').value
var userComment = document.getElementById('comment').value
var user = userName.toUpperCase()
var newH1 = document.createElement('h1')
newH1.setAttribute('class', 'newH1')
var getLi = document.getElementById('li')
var getOl = document.getElementById('ol')
getOl.className = 'list'
getLi.appendChild(newH1)
var newP = document.createElement('p')
newP.setAttribute('class', 'newP')
getLi.appendChild(newP)
var newButton = document.createElement('button')
getLi.appendChild(newButton)
newButton.setAttribute('id', 'delete')
newButton.textContent = "Remove"

// TIME
var today = new Date();
var hrs = today.getHours()
var mins = today.getMinutes()
var secs = today.getSeconds()
var date = today.getDate()
var month = today.getMonth()
var Month = month + 1
var year = today.getFullYear()

if (mins < 10) {
	mins = "0" + mins
} false;

if (hrs < 12) {
	hrs = hrs + ":" + mins + "am"
} else (hrs = hrs - 12 + ":" + mins + "pm")


newH1.innerHTML = "'"  + user + "'" + " commented:"
newP.innerHTML =  userComment + "<br>" + "<em> at "  + hrs + " on " + Month + "/" + date + "/" + year + "</em>"

function removeItem() { 
     getOl.className = "remove"
}
newButton.onclick = removeItem

}