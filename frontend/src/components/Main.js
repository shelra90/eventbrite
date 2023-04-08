import React from 'react';
import './Main.css';

const Main = () => {
    return (

        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    EventBrite
                </div>
            </div>
            <div className="Body">
                <ul className="EventBrite">
                    <li>
                        <span className="Event">Cirque du Soleil</span>
                        <span className="Time">3:30PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    <li>
                        <span className="Event">Life is Beautiful</span>
                        <span className="Time">5:00PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    <li>
                        <span className="Event">Live music</span>
                        <span className="Time">8:00PM</span>
                        <span className="Action">&#10007;</span>
                    </li>
                    
                </ul>
                <div className="AddEvent">
                    <form>
                        <input className="eventField" type="text"  placeholder="New Event" />
                        <input className="eventTime" type="text" placeholder="Time" />
                        <button className="submitBtn">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
