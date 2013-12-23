## What is a Variable?

You can probably guess this one… A variable is something that can change or vary. In the case of computers, a variable holds data that can be changed. If you wanted to describe a variable in a running computer program you could define the following characteristics:

- Data Type
- Value
- Location
- Accessibility

We discussed some examples of data types earlier. Besides data type, a variable will have a value. Even the absence of a value is a value.

A variable will also have a location (in computer memory). Remember when we talked about addresses in the computer? Without getting too technical, the computer has to store the variable somewhere. To do that, it gives it an address or block of address, based on its size.

A variable will also have different accessibility based on many different things. This may be based on something called scope, or it may be that the variable was declared protected or private. We aren't ready for this yet, but just keep in mind that just because a variable exists doesn't mean you can get to it.

### Declaring a Variable and Assigning a Value

If we need to store a value, we need to tell the computer we want a new variable. This process is called "declaring" a variable. This process varies from language to language. Let's say we want a variable called `awesome` and we want it to have a value of `true`.

```
PHP:          $awesome = true;
JavaScript:   var awesome = true;
C#:           bool awesome = true;
Java:         boolean awesome = true;
Ruby:         awesome = true
```

As you can see, different programming languages have different syntax for doing the same things. Don't worry, you'll get used to it. And once you know a couple languages, more come very easily.

Notice in the example above that some languages require us to tell the computer the type of variable, and others just allowed us to declare the variable without giving the type. This depends on whether the language is statically or dynamically typed. Let's see what that means.

### Statically vs Dynamically Typed

The word static implies that something doesn't change, and dynamic implies that it does. In the case of statically typed languages, this means that a variable is declared, along with a type, and that the type doesn't change. If you try to put a value in the variable that is of the wrong type you will probably receive an error or end up with some undesirable issues.

Dynamically typed languages tie the type to a value, instead of a variable. This means that the variable essentially takes on the type of the data that it is holding, and when that value changes, the type will change accordingly.

## Constants

Sometimes, we want to give something a value, and we don't want that value to change. In those cases, we should use constants instead of variables. Constants are great for declaring something like pie or the acceleration due to gravity. Again, the syntax for declaring constants differs, and some languages don't even offer such functionality.