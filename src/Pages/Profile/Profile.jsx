import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="mx-auto max-w-lg my-20">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.name}</h2>
                    <p>{user?.email}</p>
                    <div className="card-actions">
                        <button className="btn btn-ghost btn-accent">{user?.role}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;