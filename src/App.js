import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post'

const App = () => {
  // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(10)
  // const responseInfo = useGetPostByLimitQuery(10)
  // const [deletePost, responseInfo] = useDeletePostMutation()
  // const [createPost, responseInfo] = useCreatePostMutation()
  const [updatePost, responseInfo] = useUpdatePostMutation()

  const newPost = {
    title: 'New Title',
    body: 'This is a New Body.',
    userId: 1,
  }

  const updatePostData = {
    id: 1,
    title: 'Updated Post Title',
    body: 'This is a New Updated Post Body.',
    userId: 1,
  }

  console.log("Response Information:", responseInfo)
  console.log("Data:", responseInfo.data)
  console.log("Success:", responseInfo.isSuccess)
  if (responseInfo.isLoading) return <h1>Loading...</h1>
  if (responseInfo.isError) return <h1>Oh no, there is an error. {responseInfo.error.error}</h1>

  return (
    <>
      {/* Getting All Data */}
      {/* <div className="App">
      <h1>Redux Toolkit - RTK Query ( Getting All Data)</h1>
      {responseInfo.data.map((post, i) =>
        <div key={i}>
          <h2>{post.id}) {post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
      )}
    </div> */}

      {/* Getting Single Data */}
      {/* <div className="App">
        <h1>Redux Toolkit - RTK Query ( Getting Single Data)</h1>
        <h2>{responseInfo.data.id}) {responseInfo.data.title}</h2>
        <p>{responseInfo.data.body}</p>
        <hr />
      </div> */}

      {/* Getting Limited Data */}
      {/* <div className="App">
        <h1>Redux Toolkit - RTK Query ( Getting Limited Data)</h1>
        {responseInfo.data.map((post, i) =>
          <div key={i}>
            <h2>{post.id}) {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )}
      </div> */}

      {/* Deleting Data */}
      {/* <div className="App">
        <h1>Redux Toolkit - RTK Query ( Deleting Data)</h1>
        <button onClick={() => { deletePost(2) }}>Delete Post</button>
      </div> */}

      {/* Creating Data */}
      {/* <div className="App">
        <h1>Redux Toolkit - RTK Query ( Creating Data)</h1>
        <button onClick={() => { createPost(newPost) }}>Add Post</button>
      </div> */}

      {/* Updating Data */}
      <div className="App">
        <h1>Redux Toolkit - RTK Query ( Updating Data)</h1>
        <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
      </div>

    </>
  );
}

export default App;
