import React, { useState, useEffect } from "react";
import PostLists from "../components/PostLists";
import postStore from "../stores/postStore";
import { getPosts, getHorsens } from "../actions/postActions";

function PostPage() {
    const [posts, setPosts] = useState(postStore.getPosts());
    const [data, setData] = useState(postStore.getData());

    useEffect(() => {
        postStore.addChangeListener(onChange);
        if (postStore.getPosts().length === 0) getPosts();
        getHorsens();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setPosts(postStore.getPosts());
    }

    return (
        <div>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;
