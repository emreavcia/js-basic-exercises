//local reviews data
const reviews = [

    {
       id:1,
       name: "Antony Chevrolet",
       job: "Dentist",
       img:"./images/person-1.jpg",
       text: "a person who is qualified to treat diseases and other conditions that affect the teeth and gums, especially the repair and extraction of teeth and the insertion of artificial ones."
    },
    {
       id:2,
       name: "Samir Ahmed",
       job: "Web Developer",
       img:"./images/person-2.jpg",
       text: "a person or company that develops World Wide Web software applications, or that creates and maintains websites."
    },
    {
       id:3,
       name: "Maria Hopkins",
       job: "Mechanical Engineer",
       img:"./images/person-3.jpg",
       text: "Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems."
    },
    {
       id:4,
       name: "Kelly Sikkema",
       job: "UX Designer",
       img:"./images/kelly-sikkema-JN0SUcTOig0-unsplash.jpg",
       text: "User experience design is a human-first way of designing products. Don Norman, a cognitive scientist and co-founder of the Nielsen Norman Group Design Consultancy, is credited with coining the term “user experience” in the late 1990s."
    },
    {
       id:5,
       name: "Houcine Niccip",
       job: "SEO Engineer",
       img:"./images/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg",
       text: "SEO Engineer is a professional SEO specialist and the best SEO expert in this field, who can guarantee your website to attain top search engine ranking position in Google, Yahoo, Bing etc."
    }
];

//select items

const imgPersona = document.getElementById("person-image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info= document.getElementById("info");

const  prevArrow = document.querySelector(".fa-chevron-left");
const  nextArrow = document.querySelector(".fa-chevron-right");
const  randomArrow = document.querySelector(".random-btn");

// set starting item 

let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function(){
showPerson(currentItem)
});

//show person based on item 

function showPerson(person){
    const item = reviews[person];
    imgPersona.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text
}

// show next person

nextArrow.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

// show previous person
prevArrow.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=(reviews.length-1);
    }
    showPerson(currentItem);
})


//show random person 

randomArrow.addEventListener("click", function(){
    currentItem=Math.floor(Math.random()*(reviews.length))
    showPerson(currentItem)
})