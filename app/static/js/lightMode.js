let theme = 0

function getcookie(name = '') {
    let cookies = document.cookie;
    let cookiestore = {};
    
    cookies = cookies.split(";");
    
    if (cookies[0] == "" && cookies[0][0] == undefined) {
        return undefined;
    }
    
    cookies.forEach(function(cookie) {
        cookie = cookie.split(/=(.+)/);
        if (cookie[0].substr(0, 1) == ' ') {
            cookie[0] = cookie[0].substr(1);
        }
        cookiestore[cookie[0]] = cookie[1];
    });
    
    return (name !== '' ? cookiestore[name] : cookiestore);
}

function day(){
    document.documentElement.style.setProperty('--pColor', '#595959');
    document.documentElement.style.setProperty('--titleColor', '#000000');
    document.documentElement.style.setProperty('--aColor', '#000000');
    document.cookie = "switchLight=day"; 
}

function night(){
    document.documentElement.style.setProperty('--pColor', '#fff');
    document.documentElement.style.setProperty('--titleColor', '#fff');
    document.documentElement.style.setProperty('--aColor', '#fff');
    document.cookie = "switchLight=night"; 
}

$( document ).ready(function() {
    if(getcookie("switchLight") == "day"){
        $('body').toggleClass('dayBackground'); 
        day();
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