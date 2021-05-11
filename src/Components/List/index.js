import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        isFirst: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        err: PropTypes.string.isRequired
    }

    render() {
        const {users, isFirst, isLoading, err} = this.props;
        return (
            <div className="result">
                {
                    isFirst ? <h1>输入关键字，然后点击搜索</h1>:
                    isLoading ? <h1>加载中......</h1>:
                    err ? <h1>{err.message}</h1>:
                    users.length===0 ?<h1>未找到相关用户...</h1>:
                    users.map((user)=>{
                        return <Item key={user.id} html_url={user.html_url} img_src={user.avatar_url} img_desp={user.login} />
                    })
                }   
            </div>
        )
    }
}
