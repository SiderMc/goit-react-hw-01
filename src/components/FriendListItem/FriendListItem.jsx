import css from "./FriendListItem.module.css"

export default function FriendListItem({friend:{avatar,name,isOnline}}){
    return <div className={css.card}>
    <img src={avatar} alt={name} className={css.card__image} />
    <div className={css.card__text_content}>
      <p >{name}</p>
      {isOnline && <p className={css.status__online}>Online</p>}
      {!isOnline && <p className={css.status__offline}>Offline</p>}
    </div>
  </div>
  
}