const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('.gallery');
ul.style.display = 'flex';
ul.style.justifyContent = 'center';
ul.style.gap = '16px';
ul.style.listStyle = 'none';
ul.style.flexWrap = 'wrap';
ul.style.fontSize = '0';
ul.style.padding = '0';

const li = images.map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}" width="100%"></li>`;
} ).join(''); 

ul.insertAdjacentHTML('afterbegin', li);
