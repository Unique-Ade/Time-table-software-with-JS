const submitForm = document.getElementById('schoolInfo');
const dropDown = document.getElementById('session');


submitForm.addEventListener('submit', function (e) {
       e.preventDefault();
       const formData = Object.fromEntries(new FormData(submitForm));
       localStorage.setItem("Data", JSON.stringify(formData)); //can only store string Data in local storage
         
       
       window.location.href = 'Transform-page.html';
})