window.onload = function() {
    var body = document.body.classList;
    var header = document.getElementById('header').classList;
    var about = document.getElementById('about').classList;
    var contact = document.getElementById('contact').classList;
    setTimeout(function() {
        body.remove('is-preload');
    }, 200);

    function classOnClick(className, func){
        var elements = document.getElementsByClassName(className);
        for(var i = 0; i < elements.length; i++) {
            elements[i].onclick = func;
        }
    }
    classOnClick('show-about', function(){
        header.add('hiding')
        about.add('hiding')
        about.remove('hidden')
        setTimeout(function() {
            header.add('hidden')
            about.remove('hiding')
            body.add('showing-article');
            window.scrollTo(0,0)
        }, 200);
    })
    classOnClick('show-contact', function(){
        header.add('hiding')
        contact.add('hiding')
        contact.remove('hidden')
        setTimeout(function() {
            header.add('hidden')
            contact.remove('hiding')
            body.add('showing-article');
            window.scrollTo(0,0)
        }, 200);
    })
    classOnClick('close', function(){
        location.hash = '';
        var parent = this.parentElement.classList;
        header.add('hiding')
        header.remove('hidden')
        parent.add('hiding')
        setTimeout(function() {
            parent.remove('hiding')
            parent.add('hidden')
            header.remove('hiding')
            body.remove('showing-article');
            window.scrollTo(0,0)
            removeHash()
        }, 200);
    })
    function removeHash () { 
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    
}