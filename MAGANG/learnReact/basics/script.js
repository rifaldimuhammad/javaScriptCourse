//<<<<<<<<<<<<<<<<<<<<<<< JSX >>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
const root = document.getElementById('root');
const page = (
  <div>
  <h1>My awasome website in react</h1>
  <h3>Reasons I love React</h3>
  <ol>
  <li>it's composible</li>
  <li>it's declarative</li>
  <li>it's a hhirable skill</li>
  <li>it's a actively maintained by skilled people</li>
  </ol>
  </div>
  );
  document.getElementById('root').append(JSON.stringify(page));
  */

/*
//<<<<<<<<<<<<<<<<<<<<<<< PROJECT 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>
//acess image
const root = document.getElementById('root');
 const element = (
   <div className="container">
    <img  src="./react-logo.png" width="40"  />
    <h1>Fun fact about react</h1>
    <ul className='list'>
    <li>was first released in 2013</li>
        <li>was originally created by Jordan walky</li>
        <li>has well over 100k stars on github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterpirse apps, including mobile apps</li>
        </ul>
        </div>
    )
    
ReactDOM.render(element  , root)
*/

/*
//<<<<<<<<<<<<<<<<<<<<<<< COMPONENT >>>>>>>>>>>>>>>>>>>>>>>>>>>
const root = document.getElementById('root');

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40" />
        </nav>
      </header>
      <h1>Reasons I'm exited to learn React</h1>
      <ul className="list">
        <li>was first released in 2013</li>
        <li>was originally created by Jordan walky</li>
        <li>has well over 100k stars on github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterpirse apps, including mobile apps</li>
      </ul>
      <footer>
        <small>2020 ziroll development. All right reserved</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, root);
*/

//<<<<<<<<<<<<<<<<<<<<<<< QUIZ >>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
1.  Whats React component?
function that returns React element. (UI)

2. what's wrong this code?
```
function MyComponent(){
  return (
    <small>I'am tiny text</small>
  )
}

3. what's wrong this code?
```
funtion Header(){
  return(
<header>
  <nav>
    <img src="./react-log.png" width="40" />
    </nav>
    </header>    
    )
}

ReactDOM.render('<Header />', document.getElementById('root'))
*/

/*
//<<<<<<<<<<<<<<<<<<<<<<< PARENT & CHILD COMPONENT >>>>>>>>>>>>>>>>>>>>>>>>>>>
function Header() {
  return (
    <header>
    <nav>
    <img src="./react-logo.png" width="40" />
    </nav>
    </header>
    );
}

function Content() {
  return (
    <div>
      <h1>Reasons I'm exited to learn React</h1>
      <ul className="list">
      <li>was first released in 2013</li>
      <li>was originally created by Jordan walky</li>
      <li>has well over 100k stars on github</li>
      <li>is maintained by Facebook</li>
      <li>Powers thousands of enterpirse apps, including mobile apps</li>
      </ul>
    </div>
    );
}

function Footer() {
  return (
    <footer>
    <small>2020 ziroll development. All right reserved</small>
    </footer>
    );
}

function Page() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
    );
  }
  
  ReactDOM.render(<Page />, document.getElementById('root'));
*/
//<<<<<<<<<<<<<<<<<<<<<<< STYLING WITH CLASSES >>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
function Header() {
  return (
    <header>
      <nav className="header-nav">
        <img src="./react-logo.png" width="40" />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));
*/

/*
//<<<<<<<<<<<<<<<<<<<<<<<  Organize Components >>>>>>>>>>>>>>>>>>>>>>>>>>>

import Header from "./src/organizeComp/rHeader";
import Footer from "./src/organizeComp/Footer";
import Content from "./src/organizeComp/Content";

function Page() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
    );
  }
  ReactDOM.render(<Page />, document.getElementById('root'));
  */

//<<<<<<<<<<<<<<<<<<<<<<< PROJECT 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>
import App from "./App"

ReactDOM.render(<App /> , document.getElementById('root'))