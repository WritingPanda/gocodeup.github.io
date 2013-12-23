## What is a Bit?

According to wikipedia, a bit has the following definition:

> A bit is the basic unit of information in computing and digital communications. A bit can have only one of two values, and may therefore be physically implemented with a two-state device. The most common representation of these values are 0 and 1. The term bit is a contraction of binary digit.

Since you already learned about the binary number system, the concept of a bit should be easy to grasp.

Read more about bits here: [http://en.wikipedia.org/wiki/Bit](http://en.wikipedia.org/wiki/Bit)

## What is a Byte?

A byte is a group of bits. Although the number of bits in a byte can be different depending on the computing platform, generally, there are 8 bits in a byte. Without getting too technical, memory in computer systems is addressed down to the byte level. A computer address is similar to your home address, it gives you an easy way to find something.

So how much can a byte store you ask? Well, since a byte is 8 bits, it can hold `2^8` different values, meaning if can hold from the decimal number `0` to `255`. Notice that `255` is one less than `2^8`, because `0` counts as a value.

Read more about bytes here: [http://en.wikipedia.org/wiki/Byte](http://en.wikipedia.org/wiki/Byte)

## Let's talk about Data Types

Although the term data type is pretty self explanatory, it is very important in computing because it gives us vital information about what kind and how much data can be stored.

Here are some basic data types used in computing:

- integers
- booleans
- characters
- floating-point numbers
- character strings

There are other types, but we aren't quite ready for them yet.

Read more about data types here: [http://en.wikipedia.org/wiki/Data_type](http://en.wikipedia.org/wiki/Data_type)

### Integers

Integers store whole (without a decimal point) numbers. Integers can be signed (positive or negative) or unsigned (only positive). The maximum value that an integer can store varies based on the computer platform being used, and whether is it `short` or `long` if supported by the computer language and platform.

Here are some example integers:

```
-10, 1, 0, 5, 230, -423
```

As mentioned above, the number of values an integer can store varies, but integers generally hold up to 32 bits of data. This can be represented as `2^32` or `4,294,967,296` different values. 

Remember how talked about signed an unsigned integers? An unsigned (positive only) 32 bit integer can hold anything from `0` all the way up to `4,294,967,295`.

What if we want to be able to store a negative number? Well, that requires a sign `+ or -`, which we have to store somewhere. Since the sign can be one of two values, that can be stored in one bit. In a 32 bit signed (positive or negative) integer, the sign takes up one bit, which leaves 31 bits to store the number. `2^31` is equal to `2,147,483,648`. This means that our 32 bit signed integer can hold any number from `-2,147,483,648` to `2,147,483,647`. Notice that on the positive side we get one less value? Don't forget, zero is a value and counts toward the positive side.

### Booleans

Fortunately, booleans are quite simple. They can hold one of two values, 0 or 1, where 0 means false and 1 means true. Booleans are used in computer logic, which we will get to soon.

### Characters

A character is an informational unit that corresponds to a symbol, number, letter of the alphabet, or special control sequence.

Here are some example characters, enclosed in single quotes:

```
'A', 'B', 'C', '1', '2', '3', '!', '@', '#', '\r', '\n', '\t'
```

Characters are stored by the computer by converting them to their numeric equivalent. You can learn more about that by looking at a character standard called [ASCII](http://en.wikipedia.org/wiki/ASCII).

### Floating-Point Numbers

Since integers cannot store numbers with a decimal point, we need a way to store those. Floating-point numbers provide that ability.

Here are some examples of floating-point numbers:

```
3.145, 0.5, -128.0, 2E-5
```

The last floating-point number in the example is the computer's representation of scientific notation. If you need a refresher, go here: [http://en.wikipedia.org/wiki/Scientific_notation](http://en.wikipedia.org/wiki/Scientific_notation)

### Character Strings

A character string is simply more than one character stored together. This sentence would be an example of a character string.

## Buffer Overflow

A buffer overflow occurs when you try to store a value in a data type that is too large for that type to hold and the extra data spills over into an address beside it. Oops! Some programming languages such as C and C++ don't have any built-in protection from this so you need to be especially careful. Fortunately, the languages we will be using will instead just truncate the data. That isn't great either, but it is better than the alternative.

Read more about buffer overflow here: [http://en.wikipedia.org/wiki/Buffer_overflow](http://en.wikipedia.org/wiki/Buffer_overflow)

If you were wondering how stackoverflow.com got it's name, now you know.

