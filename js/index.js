// Your code goes here
//targeting links
let links = Array.from(document.querySelectorAll('.nav-link'));

//targeting buttons
const button = document.querySelectorAll('.btn');
const buttArr = Array.from(button);

//targeting destination div
const destination = document.querySelectorAll('.destination');
//targeting destinations h4's
const destArrHeaders = Array.from(document.querySelectorAll('.destination h4'));
//targeting destination p's
const destArrPara = Array.from(document.querySelectorAll('.destination p'));

//targeting content to be hidden or manipulated
const intro = document.querySelector('.intro');
const contentSection = document.querySelectorAll('.content-section');
const contentDest = document.querySelector('.content-destination');
const contentPick = document.querySelector('.content-pick');
let pic = document.querySelector('.content-destination img');

//stop propagation
//spin container on click
contentDest.addEventListener('mousemove', (event) => {
    TweenMax.to(contentDest, 3, {rotation:360, scale:1, repeat:-1, yoyoEase:1, easeOut: 1});
    contentDest.addEventListener ('mouseleave', (event) => {
        TweenMax.to(contentDest, 1, {scale: 1, rotation:0});
    });
});

//spin image on click (without affecting rest of container)
pic.addEventListener('mousemove', (event) => {
    TweenMax.to(pic, 5, {rotation:360, scale:1, repeat:-1, yoyoEase:1, easeOut: 1});
    event.stopPropagation();    
    pic.addEventListener ('mouseleave', (event) => {
        TweenMax.to(pic, 1, {scale: 1, rotation:0});
    }); 
});

//Added a mouseout that listens for the mouse to leave the page and gives an alert asking if they are sure they want to leave the page
let page = document.querySelector("body");
page.addEventListener('mouseleave', () => {
    alert(`Adventure is only a click away, are you sure you're done with the fun?`);
});

//added color changes when the window is resized
window.addEventListener('resize', (event) => {
    page.style.background = 'lightblue';
    document.querySelector('.main-navigation').style.background = '#FFEBCD';
});

//adding audio element
page.insertAdjacentHTML('afterbegin', '<audio></audio>');
let audio = document.querySelector('audio');
audio.src = 'img/sound/waves.wav';

//adding a keydown function to make audio autoplay for a given time
window.addEventListener('keydown', (event) => {
    // audio.play();
    setTimeout(() => {
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 3000);
    }, 2000);
});

//preventing default on nav a's
links.forEach(() => {
    for (let link of links) {
        link.addEventListener ('click', (event) => {
        console.log('still testing');
        event.preventDefault();
        });
    }
});


//load event listener
window.addEventListener('load', (event) => {
        console.log('testing loading');
        const welcome = document.querySelectorAll('h2');
        document.querySelector('.main-navigation').style.color = '#09BA82';
        const navLinks = document.querySelectorAll('nav a');
        console.log('navLinks');
        navLinks.forEach((item) => {
            item.style.color = '#09BA82';
        })
        for (items of welcome) {
            items.style.color = '#09BA82';
        }
        TweenMax.from(welcome, 1.5, { y :520, repeat:0, ease:Linear.easeNone});
    });

//setting remaining headers to match changes in load listener
destArrHeaders[0].style.color = '#09BA82';
destArrHeaders[1].style.color = '#09BA82';
destArrHeaders[2].style.color = '#09BA82';

//used the more complicated forEach, combined with a for of loop to demonstrate knoweledge, will use Array.from below as an easier method to isolate each button
button.forEach(() =>  {
    for(let each of button) {
        each.addEventListener('mouseover', (event) => {
            // make buttons pulse when moused over
            TweenMax.to(each, 0.5, {scale: 1.25, repeat: -1, ease: Back.easeOut, yoyo:true, yoyoEase:true, background: 'hotpink',});
            // make buttons stop puling when mouse leaves
            each.addEventListener ('mouseleave', (event) => {
                TweenMax.to(each, 1, {scale: 1, background: '#17A2B8', color: '#FFFFFF'});
            });
            each.addEventListener('click', () => {
                // hide the intro section when button is clicked
                intro.style.display = 'none';
                //give margin top to desitnation section to avoid nav bar
                contentDest.style.paddingTop = '100px';
                //Changing the text in the pick your destination h2
                document.querySelector('.content-destination h2').textContent = `You're only a click away from gettin Away!`;
                //Changing the paragraph text in .content-destination
                document.querySelector('.content-destination p').textContent = `We offer 3 amazing expierences. Do you want to explore ruins without ruining your PTO bank? Check out Cancun! Are your sights set on the highest peaks? It must be Mount Everset for you! Desire deep sea adventures? Why not try the Cayman Islands?`;
                //change first destination div h4's
                destArrHeaders[0].textContent = 'Cancun';
                destArrHeaders[1].textContent = 'Mount Everest';
                destArrHeaders[2].textContent = 'The Cayman Islands';
                //hide the content section when button is clicked
                for(let each of contentSection) {
                    each.style.display = 'none'; 
                }
                
                //using Array.from as a simpler more readable way to target each button
                //change image, remove other content and buttons
                buttArr[0].addEventListener('click', (event) => {
                    pic.src = 'img/cancun.jpg';
                })
                buttArr[1].addEventListener('click', (event) => {
                    let pic = document.querySelector('.content-destination img');
                    pic.src = 'img/everest.jpg';
                })
                buttArr[2].addEventListener('click', (event) => {
                    let pic = document.querySelector('.content-destination img');
                    pic.src = 'img/cayman.jpg';
                });
            });
        });
        
        
    }
});
