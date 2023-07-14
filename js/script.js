/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {
  const studentList = document.querySelector('.student-list');
  const linkList = document.querySelector('.link-list');
  studentLength = data.length;

  /*
  Create the `showPage` function
  This function will create and insert/append the elements needed to display a "page" of nine list
  */
  function showPage(list, page) {
    let startIndex = (page * 9) - 9;
    let endIndex = (page * 9);
    studentList.innerHTML = '';

    for (let i = 0; i < studentLength; i++ ) {
      if (i >= startIndex && i < endIndex ) {
        studentList.insertAdjacentHTML('beforeend', `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
       </li>`)
      }
    }
  }

  /*
  Create the `addPagination` function
  This function will create and insert/append the elements needed for the pagination buttons
  */
  function addPagination(list){
    let paginationLength = Math.ceil(list.length/9);
    linkList.innerHTML = "";
 
    for(let i = 1; i <= paginationLength; i++){
      linkList.insertAdjacentHTML('beforeend',  `
      <li>
         <button type="button">${i}</button>
      </li>
      `);

      document.querySelector('button').classList.add('active');
    }
 }

  /*
  Create the eventListener for the linkList pagination buttons
  This changes the page when a user clicks one of the pagination buttons
  */

  linkList.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName.toLowerCase() === 'button') {
      document.querySelector('.active').className = '';
      button.classList.add('active');
      showPage(data, button.innerHTML);
    }
  })

  // Call functions
  showPage(data, 1);
  addPagination(data);
});
