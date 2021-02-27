import React from 'react';
import ReactDOM from 'react-dom';

    function validFormat(props){
        return (<p>valid</p>)
    }

    function invalidFormat(props){
        return (<p>invalid</p>)
    }

    function submite(){

    }

function Email(props){
    const valid = props.valid;

        return(
            <div className="email">
            <label for="email">Email address:</label><br/>
            <input type="text" id="email_input"/>
            <br/>
            <button onClick={checkEmailFormat}>Submit</button>
            <div id="response_message"></div>
        </div>  
            )


}

function checkEmailFormat() {
    var email_address = document.getElementById("email_input").value;
    var success_message = "<h6> Email successfully recorded </h6>";
    var failed_message = "<h6> Invalid email address </h6>";
    var resp_msg = document.getElementById("response_message");
  
    if (email_address.includes("@") && (email_address.includes(".com") || email_address.includes(".edu"))) {
      resp_msg.innerHTML = success_message;
    } else {
      resp_msg.innerHTML = failed_message;
    }
  }
ReactDOM.render(Email, document.getElementById("root"));


export default Email;