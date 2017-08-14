function liveTextlimit(text, limitCount, limitNum) {
  if (text.value.length > limitNum) {
    text.value = text.value.substring(0, limitNum)
  } 
  else {
    limitCount.value = limitNum - text.value.length
  }
}    