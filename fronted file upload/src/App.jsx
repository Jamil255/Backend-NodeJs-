import axios from 'axios'

function App() {
  const imageHandler = async (e) => {
    try {
      let file = e.target.files[0]
      let form = new FormData()
      form.append('img', file)
      const res = await axios.post(
        'http://localhost:3000/api/imageupload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log('res', res)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <input type="file" onChange={imageHandler} />
    </>
  )
}

export default App
