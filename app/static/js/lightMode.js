let theme = 0

function day(){
    document.documentElement.style.setProperty('--pColor', '#242424');
    document.documentElement.style.setProperty('--titleColor', '#000000');
    document.documentElement.style.setProperty('--subTitleColor', '#666666');
    document.documentElement.style.setProperty('--aColor', '#000000');
    document.documentElement.style.setProperty('--aColorHover', '#000000');
    document.documentElement.style.setProperty('--chip', '#6c757d');
    document.documentElement.style.setProperty('--svgColor', '#000000');
    document.documentElement.style.setProperty('--invertedP', '#ffffff');
    localStorage.setItem('switchLight', 'day');
}

function night(){
    document.documentElement.style.setProperty('--pColor', '#b4b4b4');
    document.documentElement.style.setProperty('--titleColor', '#ffffff');
    document.documentElement.style.setProperty('--subTitleColor', '#8f8f8f');
    document.documentElement.style.setProperty('--aColor', '#ffffff');
    document.documentElement.style.setProperty('--aColorHover', '#ffffff');
    document.documentElement.style.setProperty('--chip', '#ffffff');
    document.documentElement.style.setProperty('--svgColor', '#ffffff');
    document.documentElement.style.setProperty('--invertedP', '#000000');
    localStorage.removeItem('switchLight');
}

$( document ).ready(function() {
    var switchLightSaved = localStorage.getItem('switchLight');
    if(switchLightSaved == "day"){
        document.getElementById("switchLight").click();
    }else{
        night();
    }
});

$('#switchLight').on('click', function () { 
    $('body').toggleClass('dayBackground'); 
    if(theme == 0){ //Day
        day();
        theme = 1;
    }else{ //Night
        night();
        theme = 0;
    }
});