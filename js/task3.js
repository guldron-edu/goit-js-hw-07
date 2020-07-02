const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createElement = element => {
  const liRef = document.createElement('li');
  liRef.classList.add('element');
  //******************************************************//
  // const imgRef = document.createElement('img');
  // imgRef.classList.add('element__img');
  // imgRef.src = element.url;
  // imgRef.alt = element.alt;
  // liRef.appendChild(imgRef);
  //******************************************************//
  // liRef.insertAdjacentElement('beforeend', imgRef);
  //******************************************************//
  liRef.insertAdjacentHTML(
    'beforeend',
    `<img class = "element__img" src = "${element.url}" alt = "${element.alt}">`,
  );

  return liRef;
};

const imgListRef = images.map(image => createElement(image));

const htmlLink = document.querySelector('#gallery');
htmlLink.append(...imgListRef);
