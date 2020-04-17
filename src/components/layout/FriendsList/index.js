import React, { Component } from 'react'
import style from './friendsList.module.scss'
import { faUserFriends, faPlusCircle, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FriendsList extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    checked = event => {

        if (event.target.checked) {
            document.getElementById('friendsList').style.display = 'block';
            this.setState({ show: true })
        }
        else {
            document.getElementById('friendsList').style.display = 'none';
            this.setState({ show: false })
        }
    }

    render() {
        return (
                <div className={style.parent}>
                    <div className={style.list}  id='friendsList'>
                        <div className={style.friendsList}>
                            <h3>Amis</h3>
                            <div className={style.toolbar}>
                                <form>
                                    <input type='text' className={style.searchInput} placeholder='Rechercher un ami' />
                                    <button><FontAwesomeIcon icon={faSearch} /></button>
                                    <span className={style.newFriend}><FontAwesomeIcon icon={faPlusCircle} /></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <label className={style.show}>
                        <input type='checkbox' onChange={this.checked} />
                        <span className={style.icon} id='icon'>
                            <FontAwesomeIcon icon={ this.state.show ? faTimesCircle : faUserFriends} />
                        </span>
                    </label>
                </div>
        )
    }
}

export default FriendsList