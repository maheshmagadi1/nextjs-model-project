interface POST {
    id: number;
    title: string;
    body: string;
}


export default async function ISRPage() {

    const res = fetch("https://jsonplaceholder.typicode.com/posts/1", { next: { revalidate: 10 }});

    const post = await res.then(r =>r.json()) as POST;

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>⚡ Incremental Static Regeneration Demo</h1>
            <p><strong>Post ID:</strong> {post.id}</p>
            <p><strong>Title:</strong> {post.title}</p>
            <p><strong>Body:</strong> {post.body}</p>
            <small>Page generated at: {new Date().toLocaleTimeString()}</small>
        </div>
    )
}

