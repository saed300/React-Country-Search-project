import React,{useRef, useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchBar = ({countries, placeholder}) => {

  const [filteredCountries, setFilteredCountries] = useState([])
  const inputVal = useRef();

  const handleChange = (e) => {
    const searchedCountry = e.target.value
    const theFilter = countries.filter((destination) => {
      return destination.name.toLowerCase().includes(searchedCountry.toLowerCase()) 
    })

    if(searchedCountry === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(theFilter)
    }
  }

  const clearBtn = () => {
    inputVal.current.value = ''
    setFilteredCountries([])
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder} onChange={handleChange} ref={inputVal}/>
        <div className='searchIcon'>
          {
            filteredCountries.length === 0 ? <SearchIcon /> : <CloseIcon onClick={clearBtn} id='clearBtn' />
          }
        </div>
      </div>
      {filteredCountries.length !== 0 && /*if there is something in the array aka a match then obviously we want to display the data*/
        <div className='dataResult'>
          {filteredCountries.slice(0,50).map((place) => {
            return (
              <a className='dataItem'>
                <p>{place.name}</p>
              </a>
            )
          })}
        </div>
      }
    </div> 
  )
}

export default SearchBar
