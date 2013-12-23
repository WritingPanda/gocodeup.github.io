## Mysteries of the Web Revealed

You use the web all the time, but do you know how it works? When you go to your Facebook or Twitter page, how does the web browser know where to go? If it all seems like magic right now, we will pull the curtain back so you can see exactly what is going on.

### URL

Let's start with the web [URL](http://en.wikipedia.org/wiki/Uniform_resource_locator). That stands for Uniform Resource Locator. More simply put, it is just a web address. The next question is how does a URL know where to take you?

### DNS

That brings us to [DNS](http://en.wikipedia.org/wiki/DNS), which stands for Domain Name System. The job of a DNS is to translate domain names to IP addresses.

### IP Address

An [IP](http://en.wikipedia.org/wiki/IP_address) address is an Internet Protocol address. An example of an IP address (v4) is 74.125.225.233. At the time of this writing, that points to google.com. There is actually a regulatory group that manages all of the IP address space for the internet.

So what is the deal with DNS, domain names, and IP addresses? Well, imagine if you had to type 74.125.225.233 in your web browser every time you wanted to visit Google. And then try to remember the IP addresses for Facebook and Twitter too. Ouch, my head already hurts! Domain names give us something easy to remember, and IP addresses give us an exact server location. DNS provides the glue to connect the two. Now it all makes sense, right?

### HTTP

You know when you access a web page how you will start with "http://"? Well, [HTTP](http://en.wikipedia.org/wiki/HTTP) is an acronym that stands for Hyper Text Transfer Protocol. In computer jargon, the word protocol means that there is a formalized way to communicate. There are lots of protocols, but for now let's just get HTTP under our belt.

The HTTP communication rules define functions that provide for a request and a response. The request and response go back and forth between a client and a web server. For now, let's just talk about two basic HTTP functions:

- GET
- POST

There are more, but we have to start somewhere, right? Let's talk about you accessing Google through your web browser. When you type in google.com and hit enter, at a high level, the following things happen:

- Google.com gets translated to 74.125.225.233 by DNS.
- Your web browser establishes a connection to the Google web server.
- Your web browser sends an HTTP `GET` request asking Google for its main page.
- Google's web server responds with the page you asked for.

So, the example above described an HTTP `GET` request. What about `POST`? Well, that is generally used when you submit forms on the web.

### HTTP Status Codes

We have all seen these from time to time: Oops, page not found. Yipes, internal server error!

HTTP has a special set of codes that can be returned in response to a request that describe exactly what happened, whether good or bad. Here are some common codes to be familiar with:

- 200 (OK)
- 404 (Page Not Found)
- 500 (Server Error)

There are lots more, and you can read about them here: [http://en.wikipedia.org/wiki/List_of_HTTP_status_codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

### Subdomains

So what is with web site addresses that start with "www."? When you precede a domain name with "www.", you are actually accessing something called a subdomain. A subdomain is the part of the URL that comes after the http:// and before the domain name. For example, `mail` is the subdomain for the following URLs:

- http://mail.google.com
- http://mail.yahoo.com

A web domain may have one, none, or many subdomains. Each subdomain can do something different based on how the web server and DNS is configured. That is nice because maybe you want your mail server to be separate from your web server, so you just have a mail subdomain that points to a different IP address. Simple, right?

That brings us back to our original question… what is with the "www."? Well, it is actually a remnant of old web servers that had a folder named "www". The web site files would go here and the site would be accessed via the "www" subdomain. It was used long enough that it became familiar and is still used even though it isn't necessary. You will see a lot of web sites that don't use "www" in the address at all. Try going to http://www.stackoverflow.com and you'll get redirected to http://stackoverflow.com.

One thing to note is that whether you use "www" or not, just stick with one for SEO (search engine optimization) purposes.

### SSL

Don't make a credit card purchase without it! SSL is an acronym that stands for secure sockets layer. You probably already know this, but SSL encrypts the data that is transferred between the client computer and the web server so that it can't be intercepted and read by someone else.

Read more about SSL here: [http://en.wikipedia.org/wiki/Secure_Sockets_Layer](http://en.wikipedia.org/wiki/Secure_Sockets_Layer)

