import React from 'react';
import './style.css';

function Today() {
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">logo</div>
        <nav className="navigation">
          <a href="#today" className="nav-item active">today</a>
          <a href="#feed" className="nav-item">feed</a>
          <a href="#challenges" className="nav-item">challenges</a>
          <a href="#profile" className="nav-item">profile</a>
          <a href="#friends" className="nav-item">friends</a>
          <a href="#settings" className="nav-item">settings</a>
        </nav>
      </header>
      <main className="main-content">
        <h1>Hello, Michelle</h1>
        <section className="section">
          <h2>To do</h2>
          <div className="task-list">
            {/* Replace with actual tasks */}
            <div className="task"></div>
            <div className="task"></div>
            <div className="task"></div>
          </div>
        </section>
        <section className="section">
          <h2>Habits</h2>
          {/* Replace with actual habits */}
          <div className="task-list">
            <div className="task"></div>
            <div className="task"></div>
            <div className="task"></div>
          </div>
        </section>
        <section className="section">
          <h2>Completed</h2>
          <div className="completed-tasks">
            {/* Replace with actual completed tasks */}
            <div className="completed"></div>
            <div className="completed"></div>
            <div className="completed"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Today;
