import Link from "next/link";

export default async function Products({params} : {params: {id: string}}) {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>Product Details Page For the ID : {params.id}</h1>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <Link href="/">Link back to home</Link> 
        </footer>
    </div>
    )
}

// Access this like https://localhost:3000/products/1445
// <Link> Is an alternative to Anchor tag in HTML.