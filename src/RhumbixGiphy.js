import { useState } from 'react'
import './RhumbixGiphy.scss'

const RhumbixGiphy = () => {
  const [gif, setGif] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [ACTerms, setACTerms] = useState([])

  // Fetch url
  const fetchGiphy = async (searchTerm) => {
    let res

    try {
      res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`)
    } catch(error) {
      throw new Error(error)
    }

    const resJSON = await res.json()
    const webpageURL = resJSON?.data[0]?.images?.original?.url

    if(webpageURL) {
      const tempArr = webpageURL.split('/')
      setGif(`https://i.giphy.com/media/${tempArr[4]}/giphy.gif`)
    } else {
      console.log('no images found')
    }
  }

  const termsArr = [
    'about',
    'above',
    'across',
    'app',
    'apple',
    'appreciate',
    'bad',
    'ball',
    'balloon',
    'bell',
    'cat'
  ]

  const autoComplete = (str, arr) => {
    let matches = []
  
    // fail fast
    if(!str) {
      return matches
    }
  
    // loop through array and look for exact matches based on length
    // of string
    for(let i = 0; i < arr.length; i++) {
      if(str.toLowerCase() === arr[i].substring(0,str.length).toLowerCase()) {
        matches.push(arr[i])
      }
    }
  
    return matches
  }

  // Controlled input
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    setACTerms(autoComplete(e.target.value, termsArr))
  }

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchTerm) {
      fetchGiphy(searchTerm)
    }
  }

  return (
    <div className='RhumbixGiphy'>
      <div className='RhumbixGiphy_Left'>
        <form onSubmit={handleSubmit}>
          <input name='searchTerm' type='text' onChange={handleChange} value={searchTerm} />
          <button>GIF ME</button>
        </form>
      </div>
      <div>
        <ol>
          {ACTerms.map((term) => {
            return (
              <li onClick={() => {
                fetchGiphy(term)
              }}>
                {term}
              </li>
            )
          })}
        </ol>
      </div>
      <div className='RhumbixGiphy_Right'>
        {gif && (
          <img src={gif} alt='Gif result from gif search' />
        )}
      </div>
    </div>
  )
}

export default RhumbixGiphy
