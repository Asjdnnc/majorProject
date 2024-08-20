const today = new Date();
  // Format the date as YYYY-MM-DD
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let nextday = (parseInt(day)+1).toString();
  const formattedDate = year + '-' + month + '-' + day;
  const tomorrow = year + '-' + month + '-' + nextday; 
  // Set the default values for the input fields
  document.getElementById('checkin').value = formattedDate;
  document.getElementById('checkout').value = tomorrow;
function booking(){
const checkinDate = new Date(document.getElementById("checkin").value);
const checkoutDate = new Date(document.getElementById("checkout").value);
const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
const perNightCost = document.querySelector('.discounted-price').innerText;
const cost = perNightCost.substring(1,);
const numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
const validNumberOfNights = numberOfNights >= 1 ? numberOfNights : 0;
const totalCost = validNumberOfNights * cost;
const discount1 = Math.round(totalCost*0.10);
document.getElementById("discount1").innerText=`- ₹${discount1.toLocaleString()}`
document.getElementById("price-breakdown-text").innerText = `₹${cost.toLocaleString()} x ${validNumberOfNights}`;
document.getElementById("total-cost").innerText = `₹${totalCost.toLocaleString()}`;
document.getElementById("final").innerText = `₹${(totalCost - discount1).toLocaleString()}`; 
document.getElementById("finalPrice").value = `${totalCost - discount1}`;
}
document.getElementById("checkin").addEventListener("change", booking);
document.getElementById("checkout").addEventListener("change",booking);
booking();

