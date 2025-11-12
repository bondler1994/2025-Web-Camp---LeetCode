/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richestBitch = 0
    for(let client of accounts){
        let correntBank = 0 
        for(let bank of client){
            correntBank += bank
        }
        richestBitch = Math.max(richestBitch, correntBank)
    }
    return richestBitch
};