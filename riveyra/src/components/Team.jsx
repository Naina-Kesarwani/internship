import React from "react";
import "./Team.css";

import team from "../assets/team.jpeg";

function Team() {
    return (
        <div className="team-full-container">
            <div
                className="team-container"
                style={{
                    backgroundImage: `url(${team})`,
                }}
            >
                {/* DARK OVERLAY */}
                <div className="team-overlay"></div>

                {/* CONTENT */}
                <div className="team-content">
                    <p className="team-tag">Your Vision. Our Execution.</p>

                    <h1>
                        One Team,

                        <br />

                        All Capabilities
                    </h1>

                    <p className="team-container-p">
                        Six specialisations. One unified team. Every face of the cube is a discipline we've mastered — spin it, explore it, own it.
                    </p>
                    <div className="btn-container1">
                        <div className="btn1">
                            <h2>9+</h2>
                            <p>SERVICES</p>
                        </div>
                        <div className="btn1">
                            <h2>50+</h2>
                            <p>PROJECTS</p>
                        </div>
                        <div className="btn1">
                            <h2>7+</h2>
                            <p>YEARS</p>
                        </div>
                        <div className="btn1">
                            <h2>100%</h2>
                            <p>DELIVERY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;