function validinput() {
 input();
if (submitbtn.value === "false") {
  alert(`You cant submit this application twice`);
  return;
}
if (email === "" || discordname === "" || ID === "" || gender === "" || nation === "" || countryin === "" || timezone === "" || age === "" || level === "" || online === "" || rank === "" || fluent === "" || workinother === "" || punishment === "" || whypick === "" || whythis === "" || outside === "" || scenario1 === "" || scenario2 === "" || scenario3 === "") {
document.querySelector('.error').classList.add('on');
  window.scrollTo(0, 0);
} else if (yes.checked) {
document.querySelector('.error').classList.remove('on');
  submit()
  window.scrollTo(0, 0);
} else {
document.querySelector('.checkbox').classList.toggle('in')
}
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', event => {
window.addEventListener("beforeunload", function(event) { event.preventDefault() })
  });
});
document.querySelectorAll('input').forEach(function(input) {
      var inputId = input.id;
      var savedInput = localStorage.getItem(inputId);
      if (savedInput) {
        input.value = savedInput;
      }
       input.addEventListener('input', function() {
      localStorage.setItem(inputId, this.value);
      });
    });
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
  textarea.addEventListener('input', event => {
window.addEventListener("beforeunload", function(event) { event.preventDefault() })
  });
});
document.querySelectorAll('textarea').forEach(function(textarea) {
      var textareaId = textarea.id;
  var savedTextarea = localStorage.getItem(textareaId);
  if (savedTextarea) {
    textarea.value = savedTextarea;
  }
  textarea.addEventListener('input', function() {
    localStorage.setItem(textareaId, this.value);
  });
});
document.getElementById('yes').addEventListener('change', function() {
  if (this.checked) {   document.querySelector('.checkbox').classList.add('checked');
  } else {
document.querySelector('.checkbox').classList.remove('checked');
  }
});
function ayo() {
  let sus = document.querySelector('sus')
if (discordname.value === "Goku3508 iOS#1511") {
  sus.style.opacity = 1;
} else {
  sus.style.opacity = 0;
}
}
setInterval(ayo, 100);