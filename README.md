## ATM Refactoring 

### Description:
This is a project that I edited for MIT xPRO's web development class. The goal was refactor an ATM in a manner of our choosing. 

Most of the code was provided for me by MIT xPRO. 
 
Here are the changes I made (they are numbered in the order I made the changes in, but I ordered them from top to bottom in terms of how significant the change was):
14. I created two accounts (a checking account and a saving account), so that the user selects an account and then can deposit or withdraw money from that account. (The original file we were given only had one account). The accounts store information about what has been deposited or withdrawn even as the user switches back and forth between them. 
11. I added a min = '0' to the dollar input field so that users can't use the down arrow to input a negative value. 
12. I added a step = '.01' to the dollar input field so that users can input an amount that is accurate to the nearest cent. 
5. I eliminated 'atmMode, setAtmMode' because it was redundant with 'isDeposit, setIsDeposit', which I renamed 'transactionType, setTransactionType' and changed to a string instead of a Boolean.
6. I eliminated several unnecessary instances of 'setValidTransaction(false)'. 
13. I added my own console logs so that I could better understand when certain functions were being called when rerendering occurred.  
8. I removed id's and names because they weren't being used. 
9. I removed the width for the submit button. 
10. I removed the class name for the label in ATMTransaction because it wasn't being used. 
1. I renamed the component 'ATMDeposit' to 'ATMTransaction' because the transaction isn't always a deposit, and I wanted to clarify the purpose of the component.  
2. I renamed 'deposit, setDeposit' to 'amount, setAmount' because the transaction isn't always a deposit, and I wanted to clarify the purpose of the variable. 
3. I renamed the variable 'cash back' to 'withdraw' because I am more familiar with using the term withdraw at an ATM. 
4. I renamed 'totalState, setTotalState' to 'accountBalance, setAccountBalance' because I wanted to clarify that the totalState is the amount of money in the account, which is more commonly referred to as an 'Account Balance'. 
7. I changed 'isValid' to 'Valid' so that !Valid was easier to interpret. 


#### How to Run: 

You should be able to run the index.html file on a local 8080 server. 
 

#### Support:

N/A

#### Roadmap of Future Improvements: 

I'd like to make the ATM look better by adding styling. 

#### License Information:

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.