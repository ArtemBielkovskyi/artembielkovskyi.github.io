//Main js file with js fullpage plugin and some writen object animations 

new fullpage('#fullpage', {
    //fullpage settings setted up for the website
    autoScrolling: true,
    fitToSection: true,
    scrollingSpeed: 1600,
    scrollHorizontally: false,
    scrollOverflow: true,
    licenseKey: 'YOUR_KEY_HERE',
    anchors: ['home', 'about', 'Lifestyle', 'Expirience','Contact'],
    menu: '.header',
    //when we leave sections 
    onLeave: function(origin, destination, direction){
        // Remove the animation class and reset underline when leaving the section
        if (origin.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.remove('animate');
                link.blur(); // Reset focus state
            });
            //when we lave first section on the phone, hamburger menu dissapears 
            if(document.querySelector(".Unactive")) {
                document.querySelector('.hamburger').classList.remove('hamburgerstyle');
                document.querySelector('.hamburgerWrapper').style.height = '0';
            }
        }
        if (origin.index === 1 || origin.index === 3) {
            document.querySelector('.AboutMeInfo').classList.remove('show2');
            document.querySelector('.AboutMeImage').classList.remove('showImg');
        }
        if (destination.index === 2 || destination.index === 4) {
            document.querySelector('.EducationImg').classList.remove('EducationImgShow');
        }
    },
    // Add the animation class when the section is loaded
    afterLoad: function(origin, destination, direction){
        if (destination.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.add('animate');
            });
            document.querySelector('.header').style.opacity = '1';
            document.querySelector('.header').style.filter = 'blur(0)';
            document.querySelector('.header').style.transform = 'translateY(0)';
            document.querySelector('.hamburger').classList.add('hamburgerstyle');
            document.getElementById('headerSlider').classList.add('Unactive');
            //setting up size of the hamburger button, if its the phone screen, otherwise there going to be no button
            if(window.innerWidth < 768) {
                document.querySelector('.hamburgerWrapper').style.height = '10%';
            }
            if(window.innerWidth >= 768) {
                document.querySelector('.hamburgerWrapper').style.height = '0%';
            }
        }
        // Trigger AboutMeInfo and AboutMeImage animation when the about section is loaded
        if (destination.index === 1) {
            document.querySelector('.AboutMeInfo').classList.add('show2');
            document.querySelector('.AboutMeImage').classList.add('showImg');
        }
        //trigger image on education/experience section 
        if (destination.index === 3) {
            document.querySelector('.EducationImg').classList.add('EducationImgShow');
        }
        if (destination.index === 4) {
            document.querySelectorAll('.socialLink').forEach(link => {
                link.classList.add('socialShow');
            });
        }
    }
});

//setting logic for the hamburger button, writing animation when we click on it
function toggleHeaderSlider(loading) {
    var x = document.getElementById("headerSlider");
    if (x.style.transform === "translateX(0%)") {
        x.style.transform = "translateX(100%)"
        document.querySelector(".line1").style.rotate="0deg";
        document.querySelector(".line1").style.transition="all 0.5s";
        document.querySelector(".line1").style.marginTop="105px";
        document.querySelector(".line2").style.rotate="0deg";
        document.querySelector(".line2").style.transition="all 0.5s";
        document.querySelector(".line2").style.marginTop="105px";
        //we require to reload page otherwise after closing hamburger menu we can not scroll for soe reason
        setTimeout(function(){
            location.reload();
        },loading);
    } else {
        document.querySelector(".line1").style.rotate="-45deg";
        document.querySelector(".line1").style.transition="all 0.5s";
        document.querySelector(".line1").style.marginTop="105px";
        document.querySelector(".line2").style.rotate="45deg";
        document.querySelector(".line2").style.transition="all 0.5s";
        document.querySelector(".line2").style.marginTop="105px";
        document.getElementById('headerSlider').classList.remove('Unactive');
        x.style.transform = "translateX(0%)";
    }
}