import React from 'react';
import './style.css';


function Text(){
    return(

    <div className="form-containter">
        <form className="form">
            <div style={{textAlign:"left"}}> 
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" value="Jenny"/><br/>
                <label for="fname">Last name:</label><br/>
                <input type="text" id="lname" value="Aoyama"/><br/><br/>
                <h7>Favorite City</h7><br/>
                <input type="radio" id="la" name="city" value="Los Angeles"/>
                <label for="la">Los Angeles</label><br/>
                <input type="radio" id="tokyo" name="city" value="Tokyo" checked/>
                <label for="tokyo"> Kamakura</label><br/>
                <input type="radio" id="ny" name="city" value="New York" />
                <label for="ny">New York</label> <br/><br/>
                <input type="submit" id="submit" value="Submit" style={{textAlign:"center"}}/>
            </div>
        </form>
    </div>
    )
}

export default Text;