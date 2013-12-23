## Let's Talk About JavaScript

JavaScript is a programming language used by almost every site on the web. It has been around since 1995, but it has seen huge popularity growth in recent years. Remember Web 2.0? That came about because of the advent of AJAX, which we will discuss shortly. 

Read more about the history of JavaScript here: [http://en.wikipedia.org/wiki/JavaScript](http://en.wikipedia.org/wiki/JavaScript)

### DOM Manipulation and jQuery

You learned about the DOM (Document Object Model) in your HTML lessons. JavaScript, running in the client browser, can modify the structure of the DOM and allows the creation of rich, dynamic user experiences.

In the early 2000's, DOM manipulation with JavaScript was quite painful because frameworks like jQuery weren't around yet. Since JavaScript runs in the client's web browser, and the browser contains the JavaScript engine, the browser type and version will run JavaScript differently and support or not support different features. As you can imagine, this made it hard to develop and test your software for multiple browsers. Fortunately, jQuery came along and made things a lot better.

jQuery is a JavaScript framework that specializes in DOM manipulation and AJAX (coming up next). The developers of jQuery made a simple API (Application Programming Interface) that lets developers manipulate the DOM in a common way, even on different browsers that run JavaScript differently.

Read more about jQuery here:

- [http://jquery.com/](http://jquery.com/)
- [http://en.wikipedia.org/wiki/JQuery](http://en.wikipedia.org/wiki/JQuery)

### What is AJAX?

The acronym AJAX stands for Asynchronous JavaScript and XML. More simply put, AJAX allows the client-side code running in the web server to make a request to the server-side for additional data. This data can then be used to add to or update the DOM on the client side. Before AJAX, you would have to refresh the entire web page to get more data from the server. Ugh!

Read more about AJAX here: [http://en.wikipedia.org/wiki/AJAX](http://en.wikipedia.org/wiki/AJAX)

### What is JSON?

We haven't talked about JSON yet, but that is another important acronym in the realm of JavaScript. JSON stands for JavaScript Object Notation. Don't be intimidated, it is just a way to write down exactly what a group of data in JavaScript looks like. Here is an example:

```
{
  "books": [
    {
      "name": "Book1",
      "author": "Author1"
    },
    {
      "name": "Book2",
      "author": "Author2"
    }
  ]
}
```

The above example shows a list of books with the book name and author. Don't worry if this looks confusing right now. Once you get into the JavaScript lessons this will all make sense.

Read more about JSON here: [http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)

### Client Side AND Server Side?

Until recently, JavaScript has primarily been a client-side language. As you learned earlier, that means that the code runs in your web browser instead of on the web server. Google's work on the V8 JavaScript Engine changed that, and now you can run JavaScript on the server-side too using software like Node.js.

Read more about V8 and Node.js here:


- [http://en.wikipedia.org/wiki/V8_(JavaScript_engine)](http://en.wikipedia.org/wiki/V8_(JavaScript_engine))
- [http://nodejs.org/](http://nodejs.org/)
- [http://en.wikipedia.org/wiki/Node.js](http://en.wikipedia.org/wiki/Node.js)
