import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Users from './components/Users';
import { getPosts } from './reducers/PostSlice';


function App() {

  const dispatch = useDispatch()

  const newUserId = useSelector(state => state.user.newUserId);
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts({ title : "qui est esse" }))
  }, [])

  return (
    <div className="App">
       New User id = {newUserId}
       <Users/>
       <hr/>
       {posts.map(post => (
         <div>{post?.title}</div>
       ))}
    </div>
  );
}

export default App;
