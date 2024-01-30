// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects"> 
    <ul>
        <li><h1>Seal Project 1</h1></li><br />
        <li><h2>App Name: My Hockey Trivia App</h2></li><br />
        <li><h2>Description: A two player 20 question trivia game where players can alternate turns and track their score.</h2></li><br />
        <li><a href="https://ibb.co/f1ZZ7pS"><img src="https://i.ibb.co/f1ZZ7pS/hockeytriviaapp.png" alt="hockeyapp" /></a></li><br />
        
    </ul>
    <ul>
        <li><h1>Seal Project 2</h1></li><br />
        <li><h2>App Name: My Bookshelf App</h2></li><br />
        <li><h2>Description: A full stack app to keep track of what you are reading, 
            what you have read, and what is on your bookshelf.</h2></li><br />
        <li><a href="https://ibb.co/CBg51F1"><img src="https://i.ibb.co/CBg51F1/bookshelfapp.png" alt="bookshelfapp" /></a></li><br />
    </ul>
    </div>
}

// export the component
export default Projects;