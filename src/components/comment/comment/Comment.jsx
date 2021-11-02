import React from 'react'

const Comment = () => {
    return (
        <div>
            <div class="media border p-3">
                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle w-60"/>
                <div className="media-body">
                    <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
