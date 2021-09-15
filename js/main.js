const rowel = document.getElementById('table')

let dishTypes = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Salads' ,'Desserts']



let dishes = [
    new Dish('Spicy seasoned seafood noodles' , '$ 2.29', '20 Bowls available', 'img/image 0.png' , 0),
    new Dish('Salted Pasta with mushroom sauce' , '$ 2.69', '11 Bowls available', 'img/image 1.png' , 0),
    new Dish('Beef dumpling in hot and sour soup' , '$ 2.99', '16 Bowls available', 'img/image 2.png' , 0),
    new Dish('Healthy noodle with spinach leaf' , '$ 3.29', '22 Bowls available', 'img/image 3.png' , 0),
    new Dish('Spicy instant noodle with special omelette' , '$ 3.59', '17 Bowls available', 'img/image 4.png' , 0),
    new Dish('Spicy seasoned seafood noodles' , '$ 2.29', '20 Bowls available', 'img/image 0.png' , 0),
    new Dish('Salted Pasta with mushroom sauce' , '$ 2.69', '11 Bowls available', 'img/image 1.png' , 0),
    new Dish('Beef dumpling in hot and sour soup' , '$ 2.99', '16 Bowls available', 'img/image 2.png' , 0),
    new Dish('Healthy noodle with spinach leaf' , '$ 3.29', '22 Bowls available', 'img/image 3.png' , 0),
    new Dish('Spicy instant noodle with special omelette' , '$ 3.59', '17 Bowls available', 'img/image 4.png' , 0),

    new Dish('AGLIO OLIO ZOODLES WITH SUMMER VEGETABLES AND SHRIMP' , '$ 3.29', '20 Bowls available', 'img/cold1.jpg' , 1),
    new Dish('Cold sesame cucumber noodles' , '$ 2', '11 Bowls available', 'img/cold2.jpg' , 1),
    new Dish('CLEAN BROCCOLI SALAD WITH CREAMY ALMOND DRESSING' , '$ 3.99', '16 Bowls available', 'img/cold3.jpg' , 1),
    new Dish('QUINOA AND SHAVED CARROT SALAD WITH CHICKPEAS, CURRANTS AND CASHEWS' , '$ 3.29', '22 Bowls available', 'img/cold4.jpg' , 1),
    new Dish('SPIRALIZED SUSHI BOWL WITH SALMON SASHIMI AND GINGER MISO DRESSING' , '$ 3.59', '17 Bowls available', 'img/cold5.jpg' , 1),

    new Dish('Broccoli Chowder' , '$ 3.29', '20 Bowls available', 'img/soup1.jpg' , 2),
    new Dish('Country Fish Chowder' , '$ 2', '11 Bowls available', 'img/soup2.jpg' , 2),
    new Dish('Cream of Chicken Soup' , '$ 3.99', '16 Bowls available', 'img/soup3.jpg' , 2),
    new Dish('Grandmas Chicken n Dumpling Soup' , '$ 3.29', '22 Bowls available', 'img/soup4.jpg' , 2),
    new Dish('Weeknight Turkey Tortilla Soup' , '$ 3.59', '17 Bowls available', 'img/soup5.jpg' , 2),

    new Dish('Grilled Potatoes' , '$ 3.29', '20 Bowls available', 'img/gril1.jpg' , 3),
    new Dish('Grilled Cabbage Steaks' , '$ 2', '11 Bowls available', 'img/gril2.jpg' , 3),
    new Dish('Kentucky Grilled Chicken' , '$ 3.99', '16 Bowls available', 'img/gril3.jpg' , 3),
    new Dish('Sticky Grilled Chicken' , '$ 3.29', '22 Bowls available', 'img/gril4.jpg' , 3),
    new Dish('The Best Grilled Sirloin Tip Roast' , '$ 3.59', '17 Bowls available', 'img/gril5.jpg' , 3),

    new Dish('Asian Slaw' , '$ 3.29', '20 Bowls available', 'img/sal1.jpg' , 4),
  new Dish('Kale Salad with Carrot Ginger Dressing' , '$ 2', '11 Bowls available', 'img/sal2.jpg' , 4),
  new Dish('Shaved Brussels Sprout Salad' , '$ 3.99', '16 Bowls available', 'img/sal3.jpg' , 4),
  new Dish('Best Broccoli Salad' , '$ 3.29', '22 Bowls available', 'img/sal4.jpg' , 4),
  new Dish('Orzo salad' , '$ 3.59', '17 Bowls available', 'img/sal5.jpg' , 4),

  new Dish('Strawberry-mochi' , '$ 3.29', '20 Bowls available', 'img/des1.jpg' , 5),
  new Dish('New York Cheesecake' , '$ 2', '11 Bowls available', 'img/des2.jpg' , 5),
  new Dish('Strawberry tarte tatin' , '$ 3.99', '16 Bowls available', 'img/des3.jpg' , 5),
  new Dish('Apple-pie' , '$ 3.29', '22 Bowls available', 'img/des4.jpg' , 5),
  new Dish('Turkey Pahlava' , '$ 3.59', '17 Bowls available', 'img/des5.jpg' , 5),
  
]



function Dish(name,price,remnant,photo, dishTypes) {
    this.name = name;
    this.price = price;
    this.remnant = remnant;
    this.photo = photo;
    this.dishTypes = dishTypes;
  }

  function createDishDiv(el) {
    let dish = document.createElement('div');
    dish.className = 'card';
  
    let name = document.createElement('p');
    name.className = 'food-name';
    name.innerText = el.name;
  
    let span = document.createElement('span');
    span.className = 'price';
    span.innerText = el.price;
  
    let remnant = document.createElement('p')
    remnant.className = ('remnant')
    remnant.innerText = el.remnant
    
    let image = document.createElement('img');
    image.className = 'photo';
    image.src = el.photo;
  
    dish.appendChild(image);
    dish.appendChild(name);
    dish.appendChild(span);
    dish.appendChild(remnant)
  
    rowel.appendChild(dish);
  }

  // for(let i = 0; i < dishes.length; i++) {
  //   createDishDiv(i);
  // }
  

  function funksiya(arr){
    rowel.innerHTML = '';
    for(let i=0; i< arr.length; i++){
      createDishDiv(arr[i])
    }
  }
  const nav = document.getElementsByClassName('main-nav')[0]

  nav.addEventListener('click', function(e){
    let type = e.target.getAttribute('data-type');
    if(type){
      const links = document.getElementsByTagName('a');

    for(let i=0; i<links.length; i++){
      links[i].classList.remove('active')
    }

    e.target.classList.add('active')

    if(type==-1){
      funksiya(dishes)
    } else{
      let filteredDishes = dishes.filter(function(el){
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


function findCard(){
    

    let searchedArr = dishes.filter(function(el) {
      return el.name.includes(inel.value)
    });

    funksiya(searchedArr);
   
}

