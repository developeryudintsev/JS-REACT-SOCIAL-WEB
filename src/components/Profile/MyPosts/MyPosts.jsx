import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPost=React.createRef();
    let addPost=()=>{
        // let text=newPost.current.value
        // alert(text)
        props.addPosts(newPost.current.value);
        newPost.current.value='';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPost}></textarea></div>
                <div>
                    <button onClick={ addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {props.profilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;