function Player(name) {

    let usedCoords = {
    };

    function randomCoords() {
        let coords = [];
        coords[0] = Math.floor(Math.random() * 10);
        coords[1] = Math.floor(Math.random() * 10);
        return coords;
    }

  

    function randomTurn(usedCoords, coords) {

        
        let isSubArray = isSubset(coords, usedCoords);
    
        // base case
        // If the coords do not match any used coords
        if (isSubArray === false) {
    
            let newArray = [coords[0], coords[1]]
            let l = Object.keys(usedCoords).length;
            if (l == undefined || l == 0) {
                usedCoords[0] = newArray;
            } else {
                usedCoords[l] = newArray;
            }

            return {coords, usedCoords}

        } 
        // If the coords do match, try again
    
        coords = randomCoords();

        return randomTurn(usedCoords, coords);

        

        
    }

    // Returns true if arr1 is a subset of arr2
    function isSubset(coords,usedCoords) {

  
        console.log('AI clicked: ' + coords);

        // Loop through each item in usedCoords
        let l = Object.keys(usedCoords).length;
   
        for (let i = 0; i < l; i++) {
            let currentSubarray = usedCoords[i];
            if (coords[0] === currentSubarray[0] && coords[1] === currentSubarray[1]){
                return true;
            };
        };

        return false
        
        
    };

    return {
        name: name,
        usedCoords: usedCoords,
        randomCoords: randomCoords,
        randomTurn: randomTurn,
    }
}

let AiPlayer = Object.create(Player('Jasper'));


export { Player, AiPlayer }