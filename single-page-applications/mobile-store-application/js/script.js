let products = [
    {
      "id": 1,
      "name": "Sony Xperia Z3",
      "price": 899,
      "specs": {
        "manufacturer": "Sony",
        "storage": 16,
        "os": "Android",
        "camera": 15
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/sony-xperia-z3.jpg",
        "large": "images/sony-xperia-z3-large.jpg"
      }
    },
    {
      "id": 2,
      "name": "Iphone 6",
      "price": 899,
      "specs": {
        "manufacturer": "Apple",
        "storage": 16,
        "os": "iOS",
        "camera": 8
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/iphone6.jpg",
        "large": "images/iphone6-large.jpg"
      }
    },
    {
      "id": 3,
      "name": "HTC One M8",
      "price": 899,
      "specs": {
        "manufacturer": "HTC",
        "storage": 32,
        "os": "Android",
        "camera": 5
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/htc-one.jpg",
        "large": "images/htc-one-large.jpg"
      }
    },
    {
      "id": 4,
      "name": "Galaxy Alpha",
      "price": 899,
      "specs": {
        "manufacturer": "Samsung",
        "storage": 32,
        "os": "Android",
        "camera": 12
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/galaxy-alpha.jpg",
        "large": "images/galaxy-alpha-large.jpg"
      }
    },
    {
      "id": 5,
      "name": "Nokia Lumia",
      "price": 450,
      "specs": {
        "manufacturer": "Nokia",
        "storage": 16,
        "os": "Windows",
        "camera": 5
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/nokia-lumia.jpg",
        "large": "images/nokia-lumia-large.jpg"
      }
    },
    {
      "id": 6,
      "name": "Zte Nubia",
      "price": 399,
      "specs": {
        "manufacturer": "ZTE",
        "storage": 32,
        "os": "Android",
        "camera": 12
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/zte-nubia.jpg",
        "large": "images/zte-nubia-large.jpg"
      }
    },
    {
      "id": 7,
      "name": "Samsung Galaxy S5",
      "price": 399,
      "specs": {
        "manufacturer": "Samsung",
        "storage": 16,
        "os": "Android",
        "camera": 15
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/galaxy-s5.jpg",
        "large": "images/galaxy-s5-large.jpg"
      }
    },
    {
      "id": 8,
      "name": "Iphone 5S",
      "price": 399,
      "specs": {
        "manufacturer": "Apple",
        "storage": 16,
        "os": "iOS",
        "camera": 8
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
      "rating": 4,
      "image": {
        "small": "images/iphone5s.jpg",
        "large": "images/iphone5s-large.jpg"
      }
    }
  ]
 
 
   let productsList = document.getElementById('products-list');

   for( let i=1;i<products.length;i++){
        let listItem =document.createElement('li');
       
        let productImage = document.createElement('a');
   let images= document.createElement('img');
    images.src =products[i].image.small;
     productImage.appendChild(images)
     listItem.appendChild(productImage);
     let productName= document.createElement('h2');
     productName.innerHTML=products[i].name;
     listItem.appendChild(productName);

     const productDescription = document.createElement('ul');
productDescription.classList.add('description')
     const manufacturer = document.createElement('li');
    const manufacturerName = document.createElement('span');
     manufacturerName.innerHTML = "Manufacturer:" + products[i].specs.manufacturer;
manufacturer.appendChild(manufacturerName);
productDescription.appendChild(manufacturer);

 const storage = document.createElement('li');
 const storageSize = document.createElement('span');
storageSize.innerHTML = "Storage :"+products[i].specs.storage +"GB";
storage.appendChild(storageSize);
productDescription.appendChild(storage);

const operatingSystem = document.createElement('li');
const operatingSystemName = document.createElement('span');
operatingSystemName.innerHTML = "OS :"+products[i].specs.os;
operatingSystem.appendChild(operatingSystemName);
productDescription.appendChild(operatingSystem);


const camera = document.createElement('li');
const cameraPixel = document.createElement('span');
cameraPixel.innerHTML = "Camera :" + products[i].specs.camera +"Mpx";
camera.appendChild(cameraPixel);
productDescription.appendChild(camera);
listItem.appendChild(productDescription)

const button = document.createElement('button');
button.innerHTML = 'Buy Now!';
listItem.appendChild(button);

const para = document.createElement('p');
para.classList.add('product-price');
para.innerHTML = products[i].price +"$";
listItem.appendChild(para);
productsList.appendChild(listItem)


listItem.addEventListener('click', function(){
  $('#myModal').modal('show');
  document.getElementById("myImg").src = products[i].image.large;
  document.getElementById('name').innerHTML = products[i].name;
  document.getElementById('description').innerHTML =products[i].description;
})


};

