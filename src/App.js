import "./App.css";
import FacebookLogin from "react-facebook-login";
import {
  FacebookLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import { useState } from "react";
import { LoginSocialFacebook, LoginSocialLinkedin } from "reactjs-social-login";

const REDIRECT_URI = window.location.href;

function App() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isLoggedin: false,
  //   };
  // };

  // const onLoginStart = useCallback(() => {}, []);

  const responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedin: true,
    });
  };

  return (
    <div className="App">
      <div style={{ width: "30%", margin: "10px auto" }}>
        <FacebookLogin
          appId="Your app Id"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        >
          <FacebookLoginButton />
        </FacebookLogin>

        {/* ============= Facebook Login ============= */}
        <LoginSocialFacebook
          appId="Your app id"
          client_secret={"Your client secret"}
          redirect_uri={REDIRECT_URI}
          // scope="openid profile email"
          // discoveryDocs="claims_support"
          // access_type="offline"
          // onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => console.log(provider, data)}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        {/* ============= Linkedin Login ============= */}
        <LoginSocialLinkedin
          client_id={"Your client id"}
          client_secret={"Your client secret"}
          redirect_uri={REDIRECT_URI}
          // scope="openid profile email"
          // discoveryDocs="claims_support"
          // access_type="offline"
          // onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => console.log(provider, data)}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>
      </div>
    </div>
  );
}

export default App;
