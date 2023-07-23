import Card from '../components/card';
import { posts } from '../util/api';

export const getStaticProps = async () => {
    try {
      const url = process.env.API_URL;
      const username = process.env.GITHUB_USERNAME;
  
      const [userRes, repoRes] = await Promise.all([
        fetch(url + username),
        fetch(url + username + '/repos'),
      ]);
  
      if (!userRes.ok || !repoRes.ok) {
        throw new Error('Failed to fetch data from the API.');
      }
  
      const [user, repos] = await Promise.all([userRes.json(), repoRes.json()]);
  
      return { props: { user, repos } };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { props: { user: null, repos: null } };
    }
  };
  
const Feed = ({user}) => {
    const filteredData = posts.filter(item => item.pinned === true);
    const restOfData = posts.filter(item => item.pinned !== true);
    return (
        <>
            {
                filteredData.map((item) => {
                    return (
                        <Card item={item} user={user} />
                    );
                })
            }
            {
                restOfData.map((item) => {
                    return (
                        <Card item={item} user={user} />
                    );
                })
            }
        </>
    )
}

export default Feed;