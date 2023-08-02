import React, {useState} from "react";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
function App() {
  const [userData, setUserData] = useState(null);
  const [inputValue,setInputValue]=useState('')
    async function getData() {
      try {
        let username = inputValue;
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

  const handleOnChenges=(e)=>{
    setInputValue(e.target.value)

  }
  const { avatar_url: img, name, login: myLogin, followers: myFollowers, following: myFollowing, public_repos: myRepos, location, created_at: joined } = userData || {};
  const stats = [
    {
      label: 'Followers',
      value: myFollowers,
    },
    {
      label: 'Following',
      value: myFollowing,
    },
    {
      label: 'Repositories',
      value: myRepos,
    },
  ];
  return (
    <div>
        {/* {console.log(userData)} */}
        
      <SearchBar getData={getData} handleOnChenges={handleOnChenges} />
      <Profile image={img} name={name} login={myLogin} followers={myFollowers} following={myFollowing} repo={myRepos} stats={stats} location={location} joined={joined} />
    </div>
  );
}

export default App;

