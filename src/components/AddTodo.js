import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or description cannot be blank")
        }
        else
        {
            props.addTodo(title,desc);
             settitle("");
             setdesc("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="form-group mb-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Todo desc</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
