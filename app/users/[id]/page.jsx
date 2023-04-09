async function getUser(id){
const res = await fetch(`https://reqres.in/api/users/${id}`);
const data =await res.json();
//console.log(id);
return data.data
}


async function UserPage({params}){
console.log(params);
const user= await getUser(params.id)
return (
<div>
  <h1>User Details</h1>
  <div className="row">
    {/*JSON.stringify(user)*/}

    <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-header text-center">
          <img src={user.avatar} alt={user.email} />
        </div>
        <div className="card-body text-center">

        <h3>
          <p>{user.id} {user.first_name} {user.last_name} </p>
        </h3>
        <p> {user.email} </p>
        </div>
      </div>

    </div>

  </div>

</div>
)
}
export default UserPage