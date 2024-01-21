"use client"
import React from "react";
import "./style.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="new-to-do-page">
    <div className="container">
      <div className="title text-wrapper">New To Do</div>

      <div className="input-box notes-entry">
        <div className="rectangle" />
        <input type="text" placeholder="Notes" />
      </div>

      <div className="input-box description">
        <div className="to-do-entry" />
        <input type="text" placeholder="Description" />
      </div>

      <div className="input-box date">
        <div className="frame">
          <div className="input-box month">
            <input type="text" placeholder="Month" />
          </div>
          <div className="input-box day">
            <input type="text" placeholder="Day" />
          </div>
          <div className="input-box year">
            <input type="text" placeholder="Year" />
          </div>
        </div>
      </div>

      <button className="submit-button">
        <div className="overlap">
          <div className="text-wrapper">Submit</div>
        </div>
      </button>

      <button className="cancel-button">
        <div className="overlap">
          <div className="text-wrapper">Cancel</div>
        </div>
      </button>
    </div>
  </div>
  )
}
