import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
        <link href="index3.css" rel="stylesheet" type="text/css" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page1</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    *{\n        margin:0;\n        padding:0;\n        box-sizing: border-box;\n    }\n    body{\n       font-family:Roboto; \n       font-size: 16px;\n       color:#333;\n       \n    }\n    .box{\n        width: 80%;\n        height: 600px;\n        display: inline-block;\n        margin: 50px 10%;\n        box-shadow:0 27px 87px rgba(0,0,0,0.37);\n        border-radius: 15px;\n        overflow: hidden;\n\n    }\n    .box-img{\n    float:left; \n    width: 45%;\n    po\n    \n    }\n    .box-text{\n        width: 55%;\n        float: left;\n        padding: 70px 70px 70px 35px;\n    }\n    .box-text h1{\n        font-size: 48px;\n        font-weight: bold;\n        color: #2e2e2e;\n        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    margin-bottom: 45px;\n    }\n    .box-text p{\n        font-size: 14px;\n        font-weight: 400;\n        color: #2e2e2e;\n        line-height: 30px;\n        letter-spacing: 0.025px;\n        margin-bottom: 15px;\n    }\n\n     " }} />
        <div className="wrapper">
          <div className="box">
            <div className="box-img"> <img src='logo8.jpg' height={600} width={450} /></div>
            <div className="box-text">
              <h1>
                Weber Money 
              </h1>
              <p>
                Weber Money helps you get just about everything managed.
                A smart, easy-to-use app that allows you to track and categorize 
                your in-and-out money, create budgets that you can actually stick to.
                It works seamlessly across devices and platforms, available on phone,
                tablet, PC and Web.
              </p>
              <p>
                It takes seconds to record daily transactions. Put them into clear and
                visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.
                Set budgets that are easy to stick to, based on your own spending habits. 
                You’re one step closer to that stuff you want to buy.  
              </p>
              <div className="lo">
                <a href="indexmain.html"> 
                click here
                </a>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
