import './App.css'
import React from "react";
import Modal from "./components/modal";
function App() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isRemember, setIsRemember] = React.useState(false)
    const [isIncorrectEmailData, setIsIncorrectEmailData] = React.useState(false)
    const [isIncorrectPasswordLength, setIsIncorrectPasswordLength] = React.useState(false)
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    function validate(email) {
        let regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        let address = email
        setIsOpenModal(true)
        if(regExp.test(address) === false) {
            setIsIncorrectEmailData(true)
        }
        else{
            if (password.length > 5) {

                if (isRemember === true) {
                    localStorage.setItem('email', email)
                    localStorage.setItem('password', password)
                    localStorage.setItem('checkBox', true)
                }
            }
            else {
                setIsIncorrectPasswordLength(true)
            }
        }
    }
    React.useEffect(() => {
        localStorage.getItem('email') !== undefined ? setEmail(localStorage.getItem('email')) : setEmail('')
        localStorage.getItem('password') !== undefined ? setPassword(localStorage.getItem('password')) : setPassword('')
        localStorage.getItem('checkBox') ? setIsRemember(true): setIsRemember(false)
    },[])
  return (
    <div className="App">
        <Modal
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
            isIncorrectEmailData={isIncorrectEmailData}
            isIncorrectPasswordLength={isIncorrectPasswordLength}
        />
        <div className={'startPageImg'}>
            <img src='/img/mountain.jpg' alt="image not found"/>
        </div>
      <div className={"startPageContentWrapper"}>
          <div className={'startPageContent'}>
              <h1>Login to your account</h1>
              <div className={'startPageContentEnterLogin'}>
                  <p>Email</p>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder={'John.snow@gmail.com'} type="text"/>
                  <p>Password</p>
                  <input onChange={(e) => setPassword(e.target.value)} value={password} style={{color: '#000'}} placeholder={'*********'}  type="password"/>
                  <div className={'rememberOrForgot'}>
                      <div className={'rememberMe'}>
                          <div onClick={() => setIsRemember(!isRemember)} style={isRemember ? {backgroundColor: "#04C35C"} : {}  } className={'customCheckBox'}></div>
                          <span>Remember me</span>
                      </div>
                      <a href="#">Forgot password?</a>
                  </div>
                  <button onClick={() => validate(email)} className={'defaultBtn startPageContentSignUp'}>Login now</button>
                  <button onClick={() => alert('redirect to google...')} className={'defaultBtn startPageContentSignIn'}><img src="/img/googleIcon.png" alt=""/> Or sign-in with google</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
