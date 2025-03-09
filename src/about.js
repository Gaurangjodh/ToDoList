import './about.css';
export default function about(){
    const contentDiv = document.querySelector("#content");
    const page = document.querySelector('#pageName');
    page.innerHTML = '';
    contentDiv.style.display = 'flex';
    contentDiv.innerHTML = '';
    const textImgbox = document.createElement('div');
    textImgbox.classList.add('textBox');
    const h3 = document.createElement('h3');
    h3.textContent = "About Us!"
    contentDiv.appendChild(h3);
    const img = document.createElement('img');
    img.classList.add("aboutImg");
    img.src = "https://assets.architecturaldigest.in/photos/676c150b3afb923090218032/16:9/w_1600,c_limit/Untitled%20design%20-%202024-12-25T195152.755.jpg";
    textImgbox.appendChild(img);
    const para = document.createElement('p');
    para.textContent = "Our hotel dates back to 15th century B.C, thats right we have been serving to people even before christ's birth! Our hotel proudly stands in the mountain peaks of himalayas. We are honoured to be the only certified hotel to serve yeti foot soup legally. Please join us and embellish your tummies with the delicacies of B.C era.";
    para.textContent+= " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni voluptas delectus culpa, atque facilis. Quibusdam libero vel iusto reiciendis excepturi quia repellat dignissimos modi quis? Fugit, et sunt, est mollitia similique repellat aut deleniti sed reiciendis vitae eveniet neque autem ipsam optio. Maxime unde ab quae ratione obcaecati quam itaque delectus dolor non, voluptates quod at nam necessitatibus odit totam veniam incidunt mollitia architecto, aliquam quo pariatur? Vel nihil maiores officiis, ad culpa accusantium excepturi reiciendis dolor quo iure repellendus voluptatibus impedit itaque molestiae sint, praesentium et! Unde incidunt maxime quasi repudiandae ea voluptates reprehenderit sit inventore sunt nostrum."
    textImgbox.appendChild(para);
    contentDiv.appendChild(textImgbox);
}