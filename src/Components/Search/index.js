import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
    static propTypes = {
        updateAppStates: PropTypes.func.isRequired
    }

    search = ()=>{
        const {value} = this.keywordNode
        // 发送请求前，通知App组件更新状态
        this.props.updateAppStates({isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response=>{
                this.props.updateAppStates({isLoading: false, users: response.data.items})
            },
            error=>{
                this.props.updateAppStates({isLoading: false, err: error})
            }
        )
    }

    render() {
        return (
            <div className='search-bar'>
                <h2>搜索Github用户</h2>
                <input ref={c=>this.keywordNode=c} placeholder='请输入关键字' className='search-area' />
                <button onClick={this.search} className='search-btn'>搜索</button>
            </div>
        )
    }
}
