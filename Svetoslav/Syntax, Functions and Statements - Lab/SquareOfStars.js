function SquareOfStars(size) {
  let stars = '* ';

  for (let i = 1; i < size; i++) {
    stars += '* ';
  }

  for (let j = 0; j < size; j++) {
    console.log(stars.trimEnd());    
  }
}

SquareOfStars(5)
