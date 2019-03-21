// TITLE ---------------------------------------------------
const title = document.createElement('h2');
title.setAttribute('class', 'check-title');
title.textContent = 'Checkout'
document.querySelector('main').appendChild(title);

// FORM ---------------------------------------------------
const form = document.createElement('form');
form.setAttribute('class', 'my-form');
form.setAttribute('method', 'get');
document.querySelector('main').appendChild(form);

// 1st Fieldset --------------------------------------------
const topField = document.createElement('fieldset');
topField.setAttribute('class', 'top');
document.querySelector('form').appendChild(topField);
// 1st Fieldset Content ------------------------------------
  const topFields = ['Name', 'Email Adress','Street Adress'];

  for (let i = 0; i < topFields.length; i++){
    const label = document.createElement('label');
    label.textContent = topFields[i];
    label.setAttribute('for', topFields[i]);

    const input = document.createElement('input');
    input.setAttribute('id', topFields[i]);

    topField.appendChild(label);
    topField.appendChild(input);
  }

// 2nd Fieldset --------------------------------------------
const adressField = document.createElement('fieldset');
adressField.setAttribute('class', 'adress');
document.querySelector('form').appendChild(adressField);
// 2nd Fieldset Content ------------------------------------
  const adressFields = ['City', 'State', 'Zipcode'];
  for (let i = 0; i < adressFields.length; i++){
    const label = document.createElement('label');
    label.textContent = adressFields[i];
    label.setAttribute('class', adressFields[i]);
    label.setAttribute('for', adressFields[i]);

    const input = document.createElement('input');
    input.setAttribute('id', adressFields[i]);

    adressField.appendChild(label);
    adressField.appendChild(input);
  }

  // 3rd Fieldset --------------------------------------------
  const lastField = document.createElement('fieldset');
  lastField.setAttribute('class', 'last');
  document.querySelector('form').appendChild(lastField);
  // 3rd Fieldset Content --------------------------------------------
  const question = document.createElement('h3');
  question.setAttribute('class', 'question');
  question.innerHTML = 'First Time Adopter?';
  lastField.appendChild(question);

  const answer = document.createElement('h2');
  answer.setAttribute('class', 'first');
  answer.innerHTML = `<input type="radio" name="yes_no" class="checked" checked>YES <input type="radio" name="yes_no" class="checked">NO`;
  lastField.appendChild(answer);

  const loc = document.createElement('label');
  loc.innerHTML = `Pickup Location <select class="store"> <option value="none" selected>--</option><option value="store 1">store 1</option><option value="store 2">store 2</option><option value="store 3">store 3</option></select>`;
  lastField.appendChild(loc);

  const questionTwo = document.createElement('h3');
  questionTwo.setAttribute('class', 'question');
  questionTwo.innerHTML = 'Dogs Adopted';
  lastField.appendChild(questionTwo);

  const answerTwo = document.createElement('p');
  answerTwo.innerHTML = 'NONE';
  lastField.appendChild(answerTwo);

  const questionThree = document.createElement('h3');
  questionThree.setAttribute('class', 'question');
  questionThree.innerHTML = 'Total Adoption Cost';
  lastField.appendChild(questionThree);

  const answerThree = document.createElement('p');
  answerThree.setAttribute('class', 'checkoutTotal');
  answerThree.innerHTML = '$0';
  lastField.appendChild(answerThree);
// COMMENTS -----------------------------------------------
  const comment = document.createElement('label');
  comment.textContent = 'Comments';
  comment.setAttribute('class', 'comments');
  comment.setAttribute('for', 'comments');

  const commentAns = document.createElement('input');
  commentAns.setAttribute('class', 'commentAns');

  lastField.appendChild(comment);
  lastField.appendChild(commentAns);
// Submit Button --------------------------------------------------------------
  const sumbitButton = document.createElement('button');
  sumbitButton.setAttribute('type', 'submit');
  sumbitButton.setAttribute('class', 'submit');
  sumbitButton.setAttribute('onclick', 'submission()');
  sumbitButton.textContent = 'submit'

  form.appendChild(sumbitButton);


  let formElement = document.querySelector('form');

  formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your submission has been received, Thank You for using Adopt a Dog.");

    const name = formElement.elements[1].value;
    const email = formElement.elements[2].value;
    const street = formElement.elements[3].value;
    const city = formElement.elements[5].value;
    const state = formElement.elements[6].value;
    const zipcode = formElement.elements[7].value;
    const firstTime = formElement.elements[9].checked;
    const pickup = formElement.elements[11].value;
    const comment = formElement.elements[12].value;

    const formData = {
      'Name': name,
      'Email adress': email,
      'Street adress': street,
      'City': city,
      'State': state,
      'Zipcode': zipcode,
      'First Time Adopter?' : firstTime,
      'Pickup Location' : pickup,
      'Comment' : comment,
    };

    console.log(formData);

  })
