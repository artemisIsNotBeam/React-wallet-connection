import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import simple_token_abi from './Contracts/simple_token_abi.json'
import Interactions from './Interactions';

const Wallet = () => {

	// ganache-cli address
	const contractAddress = '';

	const [tokenName] = useState("Token");
	const [connButtonText, setConnButtonText] = useState("Connect Wallet");
	const [setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);

	const [setProvider] = useState(null);
	const [setSigner] = useState(null);
	const [setContract] = useState(null);

	// remeber temp provider is it
	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			})


		} else {
			console.log('need to install metamask');
			setErrorMessage('Please install MetaMask');
		}
	}

	const accountChangedHandler = (newAddress) => {
		setDefaultAccount(newAddress);
		updateEthers();
	}

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);

		let tempSigner = tempProvider.getSigner();

		let tempContract = new ethers.Contract(contractAddress, simple_token_abi, tempSigner)

		setProvider(tempProvider);
		setSigner(tempSigner);
		setContract(tempContract);
	}

	const Runcontract = function(address, contractABI){
		console.log("hiiiiii")
	}
	
return (
	<div>
		<h2> {tokenName + " ERC-20 Wallet"} </h2>
		<button className={styles.button6} onClick={connectWalletHandler}>{connButtonText}</button>

		<div className = {styles.walletCard}>
			<div>
				<h3>Address: {defaultAccount}</h3>
			</div>
		</div>
	</div>
	);
}

export default Wallet;