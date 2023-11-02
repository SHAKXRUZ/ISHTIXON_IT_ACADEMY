// import React, { useState } from 'react';
import "./Registr.css";
const Registr = () => {
  const sendTeligram = async (e) => {
    e.preventDefault();
    let { ism, email, tel } = e.target;
    let chat_id = 792010044;
    let message =
      "Ismi: " +
      ism.value +
      "\nEmail: " +
      email.value +
      "\nTel: +998" +
      tel.value;
    console.log(message);
    await fetch(
      "https://api.telegram.org/bot6717549964:AAHm1LcGwDSqTfZvMkWjwsKEMKYwj5P_sh0/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Siz muvofiqiyatli ro'yxatdan o'tdingiz!");
          ism.value = "";
          email.value = "";
          tel.value = "";
        } else {
          alert("Server xatolik!");
        }
      });
  };

  return (
    <div id="registr" className="registr">
      <div className="registr_container">
        <div className="registr_content">
          <form onSubmit={(e) => sendTeligram(e)} className="registr_form">
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
              maxLength={9}
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
