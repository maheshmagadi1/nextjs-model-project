interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function SSGPage() {
    const res = fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: "force-cache"});

    const post = await res.then((r) => r.json()) as Post;
    
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📖 Static Site Generation Demo</h1>
      <p><strong>Post ID:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
      <small>Page generated at: {new Date().toLocaleTimeString()}</small>
    </div>
  );
}

// This is for Next.js 12 and earlier
// ✅ This function runs at *build time*
// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }