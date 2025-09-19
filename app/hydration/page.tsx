import ShowTitle from "./showTitle";

export default async function HydrationPage() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {cache: "no-store" });

    const data = await response.json();

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>🚀 Server-Side Rendering Demo</h1>
            <p><strong>Post ID:</strong> {data.id}</p>
            {/* <p><strong>Title:</strong> {data.title}</p> */}
            <ShowTitle title={data.title} />
            <p><strong>Body:</strong> {data.body}</p>
            <small>Page rendered at: {new Date().toLocaleTimeString()}</small>
        </div>
    )
}