---
title: Email Monitoring with Enveloop
published: 2024-08-12
image: https://blog.enveloop.com/content/images/2024/08/blog-enveloop-monitoring-36.png
toc: false
lang: en
abbrlink: email-monitoring-with-enveloop
---

The team has added another great feature to Enveloop: **Deliverability Monitoring**. 

With Monitoring, you get critical insight and a visual representation of DMARC reports, allowing you to quickly **observe your sending performance** and, more importantly, **quickly find deliverability hotspots** that need your attention.

A bit of background, then we'll dig into the feature!

Enveloop is a developer-focused message builder and API that makes it easy to design &amp; send beautiful emails and texts from your app using one simple implementation. You can sign up for free at: [https://app.enveloop.com](https://app.enveloop.com).### Why it Matters to MonitorEveryone wishes it was simple to send a legit email and have confidence the message will be delivered fast. Email is a simple and centralized way to get valuable information (for both action and record) to someone. Unfortunately, this technology has been abused, so the doorway to mail servers has become a gauntlet of complexity for developers. 

Given these challenges, you still need to have confidence that you are succeeding in delivering critical information to your users. Sure, it's nice to trust a service like Enveloop to send messages using best practices, but you need to see repeated evidence that all is in order. Accurately set up email services and domains can still run afoul of tighter mail exchanges and changing standards.

So, how does Enveloop help you with this?

In addition to [message logging](https://blog.enveloop.com/enveloop-logging/), Enveloop Monitoring receives and processes  DMARC reports issued by mail exchanges, providing a visual map for your on-the-ground message performance. 

### What are DMARC Reports?In a basic understanding, DMARC reports are like **report cards for emails sent**. These report cards, issued by the receiving mail exchanges, give you a lay-of-the-land for how emails, sent from you, were handled when they arrived at your user's mail server.

The problem – the report just a big, sometimes confuing, XML dump. Trying to wade through the boilerplate to find the critical parts you need, and aggregating all the structured data, is, well, not-fun.

So, when you [set up your sending domain through Enveloop](https://docs.enveloop.com/product-guides/getting-started/adding-a-sending-domain), we start to receive all your reports and, via our Monitoring tool, provide you a visual way to look across these DMARC responses issued about your domain. You can see weekly or monthly trends. You can also dig deeper into specific reports, by source domain or IP, and, if needed dig into the raw XML.

### Enveloop MonitoringAll of this is provided via the Enveloop **Monitoring** tab *(you can find it in the primary navigation for Enveloop)*. Assuming you have [configured your sending domain ](https://docs.enveloop.com/product-guides/getting-started/adding-a-sending-domain)when using Enveloop, you will be able to view reports, for a given date range, that include percentages of:

- DMARC compliance- DKIM verification- SPF verification
💪Enveloop makes it easy to see all the reports across your sending domain, not just for messages you send through Enveloop!![](https://blog.enveloop.com/content/images/2024/08/enveloop-dmarc-monitoring.webp)You can see multiple reports and trending all on one screen.Along with the base reports, you can narrow down your Monitoring window by using the following options:

**Date Range**

You have the option to adjust the date range of the reports mail servers have issued about your domain. You can choose from simple selections, such as weeks, or provide a custom date. This is helpful when understanding trends.

**Report Summaries**

For a given date, view high-level numbers for DMARC reports you have received from participating mail servers. This saves tons of time where you'd normally be digging through difficult-to-understand XML documents.

**Submitter Detail**

You can view, in detail, a DMARC response received for your domain and the mail server that issued it. Enveloop Monitoring provides a quick view for DMARC and DKIM compliance -- plus, for each report received, you can click the report to view a visual breakdown *(including source IP and source domain)*.

![](https://blog.enveloop.com/content/images/2024/08/enveloop-dmarc-report-detail.webp)Easily look at detailed information included in each DMARC report.### Monitoring and LoggingSo, as you can see, alongside [Logging](https://docs.enveloop.com/product-guides/logging), Enveloop Monitoring gives you full view of your message performance once your messages have left your server and interacted with mail exchanges around the world.

We're already working on ways to expand monitoring and logging to cover additional areas of sending. If you like what you see here, but are curious if we can include additional monitoring and logging features, [please let us know](mailto:hey@enveloop.com)!

Happy sending!

### Try Enveloop!Enveloop is [**free to get started**](https://app.enveloop.com/) and you can build out and send you first template in under 5 minutes! Storing all your message code, design, and provider integrations in your app is an anti-pattern. Enveloop helps you send better messages and allows you to easily delegate messaging to others on your team!
