import { useState } from 'react'

const RhumbixGiphy = () => {
  const [gif, setGif] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch url
  const fetchGiphy = async (searchTerm) => {
    let res

    try {
      res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`)
    } catch(error) {
      throw new Error(error)
    }

    const resJSON = await res.json()
    const webpageURL = resJSON.data[0].images.original.url
    const tempArr = webpageURL.split('/')

    setGif(`https://i.giphy.com/media/${tempArr[4]}/giphy.gif`)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClick = () => {
    if(searchTerm) {
      fetchGiphy(searchTerm)
    }
  }

  return (
    <div className='RhumbixGiphy'>
      <input name='searchTerm' type='text' onChange={handleChange} value={searchTerm} />
      <button onClick={handleClick}>GIF ME</button>
      {gif && (
        <img src={gif} alt='Gif result from gif search' />
      )}
    </div>
  )
}

export default RhumbixGiphy
