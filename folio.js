// const main =() => {
//     const button=document.querySelector('#menu_bar');
//     const nav=document.querySelector('#mob_item');
//     const closebtn=document.querySelector('#btn');
//     button.addEventListener("click",()=>{
//         nav.style.display="flex";
//     });
//     closebtn.addEventListener("click",()=>{
//         nav.style.display="none";
//     });
// };

// main();
// const main = () => {
//     const button = document.querySelector('#menu_bar');
//     const nav = document.querySelector('#mob_item');
//     const closebtn = document.querySelector('#croos-btn'); // Corrected selector
//     button.addEventListener("click", () => {
//         nav.style.display = "flex";
//     });
//     closebtn.addEventListener("click", () => {
//         nav.style.display = "none";
//     });
// };

// main();
// const main = () => {
//     const button = document.querySelector('#menu_bar');
//     const nav = document.querySelector('.mob_item'); // Corrected selector
//     const closebtn = document.querySelector('#croos-btn');
    
//     button.addEventListener("click", () => {
//         nav.style.display = "flex";
//     });
    
//     closebtn.addEventListener("click", () => {
//         nav.style.display = "none";
//     });
// };

// main();
const main = () => {
    const button = document.querySelector('#menu_bar');
    const nav = document.querySelector('.mob_item');
    const closebtn = document.querySelector('#croos-btn');

    button.addEventListener("click", () => {
        nav.style.display = "flex";
    });

    closebtn.addEventListener("click", () => {
        nav.style.display = "none";
        closebtn.style.display = "none"; // Add this line to hide the close button
    });
};

main();



