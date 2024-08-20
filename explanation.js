/*
question
we assign the body, user, params object to request and destructure properties we need here?

  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

Yes, that's correct! In the code snippet you provided, you are using object destructuring to extract specific properties from the req (request) object. This is a common practice in Node.js applications, particularly with Express.js, to make your code more concise and readable.

Here's a breakdown of what each line does:

body: { company, position }: This destructures the body property of the req object to extract the company and position properties.

user: { userId }: This destructures the user property of the req object to extract the userId property.

params: { id: jobId }: This destructures the params property of the req object to extract the id property and renames it to jobId.

So, if your req object looks something like this

{
  "body": {
    "company": "ABC Corp",
    "position": "Developer"
  },
  "user": {
    "userId": "12345"
  },
  "params": {
    "id": "67890"
  }
}

After destructuring, you will have:

company = "ABC Corp"
position = "Developer"
userId = "12345"
jobId = "67890"
This destructuring simplifies your code by allowing you 
to directly access these properties without
having to repeatedly reference req.body, req.user, or req.params. */
