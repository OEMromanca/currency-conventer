import React from "react";
import { bankList } from "../utils/mocks";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <hr />
      <ul>
        {bankList.map((bank) => (
          <li key={bank.id}>
            <Link to={`${bank.to}/${bank.id}`}>{bank.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
