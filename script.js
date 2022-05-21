const hours = document.querySelector('.h')
const minutes = document.querySelector('.m')
const seconds = document.querySelector('.s')
const kun = document.querySelector('.kun')
const oy = document.querySelector('.oy')
const yil = document.querySelector('.yil')




function watch() {
    let time = new Date
    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    seconds.innerHTML = time.getSeconds()
    kun.innerHTML = time.getDate()
    oy.innerHTML = time.getDay()
    yil.innerHTML = time.getFullYear()
 
    setTimeout(() => {
        watch()
    }, 1000);
       if (hours.innerHTML < 10 ) {
        hours.innerHTML = '0' + time.getHours()
    }
    if (minutes.innerHTML < 10) {
        minutes.innerHTML = '0' + time.getMinutes()
    }
    if (seconds.innerHTML < 10) {
        seconds.innerHTML = '0' + time.getSeconds()
    }
    if (kun.innerHTML < 10) {
     kun.innerHTML =  '0' + time.getDate()
    }
    if (oy.innerHTML < 10) {
        oy.innerHTML =  '0' + time.getDay()
       }
    if (yil.innerHTML < 10) {
        yil.innerHTML =  '0' + time.getFullYear()
    }

}
watch()