import  css from "./Profile.module.css"

export default function Profile({user}){
    const {username,tag,location,avatar,stats:{followers,views,likes}}=user
    return <div className={css.user__info}>
                <img src={avatar} alt={username} className={css.user__image}/>
                <h2 >{username}
                </h2>
                <p className={css.user__text}>@{tag}</p>
                <p className={css.user__text}>{location}</p>
                <ul className={css.user__list_info}>
                    <li className={css.user__list_info_item}>
                        <span>Folowers</span>
                        <span>{followers}</span>
                    </li>
                    <li className={css.user__list_info_item}>
                        <span>Views</span>
                        <span>{views}</span>
                    </li>
                    <li className={css.user__list_info_item}>
                        <span>Likes</span>
                        <span>{likes}</span>
                    </li>
                </ul>
            </div>
}