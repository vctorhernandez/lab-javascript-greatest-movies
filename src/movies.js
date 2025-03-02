// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    ).length;
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;
    const totalScore = moviesArray.reduce((acc, curr) => {
        return acc +(curr.score || 0);
      }, 0);
    const avg = totalScore/moviesArray.length;
    return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter(movie => movie.genre && movie.genre.includes('Drama'));
  
   if (dramaMovies.length === 0) return 0;  
   
   const totalScore = dramaMovies.reduce((acc, movie) => {
     return acc + (movie.score || 0);
   }, 0);
   
   const avgScore = totalScore / dramaMovies.length;
   
   return Number(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movies = [...moviesArray];
  movies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies = [...moviesArray];
  movies.sort((a, b) => a.title.localeCompare(b.title));
  const titles = movies.map(movie => movie.title);
  return titles.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const movieCopy = { ...movie };

    const durationStr = movie.duration;
    let totalMinutes = 0;
    
    const hours = durationStr.match(/(\d+)h/);
    const minutes = durationStr.match(/(\d+)min/);
    
    if (hours) {
      totalMinutes += parseInt(hours[1], 10) * 60;
    }
    
    if (minutes) {
      totalMinutes += parseInt(minutes[1], 10);
    }
    
    movieCopy.duration = totalMinutes;
    
    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const moviesByYear = {};

  moviesArray.forEach(movie => {
    const year = movie.year;
    if (!moviesByYear[year]) {
      moviesByYear[year] = [];
    }
    moviesByYear[year].push(movie.score);
  });

  let bestYear = null;
  let bestAvg = null;

  for (const year in moviesByYear) {
    const scores = moviesByYear[year];
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    if (avgScore > bestAvg || (avgScore === bestAvg && year < bestYear)) {
      bestAvg = avgScore;
      bestYear = year;
    }
  }

  bestAvg = Number(bestAvg.toFixed(2));

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
