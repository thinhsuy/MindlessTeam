var lastScrollTop = 0;


function FistState(){
    var icons = document.querySelectorAll("#icon");
    for (var i = 0; i < icons.length; i++) {
        icons[i].style.transition='all 1s';
        icons[i].style.transform = 'translateY(50%)';
    }
    var ourthought = document.querySelector('#ourthought');
    ourthought.style.position = 'relative';
    ourthought.style.left = '10rem';
    ourthought.style.opacity = '0';
    ourthought.style.transition = 'all 1s';

    var members = document.querySelectorAll("#membername");
    for (var i = 0; i < members.length; i++) {
        members[i].style.transition='all 1s';
        members[i].style.transform = 'translateX(-50%)';
    }

    var sec1_images = document.querySelectorAll("#section1image");
    for (var i = 0; i < sec1_images.length; i++) {
        sec1_images[i].style.transition='all 1s';
        sec1_images[i].style.transform = 'translateX(-100%)';
        sec1_images[i].style.opacity = '0';
    }
    var section1 = document.querySelector('#carousel_7117');
    var sec1text = document.querySelector('#sec1text');
    var sec1header = document.querySelector('#sec1header');
    var sec1bg = document.querySelector('#sec1bg');
    section1.style.transition='all 1s';
    sec1text.style.transition='all 1s';
    sec1header.style.transition='all 1s';
    sec1bg.style.transition='all 1s';
    section1.style.left='-100%';
    sec1text.style.left='-200%';
    sec1header.style.left='-200%';
    sec1bg.style.left='-200%';
    sec1text.style.opacity='0';
    sec1header.style.opacity='0';
}

function FirstIntro(){
    var section1 = document.querySelector('#carousel_7117');
    var sec1text = document.querySelector('#sec1text');
    var sec1header = document.querySelector('#sec1header');
    var sec1bg = document.querySelector('#sec1bg');
    section1.style.left = '0%';
    sec1text.style.left = '0%';
    sec1header.style.left = '0%';
    sec1bg.style.left = '0%';
    sec1bg.style.transitionDelay = '0.5s';
    sec1header.style.transitionDelay = '1s';
    sec1text.style.transitionDelay = '1.5s';
    sec1text.style.opacity='1';
    sec1header.style.opacity='1';
}

function isDetectScrollOn(element, elementVisible=0){
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) return true;
    else return false;
}

function DetectScrollDirection(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        lastScrollTop = st <= 0 ? 0 : st;
        return "downscroll";
    } else {
        lastScrollTop = st <= 0 ? 0 : st;
        return "upscroll";   
    }
}

function IconsScrollMove(){
    var icons = document.querySelectorAll("#icon");
    for (var i = 0; i < icons.length; i++) {
        if (isDetectScrollOn(icons[i], elementVisible=0)){
            icons[i].style.transitionDelay = '0.'+ i+2 + 's';
            icons[i].style.opacity = '1';
            icons[i].style.transform = 'translateY(0)';
        } else {
            icons[i].style.opacity = '0';
            icons[i].style.transform = 'translateY(70%)';
        }
    }
}

function MemberNameScrollMove(){
    var members = document.querySelectorAll("#membername");
    for (var i = 0; i < members.length; i++) {
        if (isDetectScrollOn(members[i], elementVisible=0)){
            members[i].style.transitionDelay = '0.'+ i+2 + 's';
            members[i].style.opacity = '1';
            members[i].style.transform = 'translateX(0)';
        } else {
            members[i].style.opacity = '0';
            members[i].style.transform = 'translateX(-50%)';
        }
    }
}

function OurThoughtScrollMove(){
    var ourthought = document.querySelector('#ourthought');
    if (isDetectScrollOn(ourthought, elementVisible=50)){
        ourthought.style.left = '0rem';
        ourthought.style.opacity = '1';
    } else {
        ourthought.style.left = '10rem';
        ourthought.style.opacity = '0';
    }
}

function SecImagesScrollMove(){
    var sec1_images = document.querySelectorAll("#section1image");
    for (var i = 0; i < sec1_images.length; i++) {
        if (isDetectScrollOn(sec1_images[i], elementVisible=-100)){
            sec1_images[i].style.transitionDelay = '0.'+ i+2 + 's';
            sec1_images[i].style.opacity = '1';
            sec1_images[i].style.transform = 'translateX(0)';
        } else {
            sec1_images[i].style.opacity = '0';
            sec1_images[i].style.transform = 'translateX(-100%)';
        }
    }
}

function scrollEvent(){
    IconsScrollMove();
    OurThoughtScrollMove();
    MemberNameScrollMove();
    SecImagesScrollMove();
}

window.addEventListener("scroll", scrollEvent, false);


FistState();
window.addEventListener(
    'load',
    function () {
        setTimeout(
            FirstIntro,
            500
        );
    }
);
