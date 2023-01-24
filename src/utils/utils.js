
function shuffle(arr) {
    let m = arr.length,
      t,
      i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }
async function setFrontRow(arr) {
    const mappedArr = arr.map((el) => {
      if (el.restrictions.frontRow === undefined) {
        {
          el.restrictions = { ...el.restrictions, frontRow: false };
        }
      }
      return el;
    });
    const frontRowArr = mappedArr.sort(
      (a, b) => b.restrictions.frontRow - a.restrictions.frontRow
    );
    return frontRowArr;
  }
async function moveNeighbors(arr) {
    const m = arr.length;
    const copiedArr = [...arr]
    copiedArr.map((el, i) => {
      const newIndex = Math.floor(Math.random() * m)
      let rightNeighbor, leftNeighbor
      switch (i) {
        case 0:
          leftNeighbor = copiedArr[(i + 1)];
          rightNeighbor = copiedArr[(i + 1)];
          console.log(i, el, 'right', rightNeighbor)
          break;
        case m - 1:
          leftNeighbor = copiedArr[(i - 1)];
          rightNeighbor = copiedArr[(i - 1)];
          console.log(i, el, 'left', leftNeighbor)
          break;
        default:
          leftNeighbor = copiedArr[(i - 1)];
          rightNeighbor = copiedArr[(i + 1)];
          console.log(i, el, leftNeighbor, rightNeighbor)
          break;
      }
      if (el.restrictions.restrictedStudent) {
        if (
          el.restrictions.restrictedStudent ===
            leftNeighbor.name || el.restrictions.restrictedStudent === rightNeighbor.name
        ) {
          console.log(`bad neighbors ${el.name} & ${leftNeighbor.name} @ ${(i - 1)} or ${rightNeighbor.name} @ ${(i + 1)} found @ index ${i} student moved to index ${newIndex}`)
          copiedArr.splice(i, 1)
          copiedArr.splice(newIndex, 0, el)
        }
      }
    });
    return copiedArr
  }

  function removeSpacesToLowerCase(str) {
    const formattedStr = str.toLowerCase().split(' ').join('')
    return formattedStr
  }

export {
  shuffle,
  moveNeighbors,
  setFrontRow,
  removeSpacesToLowerCase
}
