import React from 'react';
import resume from "../Resources/resume.pdf"

function Resume() {
    return (
        <div className="container">
            <object data={resume} width="100%"></object>
        </div>
    );
}

export default Resume;