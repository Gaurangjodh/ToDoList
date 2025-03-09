import "./home.css";
export default function home(){
    const contentDiv = document.querySelector("#content");
    contentDiv.style.display = 'flex';
    const page = document.querySelector('#pageName');
    page.innerHTML = '';
    contentDiv.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.textContent = "Hi, welcome to our hotel!"
    contentDiv.appendChild(h3);
    const img = document.createElement('img');
    img.src = "https://assets.architecturaldigest.in/photos/676c150b3afb923090218032/16:9/w_1600,c_limit/Untitled%20design%20-%202024-12-25T195152.755.jpg";
    contentDiv.appendChild(img);
}