// This script was initially taken from purpleteam-labs-web
const internals = {
  contactForm: undefined,
  validateContactPost: undefined,
  contactQuestion: '2 + 7',
  correctContactAnswer: '9'
};

internals.validateRealContactUser = () => {
  const { validateContactPost, correctContactAnswer } = internals;
  if (validateContactPost.value === correctContactAnswer) return true;
  validateContactPost.value = '';
  return false;
};

internals.contactFormHandler = () => {
  let { contactForm } = internals;
  const  { contactQuestion, validateRealContactUser } = internals;
  contactForm = document.querySelector('form.el-contact');
  internals.validateContactPost = document.querySelector('input[name="validateRealContactUser"].el-post-contact-field');
  if (internals.validateContactPost && contactForm) {
    internals.validateContactPost.placeholder = contactQuestion;
    contactForm.onsubmit = validateRealContactUser;
    contactForm.action = contactForm.querySelector('.form-action-value').innerHTML;
    contactForm.querySelector('.el-post-contact-field.js-note.span').hidden = true;
  }
};

internals.attachHandlers = () => {
  const { contactFormHandler } = internals;
  contactFormHandler();
};


// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#checking_whether_loading_is_already_complete
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', internals.attachHandlers) : internals.attachHandlers();
