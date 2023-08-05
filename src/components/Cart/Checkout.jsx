import { useRef, useState } from "react";
import classess from "./Checkout.module.css";

const Checkout = (props) => {
  // hooks define
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city : true
  });

  // define function
  // valid function
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.length === 5;

  // handler
  const confirmHandler = (event) => {
    event.preventDefault();
    
    // from input value
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // run validate
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid
    });

    const formIsValid = enteredNameIsValid && enteredPostalIsValid && enteredStreetIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    // submit the cart data...
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    });
  };

  const nameControlClasses = `${classess.control} ${formInputsValidity.name ? '' : classess.invalid}`;
  const streetControlClasses = `${classess.control} ${formInputsValidity.street ? '' : classess.invalid}`;
  const postalControlClasses = `${classess.control} ${formInputsValidity.postal ? '' : classess.invalid}`;
  const cityControlClasses = `${classess.control} ${formInputsValidity.city ? '' : classess.invalid}`;
  
  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Your Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputsValidity.postal && <p>Please enter a valid postal code(5 characters long!)</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classess.actions}>
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
        <button className={classess.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
