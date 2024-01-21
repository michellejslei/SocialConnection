"use client";

import { useState } from "react";
import React from "react"

export default function Home() {

    const [description, setDescription] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/userData', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ description, month, day, year, notes}),
          });
    
          if (res.ok) {
            alert('Task Added to Database');
            setMonth('');
            setDay('');
            setDescription('');
            setYear('');
            setNotes(''); // Clear the input field after a successful submission
            // fetchTask(); // Fetch updated tennis shots after adding a new one
          } else {
            throw new Error('Failed to task');
          }
        } catch (error) {
          console.error(error);
        }
      };
 

  
  return (
    

    <main>


    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Description"
      />

      <input
        onChange={(e) => setMonth(e.target.value)}
        value={month}
        type="text"
        placeholder="Month"
      />

      <input
    
        type = "text" 
        placeholder = "Day" 
        value = {day} 
        onChange = {(e)=>{setDay(e.target.value)}}
        />
        <input
    
        type = "text" 
        placeholder = "Year" 
        value = {year} 
        onChange = {(e) => {setYear(e.target.value)}}
        />
        <input
        type = "text" 
        placeholder = "Notes" 
        value = {notes} 
        onChange = {(e) => {setNotes(e.target.value)}}/>
        
        <button
        type="submit">
        Submit 
      </button>
    </form>
    
    </main>
  );
}
