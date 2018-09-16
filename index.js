const formatDate = (timeInSeconds) => {
  let seconds = `${timeInSeconds}`;
  let minutes = 0;
  let hours = 0;
  
  if (seconds < 60) {
    return `${seconds}s`;
  }
  else if (seconds < 3600) {
    minutes = Math.floor(seconds / 60);
    let changedSeconds = seconds - 60 * minutes;
    if (changedSeconds === 0) {
      return `${minutes}m`; 
    } else {
      return `${minutes}m ${changedSeconds}s`;
    }
  }
  else if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds - 3600 * hours) / 60);
    changedSeconds = seconds - (3600*hours+ 60*minutes);
    if (changedSeconds === 0 && minutes === 0) {
      return `${hours}h`;
    }
    else if (changedSeconds === 0) {
      return `${hours}h ${minutes}m`;
    }
    else if (minutes === 0) {
      return `${hours}h ${changedSeconds}s`;
    }
    else {
      return `${hours}h ${minutes}m ${changedSeconds}s`;
    }
  }
  else {
    return `0s`;
  }
}

module.exports = formatDate;