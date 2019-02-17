---
title: "[Contest] Find out when is the 2019 edition taking place"
brief: Several dozen of people played our contest to get the first 2019 ticket
image: /images/blog/encryption.jpeg
date: 2019-01-20
draft: false
---

Today we released the following tweet

{{< tweet 1087257164182364160 >}}

We created this contest to engage our community and it did not take long (around 20 minutes) until we got a winner 😱!

{{< tweet 1089767584302579712 >}}

If you got stuck , here is the solution:

## Solution

1. Download the [file](http://bit.ly/SaurasTuTrouverLaDateDuDevFestToulouse2019)
1. Recognize that it is a JWT and decode it with <http://jwt.io> for example
1. Extract the data field, and do `base64 -d ...`
1. a `files` on the result says that is a jpeg
1. open it with <https://hexed.it/>
1. and voilà!

Shortcut => [edition 2019 announcement]({{< ref "/blog/get-ready-for-2019" >}})