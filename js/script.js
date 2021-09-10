// toggle

const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('show');
})

// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

// creating dynamic projects

const projectContainer = document.querySelector('.project-container');
projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all, ${project.tags}">
        <img src="assets/projects/${project.image}" alt="">
        <div class="content"><a href="${project.link}" target="_blank">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span></a>
        </div>
    </div>
    `
})

//filters

const filters = document.querySelectorAll('.filter-btn');
filters.forEach(filterBtn =>{
    filterBtn.addEventListener('click',()=>{
        let id = filterBtn.getAttribute('id');
        let projectCard = document.querySelectorAll('.project-card');
        projectCard.forEach(card =>{
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide')
            }else{
                card.classList.add('hide');
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})