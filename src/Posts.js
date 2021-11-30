import PropTypes from 'prop-types'

const Posts=(props)=> {
    const {posts} = props;
    return <div data-testid='posts'>
        {posts && posts.map((post, index) => <div key={index} data-testid='post-title'>{post.title}</div>)}
    </div>;
}

Posts.propTypes={
    posts: PropTypes.array.isRequired,
}

export default Posts;