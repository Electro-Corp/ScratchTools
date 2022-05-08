// get cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // get cookie
if (window.location.href.includes("https://scratch.mit.edu/search/")) {
var user = document.querySelector('#frc-q-1088').value
checkfor(user)
async function checkfor(user) {
    const response = await fetch(`https://api.scratch.mit.edu/users/${user}/`);
    
    // Storing data in form of JSON
    var data = await response.json();
    if(data.hasOwnProperty('profile')){
    var logo = data['profile']['images']['90x90'];
    var time = data['history']['joined'];
    
var userbox = document.createElement('div')
var useravatar = document.createElement('img')
var username = document.createElement('a')
var timebox = document.createElement('div');
username.textContent = `${user} is a user.`
username.href = `https://scratch.mit.edu/users/${user}/`
useravatar.src = logo
useravatar.style.height = '60px'
useravatar.style.borderRadius = '4px'
useravatar.style.padding = '10px'
useravatar.style.float = 'left'
// Time
timebox.textContent = `Exact time joined: ${time}`
timebox.style.height = '10px'
timebox.style.borderRadius = '1px'
timebox.style.padding = '1px'
timebox.style.float = 'left'
//
username.style.float = 'right'
userbox.appendChild(useravatar)
username.style.padding = '30px'
userbox.appendChild(username)
userbox.style.backgroundColor = 'white'
userbox.style.margin = 'auto'
userbox.style.height = '80px'
userbox.style.width = '50vw'
userbox.style.borderRadius = '10px'
  
document.querySelector('#projectBox').prepend(userbox)
}
    }
}
