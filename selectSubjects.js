const addSubject = document.querySelector('.submit-2');
const container = document.getElementById('container-2');
const deleteSubject = document.querySelector('.delete');
const selectSubject = document.getElementById('Nig-sch-subject');

addSubject.addEventListener('click', function (e) {
   const newElement = document.createElement("div")
   newElement.classList.add('add-subject');
   newElement.innerHTML = `
    Subject
    <select name="Nig-sch-subject" id="Nig-sch-subject">
       <option value="">English Language</option>
       <option value="">Mathematics</option>
       <option value="">Economics</option>
       <option value="">Chemistry</option>
       <option value="">Physics</option>
       <option value="">Geography</option>
       <option value="">Accountancy</option>
       <option value="">Biological Sciences</option>
       <option value="">Agriculture</option>
       <option value="">Microbiology</option>
       <option value="">History</option>
       <option value="">Religious studies</option>
       <option value="">Zoology</option>
       <option value="">Language</option>
       <option value="">Electrical engineering</option>
       <option value="">Social studies</option>
       <option value="">Art</option>
       <option value="">Nutrition</option>
       <option value="">Civic</option>
       <option value="">Air Conditioning and Refrigeration</option>
       <option value="">Animal Husbandry</option>
       <option value=""></option>
       <option value=""></option>
    </select>
    `
   container.appendChild(newElement);


});

   deleteSubject.addEventListener('click', function (e) {
    const child = document.querySelector('.add-subject')
    container.remove(child);

   });


// });


// selectSubject.addEventListener('click', function(){
//    const screenData = Object.fromEntries(new FormData(container))
//    document.getElementById('Nig-sch-subject').textContent = screenData.Nig-sch-subject;

// })