function calculateArithmeticMean(list) {
    const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    });
    const averageList = sumList / list.length;
    return averageList;
  }
  
  function calculateMedian() {
  
    const mediumEntrance = document.getElementById("inputMedian");
    const medianValue = mediumEntrance.value;
  
    let arrayMedian = Array.from(medianValue.split(","), Number);
  
    const orderedList = arrayMedian.sort((smallerNumber, biggerNumber) => smallerNumber - biggerNumber);
  

    const halfList = parseInt(orderedList.length / 2);
 
  
    function isPar(number) {
      if (number % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  
    let median;
  
    if (isPar(orderedList.length)) {
      const element1 = orderedList[halfList - 1];
      const element2 = orderedList[halfList];
  
      const averageElement1y2 = calculateArithmeticMean([element1, element2]);
      median = averageElement1y2;
    } else {
      median = orderedList[halfList];
    }
   
    const showResult = document.getElementById("Median");
    showResult.innerText = "The median is: " + median;
  }