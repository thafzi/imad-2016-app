var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 var articles = {
         'article-one' : {
            title : 'Article-one|thafseer' ,
            heading : 'Article-one',
            date : 's0ep 25 2016',
            content : ` <p> This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>
                    <p> This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>
                    <p> This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>`
                   
        },
         'article-two' :{
            title : 'Article-two|thafseer' ,
            heading : 'Article-two',
            date : 's0ep 20 2016',
            content : ` <p> This is the second Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>
                    <p> This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>`
                   },
         'article-three' :{
             title : 'Article-three|thafseer' ,
            heading : 'Article-three',
            date : 's0ep 18 2016',
            content : ` <p> This is the third Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article  This is the first Article
                   </p>`
        }
 };
        

function CreateTemplate (data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var templateHtml =`
        <HTML>
        <head>
            <title>
                ${title}
            </title>
            <meta name="view port" content="width-device-width , initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
            </div>
        </body>
    </HTML> `;
    return templateHtml;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
res.send(CreateTemplate(articles[articleName]))
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
