import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import mock1 from '../assets/images/etepian_showcase.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://e-tepian.samarindakota.go.id/" target="_blank" rel="noreferrer"><img src={mock1} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://e-tepian.samarindakota.go.id/" target="_blank" rel="noreferrer"><h2>e-TEPIan (FINTECH)</h2></a>
                    <p>e-TEPIan is a real-time project monitoring and permit management system developed for the Samarinda City Government, enabling transparent tracking of project progress, budget realization, and permit approvals. Developed using Laravel dan mySQL.</p>
                    <a href="https://e-tepian.samarindakota.go.id/" target="_blank" rel="noreferrer">
                        <button>View Project</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;