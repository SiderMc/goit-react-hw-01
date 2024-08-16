import userData  from "../../data/userData .json"
import friendsData from "../../data/friendsData.json"
import transactionsData from "../../data/transactionsData.json"
import Profile from "../Profile/Profile"
import FriendsList from "../FriendsList/FriendList"
import Transactions from "../TransactionHistory/TransactionHistory"
import css from "./App.module.css"

export default function App() {
return <div className={css.wrapper}>
             <div className={`${css.container} ${css.main__content}`}>
              <section className={css.section__profile}>
                <Profile user={userData }/>
              </section>
              <section className={css.section__friends}>
                <FriendsList friends={friendsData} />
              </section>
              <section className={css.section__transactions}>
                <Transactions transactions={transactionsData} />
              </section>
             </div>
           </div>
}


