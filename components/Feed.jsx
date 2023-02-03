import Card from './card';
import { posts } from '../util/api';

const Feed = ({user}) => {
    return (
        <>
            {
                posts.map((item) => {
                    return (
                        <Card item={item} user={user} />
                    );
                })
            }
        </>
    )
}

export default Feed;