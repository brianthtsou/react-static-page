// import React from "react"
// import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="react-logo.png" alt="Logo" width="40px"/>
        <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
    </div>
)

const logo = (
    <img src="react-logo.png" alt="Logo" />
)

ReactDOM.render(page, document.getElementById("root"));
