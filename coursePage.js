let questionSpace = document.querySelector("#questionSpace")

let nextBtn = document.querySelector(".nextBtn")

let buttons = document.querySelector("#buttons")
let questionsAsked = 0 
let questions = [
  // q1
  {
    question: "What muscle should you flex when doing hip glute raises?",
    answers: ["Glute", "face", "leg"],
    type: "multiple choice",
    html: ` 
    <h3>What muscle should you flex when doing hip glute raises?</h3>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
     Glute
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      face
    </label>
  </div>
 <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        leg
      </label>
  </div>`
  },
  // q2
  {
   question: "How should your hands be positioned when doing spiderman pushups?",
   type: "free response",
    html: `  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">How should your hands be positioned when doing spiderman pushups? </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`
  },
// q3
  {
   question: "What is the first step you guys should do before starting your workout? select all that apply.",
   answers: ["check your surroundings", "make sure you have a safe space to work", "Nothing I just start my workout."],
   type: "Select multiple",
    html: `

     <h3>What is the first step you guys should do before starting your workout? select all that apply.</h3>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Check your surroundings
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
      make sure you have a safe space to work
    </label>
  </div>
  <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="form-check-label" for="flexCheckChecked">
       Nothing I just start my workout.
      </label>
    </div>`
  },
 // q4
  {
   question: "Which leg do you step foward with when doing alternate lunges?",
   type: "free response",
    html: `  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Which leg do you step foward with when doing alternate lunges? </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`
  },
// q5
  {
   question: "If using a towel for planks, the ideal top position would be how many inches above the towel?",
   type: "Free response",
    html: `<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">If using a towel for planks, the ideal top position would be how many inches above the towel? </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`
  },
// q6
  {
   question: "When doing deadbugs do you reach for the same hand and same leg or opposites?",
   answers: ["opposite arm and leg", "same hand same leg", "I don't even use my arms."],
   type: "multiple choice",
    html: ` 
     <h3>When doing deadbugs do you reach for the same hand and same leg or opposites?</h3>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
     opposite arm and leg
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      same hand same leg
    </label>
  </div>
 <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
       I don't even use my arms??
      </label>
  </div>`
  },
// q7
  {
   question: "Is this quiz the best quiz ever",
   answers: ["yes!!", "YESSS", "It's alright."],
   type: "multiple choice",
    html: `  
    <h3>Is this quiz the best quiz ever?</h3>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
     yes!!
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
     YESS
    </label>
  </div>
 <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        It's alright.
      </label>
  </div>`
  }
]


let randomQ = Math.floor(Math.random() * questions.length)

let question = questions[randomQ]

questionSpace.innerHTML = (question.html)
questionSpace.classList.add("white")


nextBtn.addEventListener("click", function(event){
  let nextQ = Math.floor(Math.random() * questions.length)
  questionsAsked++
  question = questions[nextQ]    
  questionSpace.innerHTML = (question.html)

  if (questionsAsked==8){
    buttons.innerHTML = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Submit Quiz
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
        You just completed a quiz!🎉🎉🎉</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Keep up the good work!😊 You can retake the quiz if you'd like.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
  }

  
})
