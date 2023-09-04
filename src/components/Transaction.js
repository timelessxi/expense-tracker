import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  const onSubmit = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (!isConfirmed) {
      return;
    }
    deleteTransaction(transaction.id);
  };

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button onClick={onSubmit} className='delete-btn'>
        x
      </button>
    </li>
  );
};
