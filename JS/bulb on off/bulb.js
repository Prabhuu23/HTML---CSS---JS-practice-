let isBulbOn = false;

function toggleBulb() {
  const bulbImage = document.getElementById('bulb');

  if (isBulbOn) {
    bulbImage.src = 'C:\Users\Lenovo\Desktop\SEM 5\WT\JS\bulb on off\img\pic_bulboff.gif';
  } else {
    bulbImage.src = 'C:\Users\Lenovo\Desktop\SEM 5\WT\JS\bulb on off\img\pic_bulbon.gif';
  }

  isBulbOn = !isBulbOn;
}
