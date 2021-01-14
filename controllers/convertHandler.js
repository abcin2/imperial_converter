/*
*
*
*       Complete the handler logic below
*       
*       
*/

let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    result = input.match(inputRegex)[0]

    let numberRegex = /\d/

    if(numberRegex.test(result) === false) {
      result = 1
    }

    if(result.toString().includes('/')) {
      let values = result.toString().split('/')
      if(values.length != 2) {
        return 'invalid number';
      }
      values[0] = parseFloat(values[0]);
      values[1] = parseFloat(values[1]);
      result = parseFloat((values[0]/values[1]).toFixed(5)); 
    }

    if(isNaN(result)) {
      return 'invalid number';
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    result = input.match(inputRegex)[1]

    if(!result) {
      result = input.match(inputRegex)[0];
    }

    if(result === 'l' || result === 'L') {
      result = 'L';
    } else {
      result = result.toLowerCase();
    }

    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']

    if(!validUnits.includes(result)) {
      return 'invalid unit';
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    if(initUnit.toLowerCase() === 'gal') {
      result = 'L';
    } else if(initUnit.toLowerCase() === 'l') {
      result = 'gal';
    }

    if(initUnit.toLowerCase() === 'lbs') {
      result = 'kg';
    } else if(initUnit.toLowerCase() === 'kg') {
      result = 'lbs';
    }  

    if(initUnit.toLowerCase() === 'mi') {
      result = 'km';
    } else if(initUnit.toLowerCase() === 'km') {
      result = 'mi';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch (unit) {
      case 'gal':
      case 'GAL':
        result = 'gallon(s)';
        break;
      case 'l':
      case 'L':
        result = 'liter(s)';
        break;
      case 'lbs':
      case 'LBS':
        result = 'pound(s)';
        break;
      case 'kg':
      case 'KG':
        result = 'kilogram(s)';
        break;
      case 'mi':
      case 'MI':
        result = 'mile(s)';
        break;
      case 'km':
      case 'KM':
        result = 'kilometer(s)';
        break;          
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initUnit.toLowerCase() === 'gal') {
      result = (initNum * galToL).toFixed(5);
    } else if(initUnit.toLowerCase() === 'l') {
      result = (initNum / galToL).toFixed(5);
    } 

    if(initUnit.toLowerCase() === 'lbs') {
      result = (initNum * lbsToKg).toFixed(5);
    } else if(initUnit.toLowerCase() === 'kg') {
      result = (initNum / lbsToKg).toFixed(5);
    } 
    
    if(initUnit.toLowerCase() === 'mi') {
      result = (initNum * miToKm).toFixed(5);
    } else if(initUnit.toLowerCase() === 'km') {
      result = (initNum / miToKm).toFixed(5);
    } 

    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    let initial_Units = this.spellOutUnit(initUnit);
    let return_Units = this.spellOutUnit(returnUnit)

    result = initNum + ' ' + initial_Units + 'converts to' + returnNum + ' ' + return_Units;
 
    
    return result;
  };
  
}

module.exports = ConvertHandler;
