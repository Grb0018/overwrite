const a = document.getElementById('box').querySelectorAll('span');
const b = document.getElementById('box').querySelectorAll('a');
const c = document.getElementById('box').querySelectorAll('e');
const d = document.getElementById('box').querySelectorAll('c');

function chk(){
    
    for(let i=0; i< a.length; i++){
            let b = i - 1 ;
        a[i].addEventListener('mouseover', function(ev){
            if(i > 0){
            if(window.getComputedStyle(a[b], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
            a[i].style.backgroundColor = '#89afec';
            a[i].style.color = 'transparent';
            if(i >13){setTimeout(e3,0)}
            if(i >13){setTimeout(function(){cha();            
            },0)}
        }
            else{ return false}}
            if(i >5){setTimeout(e2,000)}
            else{
                a[i].style.backgroundColor = '#89afec';
                a[i].style.color = 'transparent';
                document.getElementById('body').style.cursor = 'url(./image/glit.gif), auto;' ;
                setTimeout(e1,0)
            }
            document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
        })

            a[i].addEventListener('touchstart', function(ev){
                if(i > 0){
                if(window.getComputedStyle(a[b], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
                a[i].style.backgroundColor = '#89afec';
                a[i].style.color = 'transparent';
            }
                else{ return false}}
                if(i >5){setTimeout(e2,000)}
                if(i >12){setTimeout(e3,000)}
                else{
                    a[i].style.backgroundColor = '#89afec';
                    a[i].style.color = 'transparent';
                    document.getElementById('body').style.cursor = 'url(./image/glit.gif), auto;' ;
                    setTimeout(e1,0)
                }
                document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
            })
           
        }
    setTimeout(ch,500);
}
chk();
function e1(){
    b[0].style.backgroundColor = '#89afec';
}
function e2(){
    c[0].style.backgroundColor = '#89afec';
}
function e3(){
    d[0].style.backgroundColor = '#89afec';
    //d[1].style.backgroundColor = '#89afec';
}
function cha(){
    for(let i=0; i< b.length; i++){
            let c = i - 1 ;
        b[i].addEventListener('mouseover', function(ev){
            document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
            if(i > 0){
            if(window.getComputedStyle(b[c], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
            b[i].style.backgroundColor = '#89afec';
            b[i].style.color = 'transparent';
            if(i >7){setTimeout(function(){che2()},0)}
        
        }
            else{ return false}}
            else{
                b[i].style.backgroundColor = '#89afec';
                b[i].style.color = 'transparent';
            }})

            b[i].addEventListener('touchstart', function(ev){
                document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
                if(i > 0){
                if(window.getComputedStyle(b[c], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
                b[i].style.backgroundColor = '#89afec';
                b[i].style.color = 'transparent';
                if(i >7){setTimeout(function(){che2()},0)}
            
            }
                else{ return false}}
                else{
                    b[i].style.backgroundColor = '#89afec';
                    b[i].style.color = 'transparent';
                }}) 
        }
}

chk();


function che2(){
    for(let y=0; y< c.length; y++){
        let d = y - 1 ;
    c[y].addEventListener('mouseover', function(ev){
        document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
        if(y > 0){
        if(window.getComputedStyle(c[d], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
        c[y].style.backgroundColor = '#89afec';
        c[y].style.color = 'transparent';
        if(y >4){setTimeout(function(){che3()},0)}
    }
        else{ return false}}
        else{
            c[y].style.backgroundColor = '#89afec';
            c[y].style.color = 'transparent';
        }})

        c[y].addEventListener('touchstart', function(ev){
            document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
            if(y > 0){
            if(window.getComputedStyle(c[d], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
            c[y].style.backgroundColor = '#89afec';
            c[y].style.color = 'transparent';
            if(y >4){setTimeout(function(){che3()},0)}
        }
            else{ return false}}
            else{
                c[y].style.backgroundColor = '#89afec';
                c[y].style.color = 'transparent';
            }})
    }
}
function che3(){
    for(let e=0; e< d.length; e++){
        let f = e - 1 ;
    d[e].addEventListener('mouseover', function(ev){
        document.getElementById('glow').style.display = 'block'
            document.getElementById('glow').style.top = ev.clientY - 20 + 'px';
            document.getElementById('glow').style.left = ev.clientX - 35 + 'px' ;
            setTimeout(()=>{document.getElementById('glow').style.display = 'none'},250)
        if(e > 0){
        if(window.getComputedStyle(d[f], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
        d[e].style.backgroundColor = '#89afec';
        d[e].style.color = 'transparent';
        
    
    }
        else{ return false}}
        else{
            d[e].style.backgroundColor = '#89afec';
            d[e].style.color = 'transparent';
        }
        if(window.getComputedStyle(d[8], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)'){
            animate();
        }
    })
        
    }
    
}
function animate(){
    document.getElementById('box').style.display = 'none';
    alert('its animation time')
}
function blue(){
    document.getElementById('color').innerHTML= 'blue'
}
function red(){
    document.getElementById('color').innerHTML= 'red'
}
function green(){
    document.getElementById('color').innerHTML= 'green'
}

function all(){
    if(window.getComputedStyle(a[1], null).getPropertyValue("background-color") === 'rgb(137, 175, 236)' ){
        alert('one')
    }
}
all();