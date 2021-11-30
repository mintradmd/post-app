import Posts from '../Posts';
import {screen, render} from '@testing-library/react';

describe('Posts:',()=>{
    beforeEach(()=>{
        const posts=[
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "userId": 1,
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
          ]
        render(<Posts posts={posts}/>);
    })

    test('Should Display Comments on Click', () => {
        const postContainer = screen.queryAllByTestId('post-title');
        const firstPost = postContainer[0]
        firstPost.click();
        
        expect(screen.queryByText('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')).toBeInTheDocument();
    })
})

