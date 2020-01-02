const container = document.getElementById('container');
const loading = document.querySelector('.loading');

const getRandomNr = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Scroll Function
// scrollTop = Total scroll amount
// scrollHeight = Total scroll height
// clientHeight = View for the user

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // Show loading animation
    showLoading();
  }
});

const showLoading = () => {
  loading.classList.add('show');

  //   Load more data
  setTimeout(getPost, 100);

  // Hide the loading animation
};

// get Post and user Name
const getPost = async () => {
  const postRespoce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`
  );
  const postData = await postRespoce.json();
  const userResponce = await fetch('https://randomuser.me/api');
  const userData = await userResponce.json();
  //   console.log(userData);

  const data = { post: postData, user: userData.results[0] };
  addDataToDom(data);
};

const addDataToDom = data => {
  const postElement = document.createElement('div');
  postElement.classList.add('blog-post');
  postElement.innerHTML = `
  <h2 class="title">${data.post.title}</h2>
        <p class="text">
          ${data.post.body}
        </p>
        <div class="user-info">
          <img src="${data.user.picture.large}" alt="${data.user.name.first}" />
          <span>${data.user.name.first} ${data.user.name.last}</span>
        </div>
  `;
  container.appendChild(postElement);
  loading.classList.remove('show');
};

getPost();
getPost();
getPost();
