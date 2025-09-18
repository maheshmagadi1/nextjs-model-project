export default async function SSRPage() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {cache: "no-store" });

    const data = await response.json();

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>🚀 Server-Side Rendering Demo</h1>
            <p><strong>Post ID:</strong> {data.id}</p>
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Body:</strong> {data.body}</p>
            <small>Page rendered at: {new Date().toLocaleTimeString()}</small>
        </div>
    )
}

// To make the same component in client side, uncomment the below code and comment the above code.
// "use client";

// import { useEffect, useState } from "react";

// interface BodyElements {
//     id: number;
//     title: string;
//     body: string;
// }

// export default function SSRPage() {

//     const [data, setData] = useState<BodyElements>({id: 0, title: "", body: ""});

//     useEffect(() => {
//        async function loadData() {
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {cache: "no-store" });
//             const newData = await res.json();
//             setData(newData);
//        }
//        loadData();
//     }, []);

//     return (
//         <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//             <h1>🚀 Server-Side Rendering Demo</h1>
//             <p><strong>Post ID:</strong> {data.id}</p>
//             <p><strong>Title:</strong> {data.title}</p>
//             <p><strong>Body:</strong> {data.body}</p>
//             {/* <small>Page rendered at: {new Date().toLocaleTimeString()}</small> */} 
//             {/* Hydration mismatch error will appear if we execute this in client side, because 
//             NextJS compares the server-side rendered and client-side rendered page though it is client side page.
//             So, if we need time then it is better to set with useState in client side. */}
//         </div>
//     )
// }