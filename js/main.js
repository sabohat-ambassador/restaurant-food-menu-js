const rowel = document.getElementById('table')
const ballEl = document.getElementsByClassName('cartball')[0]
const asideEl = document.getElementsByClassName('sidebar')[0]
const arrowEl = document.getElementsByClassName('icon-left')[0]
const bigDiv = document.getElementById('bigDiv')

ballEl.addEventListener('click', function () {
  asideEl.style.display = 'flex'
})
arrowEl.addEventListener('click', function () {
  asideEl.style.display = 'none'
})


let dishTypes = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Salads', 'Desserts']


let dishes = [
  new Dish('Spicy seasoned seafood noodles', '$ 2.29 , 20 Bowls available', 'img/image 0.png', 0, 'Add to cart'),
  new Dish('Salted Pasta with mushroom sauce', '$ 2.69 , 11 Bowls available', 'img/image 1.png', 0, 'Add to cart'),
  new Dish('Beef dumpling in hot and sour soup', '$ 2.99, 16 Bowls available', 'img/image 2.png', 0, 'Add to cart'),
  new Dish('Healthy noodle with spinach leaf', '$ 3.29, 22 Bowls available', 'img/image 3.png', 0, 'Add to cart'),
  new Dish('Spicy instant noodle with special omelette', '$ 3.59, 17 Bowls available', 'img/image 4.png', 0, 'Add to cart'),
  new Dish('Spicy seasoned seafood noodles', '$ 2.29, 20 Bowls available', 'img/image 0.png', 0, 'Add to cart'),
  new Dish('Salted Pasta with mushroom sauce', '$ 2.69, 11 Bowls available', 'img/image 1.png', 0, 'Add to cart'),
  new Dish('Beef dumpling in hot and sour soup', '$ 2.99, 16 Bowls available', 'img/image 2.png', 0, 'Add to cart'),
  new Dish('Healthy noodle with spinach leaf', '$ 3.29, 22 Bowls available', 'img/image 3.png', 0, 'Add to cart'),
  new Dish('Spicy instant noodle with special omelette', '$ 3.59, 17 Bowls available', 'img/image 4.png', 0, 'Add to cart'),

  new Dish('AGLIO OLIO ZOODLES WITH SUMMER VEGETABLES AND SHRIMP', '$ 3.29, 20 Bowls available', 'img/cold1.jpg', 1, 'Add to cart'),
  new Dish('Cold sesame cucumber noodles', '$ 2, 11 Bowls available', 'img/cold2.jpg', 1, 'Add to cart'),
  new Dish('CLEAN BROCCOLI SALAD WITH CREAMY ALMOND DRESSING', '$ 3.99, 16 Bowls available', 'img/cold3.jpg', 1, 'Add to cart'),
  new Dish('QUINOA AND SHAVED CARROT SALAD WITH CHICKPEAS, CURRANTS AND CASHEWS', '$ 3.29, 22 Bowls available', 'img/cold4.jpg', 1, 'Add to cart'),
  new Dish('SPIRALIZED SUSHI BOWL WITH SALMON SASHIMI AND GINGER MISO DRESSING', '$ 3.59, 17 Bowls available', 'img/cold5.jpg', 1, 'Add to cart'),

  new Dish('Broccoli Chowder', '$ 3.29, 20 Bowls available', 'img/soup1.jpg', 2, 'Add to cart'),
  new Dish('Country Fish Chowder', '$ 2, 11 Bowls available', 'img/soup2.jpg', 2, 'Add to cart'),
  new Dish('Cream of Chicken Soup', '$ 3.99, 16 Bowls available', 'img/soup3.jpg', 2, 'Add to cart'),
  new Dish('Grandmas Chicken n Dumpling Soup', '$ 3.29, 22 Bowls available', 'img/soup4.jpg', 2, 'Add to cart'),
  new Dish('Weeknight Turkey Tortilla Soup', '$ 3.59, 17 Bowls available', 'img/soup5.jpg', 2, 'Add to cart'),

  new Dish('Grilled Potatoes', '$ 3.29, 20 Bowls available', 'img/gril1.jpg', 3, 'Add to cart'),
  new Dish('Grilled Cabbage Steaks', '$ 2, 11 Bowls available', 'img/gril2.jpg', 3, 'Add to cart'),
  new Dish('Kentucky Grilled Chicken', '$ 3.99, 16 Bowls available', 'img/gril3.jpg', 3, 'Add to cart'),
  new Dish('Sticky Grilled Chicken', '$ 3.29 ,22 Bowls available', 'img/gril4.jpg', 3, 'Add to cart'),
  new Dish('The Best Grilled Sirloin Tip Roast', '$ 3.59, 17 Bowls available', 'img/gril5.jpg', 3, 'Add to cart'),

  new Dish('Asian Slaw', '$ 3.29, 20 Bowls available', 'img/sal1.jpg', 4, 'Add to cart'),
  new Dish('Kale Salad with Carrot Ginger Dressing', '$ 2, 11 Bowls available', 'img/sal2.jpg', 4, 'Add to cart'),
  new Dish('Shaved Brussels Sprout Salad', '$ 3.99, 16 Bowls available', 'img/sal3.jpg', 4, 'Add to cart'),
  new Dish('Best Broccoli Salad', '$ 3.29, 22 Bowls available', 'img/sal4.jpg', 4, 'Add to cart'),
  new Dish('Orzo salad', '$ 3.59, 17 Bowls available', 'img/sal5.jpg', 4, 'Add to cart'),

  new Dish('Strawberry-mochi', '$ 3.29, 20 Bowls available', 'img/des1.jpg', 5, 'Add to cart'),
  new Dish('New York Cheesecake', '$ 2, 11 Bowls available', 'img/des2.jpg', 5, 'Add to cart'),
  new Dish('Strawberry tarte tatin', '$ 3.99, 16 Bowls available', 'img/des3.jpg', 5, 'Add to cart'),
  new Dish('Apple-pie', '$ 3.29, 22 Bowls available', 'img/des4.jpg', 5, 'Add to cart'),
  new Dish('Turkey Pahlava', '$ 3.59, 17 Bowls available', 'img/des5.jpg', 5, 'Add to cart'),

]



function Dish(name, price, photo, dishTypes, addcart) {
  this.name = name;
  this.price = price;
  // this.remnant = remnant;
  this.photo = photo;
  this.dishTypes = dishTypes;
  this.addcart = addcart
}

function createDishDiv(el, index) {
  let dish = document.createElement('div');
  dish.className = 'card';

  let name = document.createElement('p');
  name.className = 'food-name';
  name.innerText = el.name;

  let span = document.createElement('span');
  span.className = 'price';
  span.innerText = el.price;



  let image = document.createElement('img');
  image.className = 'photo';
  image.src = el.photo;

  let button = document.createElement('button')
  button.className = 'but ' + index;
  button.innerText = el.addcart

  dish.appendChild(image);
  dish.appendChild(name);
  dish.appendChild(span);
  dish.appendChild(button)

  rowel.appendChild(dish);



}


let bascet = []
rowel.addEventListener('click', function (event) {

  if (event.target.className.includes('but')) {
    let narsa = event.target.className.split(' ').pop();

    if (!bascet.includes(narsa)) {
      bascet.push(narsa)
    }
    localStorage.setItem('key', JSON.stringify(bascet))
    filDiv()
  }

})



function filDiv() {
  let olinganmassiv = JSON.parse(localStorage.getItem('key'));
  bigDiv.innerHTML = ' ';
  for (let i = 0; i < olinganmassiv.length; i++) {

    let Dishindex = olinganmassiv[i]
    createcart(dishes[Dishindex], Dishindex)
  }
}



function createcart(el, index) {
  let divel = document.createElement('div')
  divel.className = 'foodcard';

  let image = document.createElement('img')
  image.className = 'photo'
  image.src = el.photo

  let foodName = document.createElement('div')
  foodName.className = 'foodname'

  let name = document.createElement('p')
  name.className = 'food-name'
  name.innerText = el.name

  let price = document.createElement('span')
  price.className = 'price'
  price.innerText = el.price


  let butDelate = document.createElement('button')
  butDelate.className = 'delate remove'
  butDelate.innerHTML = '<i class="icon-delate remove"></i>'
  butDelate.setAttribute('data-index', index)

  divel.appendChild(image)
  divel.appendChild(foodName)
  foodName.appendChild(name)
  foodName.appendChild(price)
  divel.appendChild(butDelate)
  bigDiv.appendChild(divel)

}

bigDiv.addEventListener('click', function (event) {
  if (event.target.className.includes('remove')) {
    let oshaIndex = event.target.getAttribute('data-index')
    // qilish iconka bosilhanda ham kerak
    // console.log(oshaIndex)
    let korzinkamassiv = JSON.parse(localStorage.getItem('key'));
    const index = korzinkamassiv.indexOf(oshaIndex);
    korzinkamassiv.splice(index, 1);
    
    filDiv()
  }
})



// for(let i = 0; i < dishes.length; i++) {
//   createDishDiv(i);
// }


function funksiya(arr) {
  rowel.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    createDishDiv(arr[i], i)
  }
}
const nav = document.getElementsByClassName('main-nav')[0]

nav.addEventListener('click', function (e) {
  let type = e.target.getAttribute('data-type');
  if (type) {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active')
    }

    e.target.classList.add('active')

    if (type == -1) {
      funksiya(dishes)
    } else {
      let filteredDishes = dishes.filter(function (el) {
        return el.dishTypes == type
      })
      funksiya(filteredDishes)
    }
  }

})

funksiya(dishes)




const inel = document.getElementById('input')
const cardel = document.getElementsByClassName('card')


document.addEventListener('keyup', findCard);


function findCard() {


  let searchedArr = dishes.filter(function (el) {
    return el.name.includes(inel.value)
  });

  funksiya(searchedArr);

}