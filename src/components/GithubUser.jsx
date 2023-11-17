import React, {useState} from 'react'

function GithubUser() {
    const [username, setUsername] = useState("");
    const [userdata, setUserdata] = useState([]);
    const [showCard, setShowCard] = useState(false);

    const onChangeHandler = (e)=>{
        setUsername(e.target.value)
        
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        setShowCard(true);
        fetch(`https://api.github.com/users/${username}`)
        .then((res) => (res.json()))
        .then((data) => (setUserdata(data)))
    }
  return (
    <>
    <div className='d-flex justify-content-center'>
        <div className="input-group mb-3 mt-5 w-50">
            <input type="text" class="form-control" placeholder="Github username" aria-label="Recipient's username" aria-describedby="button-addon2" value={username} onChange={onChangeHandler}/>
            <button className="btn btn-outline-secondary bg-success text-white" type="button" id="button-addon2" onClick={onSubmitHandler} >Search</button>
        </div>
    </div>


                {/* display data */}
                
{showCard && (
    <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-6 mb-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image p-4">
                  <img
                    src={userdata.avatar_url}
                    alt="github profile"
                    className="rounded float-start"
                    width='200'
                  />
                </div>
                <div className="ml-5 w-100">
                  <h4 className="mb-0 mt-0 text-capitalize">{userdata.name}</h4>
                  <span className="textleft">{userdata.bio}</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      <span className="articles">ID Number</span>
                      <span className="number1 text-center">{userdata.id}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2 text-center">{userdata.followers}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="articles">Following</span>
                      <span className="number1 text-center">{userdata.following}</span>
                    </div>
                  </div>
                  <div className="bg-success rounded-2 text-white p-2 d-flex gap-5 mt-3">
                  <div className="d-flex flex-column">
                      <span className="articles text-white">Location</span>
                      <span className="number1 text-center">{userdata.location}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="articles text-white">Total Repository</span>
                      <span className="number1 text-center">{userdata.public_repos}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default GithubUser
