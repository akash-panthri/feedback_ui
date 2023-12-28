const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
const ratings = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");

let selectedRating;

ratings.forEach(rating=>{

rating.addEventListener('click',(e)=>{
  removeActive();

 
  
  rating.classList.add("active")
  selectedRating = e.target.innerHTML;
     
      selectedRating =rating.children[1].innerText
      sendBtn.disabled = false
})


});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong
        >
        Thank You!
        </strong>
        
        <br />
    <strong
        >
        Feedback: ${selectedRating}
      </strong>
      <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
