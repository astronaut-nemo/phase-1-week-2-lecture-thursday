document.addEventListener('DOMContentLoaded', () => {
    const logOutBtn = document.getElementById('log_out')
    logOutBtn.addEventListener('click', () => {
        alert('You are logging out, OK?');
        window.location.replace("http://127.0.0.1:5501/index.html")
    })
})