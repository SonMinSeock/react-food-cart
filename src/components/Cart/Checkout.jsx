import { useRef } from "react";
import classess from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  // handler
  const confirmHandler = (event) => {
    event.preventDefault();
    
    // from input value
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    console.log(enteredName, enteredStreet, enteredPostal, enteredCity)
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classess.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className={classess.control}>
        <label htmlFor="street">Your Street</label>
        <input ref={streetInputRef} type="text" id="street" />
      </div>
      <div className={classess.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
      </div>
      <div className={classess.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
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
