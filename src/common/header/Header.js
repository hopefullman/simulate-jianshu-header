import React, { Component } from 'react';
import {HeaderWrap,Logo,Nav,NavItem,NavInputWrap,NavInput,Add,Btn} from './headerstyle.js';
import {CSSTransition} from 'react-transition-group';
class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			focused:false
		}
		this.onfocus=this.onfocus.bind(this);
		this.onblur=this.onblur.bind(this);
	}
	onfocus(){
		this.setState({
			focused:true
		})	
	}
	onblur(){
		this.setState({
			focused:false
		})	
	}
  render() {

    return (
      <HeaderWrap>
       <Logo href='/' />
       <Nav>
       	<NavItem className='left active'>首页</NavItem>
       	<NavItem className='left'>下载APP</NavItem>
       	<NavItem className='right'>登录</NavItem>
       	<NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
       	<NavInputWrap>
       	<CSSTransition
       		timeout={300}
       		in={this.state.focused}
       		classNames='slide'
       	>
       	<NavInput className={this.state.focused? 'focused':''} onFocus={this.onfocus} onBlur={this.onblur}></NavInput>
       	</CSSTransition>
       	<span className={this.state.focused? 'focused iconfont':'iconfont'}>&#xe60a;</span>
       	</NavInputWrap>
       </Nav>
       <Add>
       	<Btn className='reg'>注册</Btn>
       	<Btn className='wri'><span className="iconfont">&#xe615;</span> 写文章</Btn>
       </Add>
      </HeaderWrap>
    );
  }
}

export default Header;