"use client";

import { useState } from "react";
export default function ShowTitle({title}: {title: string}) {

    const [viewState, setViewState] = useState(false);

    const setView = () => {
        setViewState(!viewState);
    }

    return (
        <div>
            <div><strong>Title: </strong>{viewState ? title : '*********' }</div>
            <button onClick={() => setView()}>Click here to view title</button>
        </div> 
        
    )
}