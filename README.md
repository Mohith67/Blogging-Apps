# Next.js Blog App

This is a minimal Next.js blog scaffold that uses markdown files for posts and static generation (getStaticProps/getStaticPaths).

How to run (Windows, PowerShell):

```powershell
cd "c:\Users\Mohith Revilla\blog_app"
npm install
npm run dev
```

Open http://localhost:3000

Notes:
- Posts are stored in the `posts/` directory as markdown files.
- `lib/posts.js` contains helpers to read and parse posts.
