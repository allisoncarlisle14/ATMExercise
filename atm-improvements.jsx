const ATMTransaction = ({ onChange, transactionType, valid }) => {
    console.log('ATMTransaction');
    return (
      <label>
        <h3> {transactionType} </h3> 
        <input type="number" min = '0' step = '0.01' width="200" onChange={onChange}></input>
        <input type="submit" disabled={!valid} value="Submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    console.log('Account');
    const [amount, setAmount] = React.useState(0);
    const [savingAccountBalance, setSavingAccountBalance] = React.useState(0);
    const [checkingAccountBalance, setCheckingAccountBalance] = React.useState(0);
    const [transactionType, setTransactionType] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
    const [accountType, setAccountType] = React.useState('');
  
    
    const findAccountBalance = () => {
    if (accountType === 'Saving') {
        return savingAccountBalance;
      } else if (accountType === 'Checking') {
        return checkingAccountBalance;
      }
    }
    
    const handleChange = (event) => {
      console.log('handleChange');
      console.log(Number(event.target.value));
      let accountBalance = findAccountBalance();
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
      } 
      if (transactionType === 'Withdraw' && Number(event.target.value) > accountBalance) {
        return setValidTransaction(false);
      } else {
        setValidTransaction(true);
        setAmount(Number(event.target.value)); 
      }
    };

    const handleSubmit = (event) => {
      console.log('handleSubmit');
      let accountBalance = findAccountBalance();
      if (transactionType === 'Deposit') {
        if(accountType === 'Saving') {
            setSavingAccountBalance(accountBalance + amount);
        } else if (accountType === 'Checking') {
            setCheckingAccountBalance(accountBalance + amount);
        }
      } else if (transactionType === 'Withdraw') {
        if (accountType === 'Saving') {
            setSavingAccountBalance(accountBalance - amount)
        } else if (accountType === 'Checking') {
            setCheckingAccountBalance(accountBalance - amount);
        }
      }
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log('handleModeSelect');
      setTransactionType(event.target.value);
    };

    const handleAccountSelection = (event) => {
      console.log('handleAccountSelection');
      setAccountType(event.target.value);
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <label> Select an account to continue. </label>
              <select onChange = {(e) => handleAccountSelection(e)}>
                <option value = ''></option>
                <option value = 'Saving'> Saving Account </option>
                <option value = 'Checking'> Checking Account </option>
              </select>
            {accountType ==='Saving' && <h2>{`Saving Account Balance: $ ${savingAccountBalance}`}</h2>}
            {accountType === 'Checking' && <h2>{`Checking Account Balance: $ ${checkingAccountBalance}`}</h2>}
              <label> Select a transaction type below to continue. </label>
                <select onChange={(e) => handleModeSelect(e)}>
                  <option value=""></option>
                  <option value="Deposit"> Deposit </option>
                  <option value="Withdraw"> Withdraw </option>
                </select>
               {transactionType && (<ATMTransaction onChange={handleChange} transactionType={transactionType} valid = {validTransaction}></ATMTransaction>)}
        </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));

// Second round of edits:
// const ATMTransaction = ({ onChange, transactionType, valid }) => {
//     console.log('ATMTransaction');
//     return (
//       <label>
//         <h3> {transactionType} </h3> 
//         <input type="number" min = '0' step = '0.01' width="200" onChange={onChange}></input>
//         <input type="submit" disabled={!valid} value="Submit"></input>
//       </label>
//     );
//   };
  
//   const Account = () => {
//     console.log('Account');
//     const [amount, setAmount] = React.useState(0);
//     const [accountBalance, setAccountBalance] = React.useState(0);
//     const [transactionType, setTransactionType] = React.useState('');
//     const [validTransaction, setValidTransaction] = React.useState(false);
  
//     let accountStatus = `Account Balance: $ ${accountBalance} `;
    
//     const handleChange = (event) => {
//       console.log('handleChange');
//       console.log(Number(event.target.value));
//       if (Number(event.target.value) <= 0) {
//         return setValidTransaction(false);
//       } 
//       if (transactionType === 'Withdraw' && Number(event.target.value) > accountBalance) {
//         return setValidTransaction(false);
//       } else {
//         setValidTransaction(true);
//         setAmount(Number(event.target.value)); 
//       }
//     };

//     const handleSubmit = (event) => {
//       console.log('handleSubmit');
//       if (transactionType === 'Deposit') {
//         setAccountBalance(accountBalance + amount);
//       } else if (transactionType === 'Withdraw') {
//         setAccountBalance(accountBalance - amount);
//       }
//       setValidTransaction(false);
//       event.preventDefault();
//     };
  
//     const handleModeSelect = (event) => {
//       console.log('handleModeSelect');
//       setTransactionType(event.target.value);
//     };
  
//     return (
//         <form onSubmit={handleSubmit}>
//           <h2>{accountStatus}</h2>
//             <label> Select a transaction type below to continue. </label>
//               <select onChange={(e) => handleModeSelect(e)}>
//                 <option value=""></option>
//                 <option value="Deposit"> Deposit </option>
//                 <option value="Withdraw"> Withdraw </option>
//               </select>
//           {transactionType && (<ATMTransaction onChange={handleChange} transactionType={transactionType} valid = {validTransaction}></ATMTransaction>)}
//         </form>
//     );
//   };
//   // ========================================
//   ReactDOM.render(<Account />, document.getElementById('root'));

// First round of edits:
// const ATMTransaction = ({ onChange, isDeposit, isValid }) => {
//     const choice = ['Deposit', 'Withdraw'];
//     console.log(`ATM isDeposit: ${isDeposit}`);
//     return (
//       <label className="label huge">
//         <h3> {choice[Number(!isDeposit)]}</h3>
//         <input id="number-input" type="number" width="200" onChange={onChange}></input>
//         <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
//       </label>
//     );
//   };
  
//   const Account = () => {
  
//     const [amount, setAmount] = React.useState(0);
//     const [accountBalance, setAccountBalance] = React.useState(0);
//     const [isDeposit, setIsDeposit] = React.useState(true);
//     const [atmMode, setatmMode] = React.useState('');
//     const [validTransaction, setValidTransaction] = React.useState(false);
  
//     let status = `Account Balance $ ${accountBalance} `;
//     console.log(`Account Rendered with isDeposit: ${isDeposit}`);

//     const handleChange = (event) => {
//       console.log(Number(event.target.value));
//       if (Number(event.target.value) <= 0) {
//         return setValidTransaction(false);
//       } 
//       if (atmMode === 'Withdraw' && Number(event.target.value) > accountBalance) {
//         setValidTransaction(false);
//       } else {
//         setValidTransaction(true);
//       }
//       setAmount(Number(event.target.value));
//     };
//     const handleSubmit = (event) => {
//       if (isDeposit) {
//         setAccountBalance(accountBalance + amount);
//       } else {
//         setAccountBalance(accountBalance - amount);
//       }
//       setValidTransaction(false);
//       event.preventDefault();
//     };
  
//     const handleModeSelect = (event) => {
//       console.log(event.target.value);
//       setatmMode(event.target.value);
//       setValidTransaction(false); 
//       if (event.target.value === 'Deposit') {
//         setIsDeposit(true);
//       } else {
//         setIsDeposit(false);
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
      
//         <h2 id="total">{status}</h2>
//       <label>Select an action below to continue</label>
//     <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
//     <option id="no-selection" value=""></option>
//     <option id="deposit-selection" value="Deposit">
//     Deposit
//     </option>
//     <option id="withdraw-selection" value="Withdraw">
//     Withdraw
//     </option>
//     </select>
//         {atmMode && (<ATMTransaction onChange={handleChange} isDeposit={isDeposit} isValid = {validTransaction}></ATMTransaction>)}
          
//       </form>
//     );
//   };
//   // ========================================
//   ReactDOM.render(<Account />, document.getElementById('root'));