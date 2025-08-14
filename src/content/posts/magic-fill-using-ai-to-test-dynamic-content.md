---
title: Magic Fill - Using AI to test dynamic content
published: 2023-11-27
tags:
  - Product
image: https://blog.enveloop.com/content/images/2023/11/magic-fill-23.png
toc: false
lang: en
abbrlink: magic-fill-using-ai-to-test-dynamic-content
---

Enveloop is a developer-focused message builder and API that makes it easy to design &amp; send beautiful emails and texts from your app using one simple implementation. You can sign up for free at: [https://app.enveloop.com](https://app.enveloop.com).People are using AI services to expand products in interesting (and mostly useful) new directions. Similarly, we've been exploring small ways to make the tools built into Enveloop more helpful to our users by sprinkling in implementations of these new capabilities. 

One of our first public experiments is to **give Enveloop users a fast way to generate test data** in for the variables (or dynamic content) that they use in their email and text message templates.

Often, our users craft emails with multiple variables included in their content. For example, it may be something as simple as the name of a user. Other times, it could be something much more complicated –  like a multi-item table that displays a sales receipt. From there, they need an easy way to see "real" data in the message preview, allowing them to refine their designs, see what works, what doesn't, etc.

### Fast Fill for your TablesLet's go with the example of a table for a sales receipt. If you were working on a sales receipt and wanted to display a list of items, their description, and their price – **having to generate all the test data takes time** and, honestly, is a bit of a buzzkill. 

![An image of a message template in Enveloop that has Mustache-formatted variables that represent dynamic data a developer wants to include in a tabular form of a sales receipt.](https://blog.enveloop.com/content/images/2023/11/Screenshot-2023-11-27-at-8.50.43-AM.png)
*As you can see, even a basic sales receipt has multiple areas of dynamic data and, when testing your designs, a dev normally has to provide that information.*
In addition, you aren't overly concerned with the data used as long as it contextually makes sense. And more, it'd be helpful to see a few different sets of data, allowing you to preview the same template in different test states.

Instead of having to hand-fill all of this, just clicking a button would be easier. Right? We think so.

So, we added a feature called **Magic Fill**. Here's some more info!

### How does Magic Fill work?Once you've added variables to your template in the **Build** mode, you can move to the Enveloop **Test** mode (for both email and SMS). The variables you added while building your message will now be listed on the right side of the screen.

                        0:00
                        
                            /0:23

                        1×

            When you move from&nbsp;****Build****&nbsp;to&nbsp;****Test****&nbsp;mode, all the variables you included in your template are available for test data. Click&nbsp;****Magic Fill****&nbsp;and AI will auto-generate relevant test data for you!

        Just below the variables, you'll notice a button called "Magic Fill." It looks at the names of the variables and, using AI, will auto-generate test data that contextually matches what you named the variable. Once complete, the variable values will be filled in, and your message template preview will be updated.

You can see, **live**, what your message would look like with real data, and you can click the "Send Email" button to send a test email to yourself, viewing the message in an email or SMS client of your choice.

### Can I try it again?Not happy with the test data that was returned? Click the **Magic Fill** button again, and the template will refresh with updated values.

Also, if you want to remove all the auto-populated test data, click the Trash Can button to the right, and all data will be cleared out.

Is this a ground-breaking use of AI? Uh, no. 😅 However, our focus is always on finding ways to make the developer experience more enjoyable and rewarding, so we'll continue to think up new ways to add these sprinkles of AI sugar and share them with you.

Our hope is that it saves you time and reduces friction when you're in the creative zone.

Happy sending!
