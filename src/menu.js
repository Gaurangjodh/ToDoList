import './menu.css';

export default function menu() {
    const menuName = document.querySelector('#pageName');
    menuName.textContent = 'Menu';
    const contentDiv = document.querySelector("#content");
    contentDiv.style.display = 'grid';
    contentDiv.innerHTML = '';
    const pizza = menuCard('Pizza','https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Pizza is an italian dish made up of lots of cheese and love, you will not regret spending your money on this saucy disk!');
    const pasta = menuCard('Pasta','https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_better_homemade_pasta.jpg/1920px-A_better_homemade_pasta.jpg', 'Pasta is an italian dish made up of lots of cheese and love, you will not regret spending your money on this saucy disk!');
    const burger = menuCard('Burger','https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg', 'Burger is an German dish made up of lots of patty, buns and love, you will not regret spending your money on this saucy disk!');
    const sandwiches = menuCard('Sandwich','https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg', 'Sandwich is an Swedish dish made up of lots of sauces, bread and love, you will not regret spending your money on this saucy disk!');
    
    contentDiv.appendChild(pizza);
    contentDiv.appendChild(pasta);
    contentDiv.appendChild(burger);
    contentDiv.appendChild(sandwiches);
}

function menuCard(dish, srco, info){
    const card = document.createElement('div');
    card.classList.add('card');
    const dishImg = document.createElement('img');
    dishImg.src = srco;
    dishImg.classList.add('menuImg');
    const dishName = document.createElement('h4');
    dishName.classList.add('dishName');
    dishName.textContent = dish;
    const textBox = document.createElement('div');
    textBox.textContent = info;
    card.appendChild(dishImg);
    card.appendChild(dishName);
    card.appendChild(textBox);
    return card;
}