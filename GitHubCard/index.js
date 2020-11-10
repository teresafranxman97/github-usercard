/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator (data) {
// Creating required elements
  const cardContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const cardUser = document.createElement('p');
  const useLocation = document.createElement('p');
  const userPro = document.createElement('p');
  const ahref = document.createElement('a');
  const useFollows = document.createElement('p');
  const useFollowing = document.createElement('p');
  const useBio = document.createElement('p');

  // Adding text to content
  cardTitle.textContent = 'data.login'
  cardImg.src = data.avatar_url
  cardUser.textContent = 'username';
  useLocation.textContent = 'location';
  ahref.textContent = 'address to user page';
  useFollows.textContent = 'follows count';
  useFollowing.textContent = 'users following count';
  useBio.textContent = 'bio;'

  
// Adding class names to my newly created elements
  cardContainer.classList.add('card');
  cardInfo.classList.add('card-info');
  cardTitle.classList.add('name');


// Appending children elements to parent element(s)
  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardUser);
  cardInfo.appendChild(useLocation);
  cardInfo.appendChild(userPro);
  userPro.appendChild(ahref);
  cardInfo.appendChild(useFollows);
  cardInfo.appendChild(useFollowing);
  cardInfo.appendChild(useBio);

  return cardContainer;
}

console.log(cardCreator())


followersArray.forEach(username => {
  // eslint-disable-next-line no-undef
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => {
    console.log(response);
      const card = cardCreator(response.data)
      document.querySelector('.cards').appendChild(card);
      return card
  })
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
