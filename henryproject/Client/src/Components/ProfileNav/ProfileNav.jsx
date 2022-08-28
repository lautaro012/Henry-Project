
export default function ProfileNav ( {logOutClick}) {
    

    return (
        <button onClick={(e) => logOutClick(e)}>LOGOUT</button> 
    )
}