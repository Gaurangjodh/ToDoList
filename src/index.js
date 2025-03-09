import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';
import './styles.css';
home();
function loadButtons(){
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    aboutBtn.addEventListener('click', (e) => {
        about();
    });
    homeBtn.addEventListener('click', (e) => {
        home();
    })
    menuBtn.addEventListener('click', (e) => {
        menu();
    })
    contactBtn.addEventListener('click', (e)=> {
        contact();
    })
}
loadButtons();
