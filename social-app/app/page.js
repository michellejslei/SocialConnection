import React from "react";
import "./style.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="log-in-page">
      <div className="div">
        <div className="text-wrapper">Log In</div>
        <div className="email-box">
          <input
              type="email"
              placeholder="email"
              className="overlap-group"
            />
        </div>
        <div className="pw-box">
          <input
              type="password"
              placeholder="password"
              className="overlap-group"
            />
        </div>
        <div className="text-wrapper-3">
          <Link href="./feed">
            <p>Go to Feed</p>
          </Link>
          <Link href="./toDo">
            <p>Go toDo List</p>
          </Link>
        </div>
        <div className="log-in-button">
          <div className="overlap">
            <div className="text-wrapper-4">log in</div>
          </div>
        </div>
        <button className="sign-up-button">
          <div className="div-wrapper">
            <div className="text-wrapper-5">sign up</div>
          </div>
        </button>
      </div>
    </div>
  );
}
