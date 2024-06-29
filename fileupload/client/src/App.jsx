import axios from 'axios'
function App() {
  const imageHandler = async (e) => {
    try {
      //   console.log(e.target.files[0])
      const file = e.target.files[0]
      const form = new FormData()
      form.append('img', file)
      const result = await axios.post('http://localhost:8080/api/img',form, {
          headers: {
            "Content-Type":"multipart/form-data"
        }
      })
      console.log(result?.data?.url)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <input type="file" onChange={imageHandler} />
    </>
  )
}

export default App
