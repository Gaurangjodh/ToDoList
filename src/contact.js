export default function contact(){
    const content = document.querySelector('#content');
    content.innerHTML = ''
    const page = document.querySelector('#pageName');
    page.innerHTML = '';
    const image = document.createElement('img');
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63SWpfv_XLF4Zv_1429AWO7wr_v9u3lxLaQ&s';
    image.style.height = '90vh';
    image.style.width = '90vw';
    content.appendChild(image);
}