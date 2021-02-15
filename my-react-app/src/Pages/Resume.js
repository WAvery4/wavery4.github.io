import React from 'react';
import './Resume.css';
import resume from "../Resources/resume.pdf"

function Resume() {
    return (
        <div className="containerRes">
            <object data={resume} width="100%"></object>
        </div>
    );
}

export default Resume;