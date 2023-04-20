const pages = document.querySelectorAll(".pages-links li");

pages.forEach(function(page){
    page.addEventListener("click" , function(){
        document.querySelector(".sec-active").classList.remove("sec-active");
        document.querySelector(".li-active").classList.remove("li-active");
        document.getElementById(`${page.className}`).classList.add("sec-active");
        page.classList.add("li-active");
    })
})

document.querySelector(".nav-icon")?.addEventListener("click" , function(){
    const ul = document.querySelector(".pages-links");
    const expanded = ul.getAttribute('expanded') === 'true';
    ul.setAttribute('expanded', !expanded);
})

document.querySelectorAll("a svg").forEach(svg=>{
    svg.addEventListener("mouseover" , function(){
        svg.style.fill = `${svg.getAttribute("data-color")}`
    })
    svg.addEventListener('mouseleave' , function(){
        svg.style.fill = 'black'
    })
})

let projects= [
[
    './projects/p2-1.jpeg',
    './projects/p2-2.png',
],
[
    "./projects/p1-1.jpeg",
    './projects/p1-2.jpeg',
    './projects/p1-3.jpeg',
    './projects/p1-4.jpeg',
],
[
    './projects/p3-1.jpg',
    './projects/p3-2.jpg',
    './projects/p3-3.jpg',
    './projects/p3-4.jpg',
],
[
    './projects/p4-1.png',
    './projects/p4-2.png',
    './projects/p4-3.png',
    './projects/p4-4.png',
],
[
    './projects/p5-1.png',
    './projects/p5-2.png',
    './projects/p5-3.png'
]
];

document.querySelectorAll('.projects h1')?.forEach(project=>{
    project.addEventListener('click' , function(){
        document.querySelector(".h-active").classList.remove("h-active");
        project.classList.add("h-active");
        const images = document.querySelectorAll(".cup div span img");
        for(let i = 0 ; i < images.length; i++){
            const photoIndex = parseInt(project.getAttribute("image"))
            if(projects[photoIndex][i]){
                images[i].setAttribute('src' , projects[photoIndex][i]);
            }
            else {
                images[i].setAttribute('src' , projects[photoIndex][3-i])
            }
        }
    })
})