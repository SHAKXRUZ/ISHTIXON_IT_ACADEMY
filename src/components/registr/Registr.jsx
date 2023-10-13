// import React, { useState } from 'react';
import "./Registr.css";
const Registr = () => {
  const userRegistr = async (e) => {
    e.preventDefault();

    const { ism, email, tel } = e.target;

    await fetch("https://thoughtful-scrubs-boa.cyclic.app/registr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: ism.value,
        email: email.value,
        telifon: tel.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
      });
  };

  return (
    <div id="registr" className="registr">
      <div className="registr_container">
        <div className="registr_content">
          <form onSubmit={(e) => userRegistr(e)} className="registr_form">
            <input
              className="registr_input"
              type="text"
              placeholder="Ismingiz"
              required
              maxLength={20}
              minLength={3}
              name="ism"
            />
            <input
              className="registr_input"
              type="email"
              placeholder="Email manzilingiz"
              required
              maxLength={40}
              minLength={10}
              name="email"
            />
            <input
              className="registr_input"
              type="tel"
              placeholder="Telefon raqamangiz"
              required
              maxLength={13}
              minLength={9}
              name="tel"
            />
            <button className="registr_form_btn" type="submit">
              Ro'yhatdan o'tish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registr;
