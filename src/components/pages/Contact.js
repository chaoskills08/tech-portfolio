import React from 'react';


function Contact() {

  const handleFormSubmit = (e) => {
    const iName = document.getElementById('inputName')
    const iEmail = document.getElementById('inputEmail')
    const iText = document.getElementById('inputText')

    iName.value = '';
    iEmail.value = '';
    iText.value = '';
  }
  
  const validateEmail = (e) => {
    const validateEmail = document.getElementById('inputEmail').value;
    // eslint-disable-next-line
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validateEmail.match(mailformat)) {
      document.form1.text1.focus();
      handleFormSubmit()
      return true;
    }
    else {
      alert("You have entered an invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }

  return (
    <div>
      <form name="form1" className='contact' method="post" action="mailto:nickb96@icloud.com.com">
      <h1 className='conText'>Contact Me</h1>
        <div className="row mb-3">
          <label for="inputName" className="col-sm-2 col-form-label fs-5 fw-bold">Your Name</label>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="inputName"></input>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label fs-5 fw-bold">Email</label>
        </div>
        <div className="col-sm-4">
          <input name="text1" type="email" className="form-control" id="inputEmail" placeholder='example@email.com'></input>
        </div>
        <br></br>
        <button type="submit" className="col-sm-1 btn btn-warning" onClick={validateEmail}>Email Me</button>
      </form>
    </div>
  );
}

export default Contact