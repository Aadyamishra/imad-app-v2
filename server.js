var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title: 'first article | meenakshi',
    heading: 'article-one',
    date: '10/feb/2017',
    content: `
            <p>
                Hello, Finally I also made some changes successfully. Thanks alot for teaching us this thing.
            </p>`
    },
'article-two' : {
    title: 'second article | meenakshi',
    heading: 'article-two',
    date: '20/feb/2017',
    content: `
              <p>
                Hi this is my second file. 
          </p>`
    },
};


function  createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content; 

var htmlTemplate =  `
    <!DOCTYPE html>
    <head>
        <title>
            ${title}
        </title>
         <meta name="viewport" content ="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href= "/">Home </a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
    </html>    
    
`;
  return htmlTemplate; 
}

app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
