import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function App() {
  return (
    <div className="App">
    <link rel="icon" type="image/x-icon" href="slot1.ico" />
    <center />
    <center />
      <div class="container">
      <div>
      <img src="C:\Users\ADMIN\Desktop\Project\project3\src\Bannari_Amman_Institute_of_Technology_logo.png" alt="Bannari_Amman_Institute_of_Technology_logo.png" />
      </div>
      <div class="index">
        <div class="index-int">
          Welcome Back!
          <br />
          Experience makes everything perfect
        </div>
      </div>
      <center />
  
    <div className='google'>
      <GoogleOAuthProvider clientId="413661991117-nrfs68o293a0fjhnpcs169jjf4kbvp0h.apps.googleusercontent.com">
      <GoogleLogin
       onSuccess={credentialResponse => {
       const decoded = jwtDecode(credentialResponse.credential);
       console.log(decoded);
    
     }}
        onError={() => {
        console.log('Login Failed');
  }}
/>
     </GoogleOAuthProvider>
    </div> 
  </div>
  </div>
  );
}

export default App;