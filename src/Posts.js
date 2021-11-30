import PropTypes from 'prop-types'

import Post from './Post';

const Posts=(props)=> {
    const {posts} = props;
    return <div data-testid='posts'>
        {posts && posts.map((post, index) => <div key={index}><Post index={index}  post={post}/></div>)}
    </div>;
}

Posts.propTypes={
    posts: PropTypes.array.isRequired,
}

export default Posts;
