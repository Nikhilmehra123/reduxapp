import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

// import { depositMoney, withdrawMoney } from "./state/action-creators";
const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h2>Deposite/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        // onClick={() => {
        //   dispatch(actionCreators.withdrawMoney(100));
        // }}
        // if we will use bindactionCreators then no need to do like we did in the above code
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance ({balance})
      <button
        className="btn btn-primary mx-2"
        //   onClick={() => {
        //     dispatch(actionCreators.depositMoney(100));
        //   }}
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
