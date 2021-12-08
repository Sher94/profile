const images = [
    'https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/03/11/23/05/chain-4049725_1280.jpg'
]


let center = document.querySelector('.center');
let left = document.querySelector('.left ');
let right = document.querySelector('.right ');
let current = 0;
let load = document.querySelector('.load');






center.style.backgroundImage =`url(https://picsum.photos/${center.clientWidth}/${center.clientHeight})`;
// center.style.backgroundImage = `url(${images[0]})`;






right.addEventListener('click', ()=>{

    load.style.opacity = '1';
    load.style.animationPlayState = 'running';


    let img = new Promise((res,rej)=>{
        res(fetch(`https://picsum.photos/${center.clientWidth}/${center.clientHeight}`).then(res => res.url));

    })

    img.then(res => {
        load.style.opacity = '0';
        load.style.animationPlayState = 'paused';
        center.style.backgroundImage =`url(${res})`;
        
    }) })

left.addEventListener('click', ()=>{

        load.style.opacity = '1';
        load.style.animationPlayState = 'running';
    
    
        let img = new Promise((res,rej)=>{
            res(fetch(`https://picsum.photos/${center.clientWidth}/${center.clientHeight}`).then(res => res.url));
    
        })
    
        img.then(res => {
            load.style.opacity = '0';
            load.style.animationPlayState = 'paused';
            center.style.backgroundImage =`url(${res})`;
            
        })
    
})


