This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Tutorial #5; by [Sonny Sangha.](https://www.youtube.com/watch?v=24xpTmaPOdY&ab_channel=SonnySangha)
## Getting Started

First, clone the project locally:
```bash
git clone https://github.com/lawrence615/google-2-yt.git

cd google-2-yt // change directory

yarn install // install packages
```

## Environment variables
To set the environment variables, start by saving `.env.template` as `.env` or via the terminal:
```bash
cp .env.template .env
```
Generate the API_KEY from [here](https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key) and CONTEXT_KEY from [here](https://cse.google.com/cse/create/new). Then replace them in the `.env` file.
```bash
NEXT_PUBLIC_API_KEY=ACDERTJ_EmuYs7B55hndctsb_yA
NEXT_PUBLIC_CONTEXT_KEY=17hsu72hdkd
```

## Run the app

```bash
yarn dev
```

## New things covered
- [tailwindcss](https://tailwindcss.com/) - will be used for styling instead of of Materual UI. It uses mobile first design principles.
  - creating custom class name inside global.css file
  - use of Tailwind CSS plugin, [@tailwindcss/line-clamp](https://tailwindcss.com/blog/multi-line-truncation-with-tailwindcss-line-clamp), for truncating text to a specific number of lines.
- [heroicons](https://heroicons.com/) - instead of Material Icons, this is what we shall be using. They work natively with Tailwind.
- SSR React
- `Image from "next/image"` - and setting of fetch permissions in the `next.config.js`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- App deployment on Vercel

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
