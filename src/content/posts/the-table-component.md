---
title: The Table Component
published: 2023-07-07
tags:
  - Product
image: https://blog.enveloop.com/content/images/2023/07/blog-product-table-component-13.png
toc: false
lang: en
abbrlink: the-table-component
---

I'm excited to announce that we've launched a new component for the [Enveloop](https://app.enveloop.com) system, and it's now available to all our users – honestly, it's nifty. You may think, "ok, wow, a table component - how (air quotes) exciting can that be?!" but hang in there, and we'll show you.

This first post will give you a brief walkthrough of what we have built, and we'll follow up with a couple of additional posts that go into more technical detail about powerful &amp; useful programmatic and developer-empowering characteristics that we included.

Enveloop is a developer-focused message builder and API that makes it easy to design &amp; send beautiful emails and texts from your app using one simple implementation. You can sign up for free at: [https://app.enveloop.com](https://app.enveloop.com).#### But first, what's a component?Along with the structural tools available in Enveloop to build out a message template, we provide numerous components for you to use. Some example components include: buttons, headers, images, text blocks, etc. – and now the Table Component.

![](https://blog.enveloop.com/content/images/2023/06/Screenshot-2023-06-25-at-4.45.27-PM.png)#### Quacks like a table At the most primitive level, the Table component provides structure to information. It has everything you'd assume a display table should have, including:

- Columns and Rows- Headers- Footers- Styling (borders, colors, font controls)- Alignment
This is perfect for any static, tabular data that you need to include in a message template. Plus, it's easy to match the design elements that already exist in your message brand/styles. However, there's more to it than just the basics.

#### Columns and RowsGlobally, you can define the number of columns each table in your message has. Also, as you add content, you can add or remove additional **Text Rows**. Text Rows, just like they sound, are for, well, static text.

There are two additional types of rows that you can include your table: **Iterable Rows** and **Conditional Rows**.

**Iterable Rows**
These allow you to pass an array of objects to a table row easily. Enveloop will iterate over the array and create a new row for each object.

**Conditional Rows**
You can ask if specific variables are present in an API call. If they are, the row and content inside it is displayed.

We'll go into more detail about these special rows in some additional blogs posts that will be out soon!

#### Headers and FootersHeaders and Footers are considered to be different – sort of a table-inside-your-table, and can have their own styling, rows, and row types. This is a good thing! These added customization perks are especially helpful for adding conditional context to the information you are displaying.

![](https://blog.enveloop.com/content/images/2023/07/Screenshot-2023-07-07-at-9.57.32-AM.png)For example, you can include *(or, not include – remember the Conditional Rows mentioned earlier)* additional instructional information in a header or summary information (sales tax, total spend, etc.) in a footer.

And ... just like the normal table content area, you can use Iterable Rows and Conditional Rows in the header and footer areas. This gives you even more flexibility in how you display data.

### What's Next?There's still much to discuss! We'll be releasing some additional articles that dive into how to use the Iterable and Conditional Rows of tables and how to send data to these functions.

Until then, happy sending!
