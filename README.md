# **The demo currently doesn't work because I stopped paying for AWS which the database was hosted on. Will deploy somewhere else over the holidays.**

# CatMash

[Live Demo](https://catmash.c-ehrlich.dev)

![CatMash Screenshot](https://user-images.githubusercontent.com/8353666/175953666-74e94b19-8bcf-4227-8eb4-607e1b6fa00e.png)

## What is this?
Have you ever wanted to rank 11,000 cat pictures by cuteness? Of course you have. That's what we're doing here.

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack. Other than answering one of life's biggest questions, the main point of building this was to create a small project using full-stack Next.JS with tRPC.

## Installation
Install dependencies
```
pnpm i
```

Create a Postgres database. You can use a local database for dev. For deployment, the Railway.app should be able to run the site for free indefinitely as long as it doesn't miraculously become incredibly popular.

Register an API Key with [TheCatApi](https://docs.thecatapi.com/).

Create a `.env` file, based on `.env-example`.

Create the database schema
```
npx prisma db push
```

Run the database population script. You might need to temporarily change the `module` to `common-js` in `tsconfig.json` for the script to work.
```
pnpm populatedb
```

Start the development server
```
pnpm dev
```

## Deployment
As this app is built in full-stack Next.JS, the easiest way to deploy it is on Vercel. Create an app on Vercel, point it at a repo, set environment variables, and you should be good to go. If you're using a different database than you did before, you will need to create the schema and populate the database again, see above.
