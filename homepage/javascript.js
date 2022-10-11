document.addEventListener('DOMContentLoaded', () => { 
    const socialMediaButtons = document.querySelector('#social-media-links').children
    for (const btn of socialMediaButtons) {
        btn.addEventListener('click', () => window.open(btn.dataset.link)) 
    }
})

// function eventClicker () { alert('hello world'); }
// document.getElementById('eventClick').addEventListener('click', eventClicker);  

// document.querySelector('#eventclick').addEventListener('click', function () { alert('hello world'); } {
    
// })
// }

