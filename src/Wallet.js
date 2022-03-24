import {react, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import simple_token_abi from './Contracts/simple_token_abi.json'
import Interactions from './Interactions';

class Wallet extends react.Component{
	render(){
		return <div>
			<h1>hi I am nice website</h1>
		</div>
	}
}

export default Wallet;