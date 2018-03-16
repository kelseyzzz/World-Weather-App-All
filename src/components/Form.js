import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}> 
        <input type="text" name="city" placeholder="Atlanta ..."/>
        <input type="text" name="country" placeholder="USA ..."/>
        <button> Get Weather </button>
    </form>

);

export default Form;