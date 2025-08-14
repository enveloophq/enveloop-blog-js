---
title: Introducing: Enveloop Send
published: 2024-03-28
image: https://blog.enveloop.com/content/images/2024/03/blog-product-enveloop-sending-29-1.png
toc: false
lang: en
abbrlink: enveloop-is-a-full-email-provider
---

We're excited to announce that Enveloop is now a full end-to-end email provider.

Our team started out with the goal of empowering developers to create and manage all their email templates. We continued to hear stories of developers struggling with message deliverability and fighting semantically correct HTML and CSS. Plus, they were wanting a path to remove all email-related code and cruft from their apps.

**Our goal: **Take away all that complexity and pain, make it easy for devs to delegate design and content to their team, and wrap it all in a simple-to-use API call.

But, we wanted to take it a step further – allowing you to do all your email design, tracking, and, now, ***sending*** in one spot: Enveloop. 

**Announcing: Enveloop Send!**

You can easily configure and send from an individual email address or sending on entire domains – across all your teams and projects – without needing a separate backend message provider. Enveloop does it all!

*Quick note: Still want to keep your email provider, but use Enveloop for all your message template design and management? No problem – our integrations got you covered!*

### BenefitsLet's take a moment to look into some of the benefits that you receive from using Enveloop Send as your primary email provider.

- **Authentication**. Adding your domain only takes a moment. Plus, we provide you **proper DKIM settings** to add to your domain to ensure proper sending authentication. Also, Enveloop handles all SPF settings automatically.- **Logging**. The best logging in the industry. Seriously. Find out more in: [Enveloop Logging](https://blog.enveloop.com/enveloop-logging/).- **Verified Senders**. Don't have full access to your company domain –  or not sure you are ready to go all-in with Enveloop yet? You can still verify individual company email addresses and then start sending.- **DMARC Monitoring.** Our team closely monitors all DMARC reports and will alert you as to any issues.
So far, so good. Interested in how to set things up? Let's dive into a quick example to show you the steps involved!

## Sending with a Domain NameOnce you've **created your Enveloop account** and are ready to set up sending, choose **Mail Settings**, located in the left-side navigation.

![](https://blog.enveloop.com/content/images/2024/03/sender-id-01.png)Click on the **Add Sender ID** button. 

You'll be prompted to enter a domain name (for example: reallyredpanda.com). Add the domain name.

                        0:00
                        
                            /0:09

                        1×

        Once the domain has been saved, Enveloop will present you with a **DKIM** `TXT` record. You will add this record your domain. 

*(If you need specific help on how to do this with your domain hosting solution, please let us know. We're happy to assist.)*

Once back in Enveloop, you'll notice a **Yellow Shield** icon. This icon will remain in place for a few moments until Enveloop verifies that your `TXT` record was saved correctly.

There is nothing more you need to do at this point – Enveloop will continue to check your domain every 20-30 seconds to verify everything is proper. The entire process should take around 60 seconds.

![](https://blog.enveloop.com/content/images/2024/03/sender-id-03.png)Once the domain-based DKIM record has been verified, you'll see a **Green Shield** icon. From there, you are all set to start sending!

**Default From.** Now that your domain is set up, you can define a *Default From Address* and Name for your email templates. You can override this value inside individual templates, but having a default set up is good practice.

                        0:00
                        
                            /0:06

                        1×

        That's it. Everything is set for you to start sending!

## Verified SendersNow that we've discussed sending messages using any email address on a domain name, let's take a quick look at a more *scoped* approach to sending.

So, why would you want to use a **Verified Sender** vs. a Domain Name? A verified sender is a great option for:

- Using Enveloop to send messages when you do not control or have access to your domain name.- You want to test out Enveloop and aren't ready to add settings to your domain record. *(It's cool – we totally understand!)*
Let's take a brief moment to look at how this works!

### Adding a Verified SenderAfter logging into Enveloop, go the **Mail Settings**, located in the left-side navigation, for the team/project you want to add a sender to.

![](https://blog.enveloop.com/content/images/2024/03/sender-id-01-1.png)Once in mail settings, click on the **Add Sender ID** button.

After that, you'll be prompted to enter the email address you want to send from. Once added, click the **Add Sender ID** button.

                        0:00
                        
                            /0:05

                        1×

        Now, Enveloop will send you an email to that address, starting the process of verifying your access for sending.

Until you verify the email, you will note that Enveloop shows as having an incomplete setup or a **Yellow shield**.

Once the email address has been verified, you'll see a **Green Shield** icon. Now, you are all set to start sending.

Pretty straight-forward!

### Need Help?If you need assistance, advice, or simply have questions about setting all of this up, please reach out. We'd love to help. Find us at: support@enveloop.com
