import classess from "./Checkout.module.css";

const Checkout = (props) => {
  // handler
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classess.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classess.control}>
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classess.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classess.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancle}>
        Cancle
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
