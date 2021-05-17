import "./styles.css";
import React, {useState} from 'react'

const MyInput = (props) => {
  const handleChange = (e) => {
    if(props.onChange){
      props.onChange(e)
    }
  }
  return(
    <div>
    <p className="input__label">{props.label}:</p>
    <input className="main__input" placeholder={props.placeholder} value={props.value} onChange={(e) => handleChange(e)}/>
    </div>
  )
}

const App = () => {
  const [title, setTitle] = useState("")
  const [fistname, setFirstname] = useState("")
  const [latname, setLastname] = useState("")
  const [adrress1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")
  const [fax, setFax] = useState("")
  const [email, setEmail] = useState("")
  const [cardname, setCradname] = useState("")
  const [cardtype, setType] = useState("")
  const [cardnumber, setCardNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const date = new Date()
  const curYear = date.getFullYear()


  const clickHandler = (e) => {
    e.preventDefault()
    document.getElementById('loader').classList.remove('loader')
    setTimeout(() => {
      document.getElementById('loader').classList.add('loader')
      setTitle('')
      setFirstname('')
      setLastname('')
      setAddress1('')
      setAddress2('')
      setCity('')
      setState('')
      setPincode('')
      setCountry('')
      setCountry('')
      setPhone('')
      setFax('')
      setEmail('')
      setCradname('')
      setType('')
      setCardNumber('')
      setMonth('')
      setYear('')
   }, 1000)
  }

  return(
    <div className='App'>
      <form>
      <MyInput label="Title" placeholder="Enter Title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>

      <MyInput label="First Name" placeholder="Enter name" value={fistname} onChange={(e) => {setFirstname(e.target.value)}}/>

      <MyInput label="Last Name" placeholder="Enter name" value={latname} onChange={(e) => {setLastname(e.target.value)}}/>

      <MyInput label="Address" placeholder="Enter address" value={adrress1} onChange={(e) => {setAddress1(e.target.value)}}/>

      <MyInput label="Address" placeholder="Enter address" value={address2} onChange={(e) => {setAddress2(e.target.value)}}/>

      <MyInput label="City" placeholder="Enter City" value={city} onChange={(e) => {setCity(e.target.value)}}/>

      <MyInput label="State" placeholder="Enter State/Province" value={state} onChange={(e) => {setState(e.target.value)}}/>

      <MyInput label="Pincode" placeholder="Enter pincode" value={pincode} onChange={(e) => {setPincode(e.target.value)}}/>

      <MyInput label="Country" placeholder="Enter Country" value={country} onChange={(e) => {setCountry(e.target.value)}}/>

      <MyInput label="Phone" placeholder="Enter phone" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>

      <MyInput label="Fax" placeholder="Enter Fax" value={fax} onChange={(e) => {setFax(e.target.value)}}/>

      <MyInput label="Email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

      <MyInput label="Name on Card" placeholder="Enter name" value={cardname} onChange={(e) => {setCradname(e.target.value)}}/>

      <MyInput label="Card Type" placeholder="Enter type" value={cardtype} onChange={(e) => {setType(e.target.value)}}/>

      <MyInput label="Card Number" placeholder="Enter number" value={cardnumber} onChange={(e) => {setCardNumber(e.target.value)}}/>


      <div>
        <p className="input__label">Expiry:</p>
        <input className="main__input" placeholder="month" type="number" min="1" max="12" value={month} onChange = {(e) => setMonth(e.target.value)}/>
        <input className="main__input" placeholder="year" type="number" min={curYear} max={curYear+20} value={year} onChange = {(e) => setYear(e.target.value)}/>
      </div>


      <button onClick={clickHandler}>Submit</button>
      </form>
      <div>
        <img id="loader" className="loader" src='/loader.svg'alt="loader" />
        </div>
    </div>
  )
}


export default App 