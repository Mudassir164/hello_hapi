const http = require("http");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === "/overview") {
    res.end('Welcome to the "overview page" of the nginX project');
  } else if (urlPath === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        product_id: "xyz12u3",
        product_name: "NginX injector",
      })
    );
  } else {
    res.end("<html>
<head>
  <title>Resume</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
    }
    .resume {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .header img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      color: #333;
    }
    .header p {
      margin: 0;
      color: #777;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      margin: 0 0 10px;
      font-size: 20px;
      color: #333;
    }
    .section p {
      margin: 0;
      color: #777;
    }
    .section ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    .section li {
      margin-bottom: 10px;
      color: #555;
    }
    .section .subheading {
      font-weight: bold;
    }
    .name-section {
      background-color: #3498db;
      padding: 10px;
      border-radius: 5px;
    }
    .name-section h1 {
      margin: 0;
      font-size: 24px;
      color: #fff;
    }
    .name-section p {
      margin: 0;
      color: #eee;
    }
    @media (max-width: 600px) {
      .header {
        flex-direction: column;
        text-align: center;
      }
      .header img {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="resume">
    <div class="header">
      <img src="https://avatars.githubusercontent.com/u/52211617?v=4" alt="Profile Picture">
      <div class="name-section">
        <h1>Mudassir Ahmed</h1>
        <p>Telecommunication Engineer</p>
      </div>
    </div>
  
    <div class="section">
      <h2 style="color: #2c3e50;">Education</h2>
      <ul>
        <li>
          <span class="subheading">Bachelor of Engineering in Telecommunication</span><br>
          NED University of Engineering and Technology, 2019-2023
        </li>
      </ul>
    </div>
  
    <div class="section">
      <h2 style="color: #2c3e50;">Experience</h2>
      <ul>
        <li>
          <span class="subheading">Web Developer</span><br>
          ABC Company, 2015-2018<br>
          - Developed and maintained company websites<br>
          - Implemented responsive designs<br>
          - Collaborated with cross-functional teams
        </li>
        <li>
          <span class="subheading">Front-end Developer</span><br>
          DEF Solutions, 2014-2015<br>
          - Created user-friendly interfaces<br>
          - Improved website performance<br>
          - Worked closely with designers and back-end developers
        </li>
      </ul>
    </div>
  
    <div class="section">
      <h2 style="color: #2c3e50;">Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  </div>
</body>
</html>");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for request");
});
