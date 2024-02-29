import { useState } from 'react';
import './App.css'

const isValidEmail = (mail) => {
  console.log(mail)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  return emailRegex.test(mail);
}

function App() {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);


  const handleAddBtn = (mail) => {
    console.log(mail)
    if (mail.trim() !== '') {
      if (isValidEmail(mail)) {
        setEmailList([...emailList, { email: mail, isValid: true }]);
      } else {
        setEmailList([...emailList, { email: mail, isValid: false }]);
      }
      setEmail('');
    }
  };

  const handleEmailChange = (e) => {
    const mail = e.target.value;
    setEmail(mail);
    if (isValidEmail(mail)) {
      handleAddBtn(mail);
    }

  };


  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddBtn(email);
    }
  }

  const getAvatar = (email) => {
    return `https://i.pravatar.cc/150?u=${email}`;
  };

  const handleDelete = (index) => {
    setEmailList((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    })
  }

  return (
    <>
      <div id='container'>
        <div className='input-wrapper'>
          <input className='email-input' type='text' onChange={handleEmailChange} onKeyDown={handleOnKeyPress} value={email} />
          <button className='btn-add' onClick={() => handleAddBtn(email)}>Add</button>
        </div>

        <div className='chip-container' >
          {emailList.map((e, l) => (
            <div key={l} className='chip' style={{ backgroundColor: e.isValid ? 'lightgreen' : 'lightcoral' }}>
              <p className='chip-email'>{e.email}</p>
              <img className="chip-img" alt='avatar' src={getAvatar(e.email)} />
              <button className="delete-btn" onClick={() => handleDelete(l)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
