import Post from './Post';
import {useState, useEffect} from 'react';
import {getPosts} from './networkCalls';

const Posts=(props)=> {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        async function setData(){
            const data = await getPosts();
            setPosts(data);
        };
        setData();

    }, [])

    return <div data-testid='posts'>
        {posts && posts.map((post, index) => <div key={index}> <Post index={index} post={post}/> </div>)}
    </div>;
}



export default Posts;
