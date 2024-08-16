import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendsList.module.css"


export default function FriendsList({friends}){
    return <ul className={css.friends__list}>
        {friends.map(friend=>(
	<li key={friend.id} className={css.friends__list_item}>
		<FriendListItem  friend={friend}/>
	</li>
        ))}
</ul>

}