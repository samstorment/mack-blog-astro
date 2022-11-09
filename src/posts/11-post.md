---
title: A blog post explaining to MacK how Markdown works
slug: a-blog-post-explaining-to-mack-how-markdown-works
preview: A markdown file is a text file that ends with `.md`. It's an easy way to write human readable text that can be displayed on the web.
date: 2022-12-25
author: Sam Storment
thumbnail: https://static1.therichestimages.com/wordpress/wp-content/uploads/2015/02/shutterstock_Cute-Dog.jpg
---

## What is a markdown file

A markdown file is a text file that ends with `.md`. It's an easy way to write human readable text that can be displayed on the web. This post was written using a markdown file.

## How do you write it?

Everything in this file up to this point looks like the following:

```
---
title: A blog post explaining to MacK how Markdown works
slug: a-blog-post-explaining-to-mack-how-markdown-works
preview: A markdown file is a text file that ends with `.md`. It's an easy way to write human readable text that can be displayed on the web.
date: 2022-12-25
author: Sam Storment
thumbnail: https://static1.therichestimages.com/wordpress/wp-content/uploads/2015/02/shutterstock_Cute-Dog.jpg
---

## What is a markdown file

A markdown file is a text file that ends with `.md`. It's an easy way to write human readable text that can be displayed on the web.

## How do you write it?

Everything in this file up to this point looks like the following:
```

### Frontmatter

The section the surrounded by the 3 `---` (called guards) is called frontmatter. This is metdata about your file that can be read and displayed on your site.

`title`, `date`, and `author` are read from this markdown file and displayed at the top of the blog

`slug` is the url text, meaning post is located at [/blog/a-blog-post-explaining-to-mack-how-markdown-works](/blog/a-blog-post-explaining-to-mack-how-markdown-works)

`preview` and `thumbnail` are displayed on the [main blog page](/blog). Preview gives the user a 1 or 2 line sneak peek of the blog post's content while thumbnail is a background image.

Other frontmatter values could be added and you could give them any name you want, but they wouldn't do anything until they were actually used in the code of the website.


### Headings

Headings are a `#` followed by a space and then your desired heading text. The number of `#`s determines the heading size. The largest heading with only a single `#` should be avoided in your markdown because it is convention to only have 1 per page and we already use the largest heading for the blog post title.

```
# Heading 1 - largest
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 - smallest
```

### Paragraphs

Normal blocks of text. To write these, do nothing special other than starting a new line. Below is a heading followed by a couple of paragraphs. These should all be on one line. You can use a text editor to write these that wraps single line text to multiple lines.

```
## My cool paragraph

Hey there Delilah what is it like in New York City? You're 1000 miles away but tonite u look so pretty. Yes you do!

I am Rosemary's granddaughter The spitting image of my father And when the day is done My momma's still my biggest fan Sometimes I'm clueless and I'm clumsy But I've got friends that love me And they know just where I stand It's all a part of me And that's who I am
```

### Lists

Lists can be ordered with numbers, or unordered with bullets.

#### Unordered List 

Just add some `*`s followed by a space and then your list item text. Can add sub items by indenting.

* Cool!
    * Sub item
* Yes!!!
* Oh yah man!

`is written`

```
* Cool!
    * Sub item
* Yes!!!
* Oh yah man!
```

#### Ordered List

1. First Thing
    * Nested unordered list
    * item 2
2. Thing 2 oh yes
    1. Nested ordered
    2. item 2
3. third thing on this list

`is written`

```
1. First Thing
    * Nested unordered list
    * item 2
2. Thing 2 oh yes
    1. Nested ordered
    2. item 2
3. third thing on this list
```




### Tables

Tables are annoying and you have to be a pipe artist to use them well. There's probably some software that makes writing markdown tables (or markdown in general) much nicer. You don't actually need to match the spacing for each row, I just did that to make it prettier.  

You do need text separated by `|` characters and the 2nd row should have at least one `-` between each pipe to signify that the top is the header row and everything below is table data.

|My First table heading | My Second table Heading | The third heading |
|-----|----|----|
| row 1 col 1| row 1 col 2| row 1 col 3 |
| row 2 col 1| row 2 col 2| row 2 col 3 |
| row 3 col 1| row 3 col 2| row 3 col 3 |

```
|My First table heading | My Second table Heading | The third heading |
|-----------------------|-------------------------|-------------------|
| row 1 col 1           | row 1 col 2             | row 1 col 3       |
| row 2 col 1           | row 2 col 2             | row 2 col 3       |
| row 3 col 1           | row 3 col 2             | row 3 col 3       |
```

### Quotes

Write quoted text by starting your line with a `>`

> Quoted Text is cool!

> Here's anothe blockquote with a child quote
>
>> Wow I'm the kid!!!

```
> Quoted Text is cool!
```

### Bold, Italic, Underline, and Strikethrough

**This is Bold Text**

*This is Italicized text*

***This is both bold and italicized*** 

~There is a line through this guy~

<u>You can underline</u>, but you probably shouldn't as it might make people think you're using a link

```
**This is Bold Text**

*This is Italicized text*

***This is both bold and italicized*** 

~There is a line through this guy~

<u>You can underline</u>, but you probably shouldn't as it might make people think you're using a link
```

### Horizontal Rule - AKA Big Line Separator

***

There's a big line above me and below me

---

```
***

There's a big line above me and below me

---
```

### Links

Links are displayed using brackets `[]` and parentheses `()`. Inside the brakcets you put the text you want to be displayed for the link and inside the parentheses you put the actual link.

[Here is a link to a cool youtube video](https://www.youtube.com/watch?v=ZYj4NkeGPdM)

```
[Here is a link to a cool youtube video](https://www.youtube.com/watch?v=ZYj4NkeGPdM)
```

### Images

Images are displayed exactly like links but you put an exclamation point before the brackets. Without the exclamation point it would just function as a link because we use image urls to display images (which would also be valid if you'd prefer a link to an image)

After te image link still inside of the brackets, you can put some text inside of double quotes `"` that acts as the title text of the image when you hover over it

![Scooby doo sure knows how to dunk](https://cdn.drawception.com/images/panels/2014/11-11/c1cnnm214K-8.png "Scooby doo dunking the basketball so nicely!")


```
![Scooby doo sure knows how to dunk](https://cdn.drawception.com/images/panels/2014/11-11/c1cnnm214K-8.png "Scooby doo dunking the basketball so nicely!")
```

### HTML

You can also use HTML if you're feeling crazy but probably don't because it's messy and unpredictable

<div style="display: flex; flex-wrap: wrap; gap: 1em; padding: 1em; box-shadow: 0 0 1em 0 gray; border-radius: 1em;">
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Hey!</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Heres some cool text</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">This text is a different length woah!!</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Scooby Doo</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Zoe Deschannel</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Oh Yeah Baby</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">We're having fun with HTML</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">2 to go</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">1 more</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">we made it</div>
</div>


```
<div style="display: flex; flex-wrap: wrap; gap: 1em; padding: 1em; box-shadow: 0 0 1em 0 gray; border-radius: 1em;">
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Hey!</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Heres some cool text</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">This text is a different length woah!!</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Scooby Doo</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Zoe Deschannel</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">Oh Yeah Baby</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">We're having fun with HTML</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">2 to go</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">1 more</div>
    <div style="padding: 1em; border: 1px solid pink; flex: 1; white-space: nowrap; background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%); color: white; text-shadow: 2px 2px 2px black; font-family: sans-serif;">we made it</div>
</div>
```