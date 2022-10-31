document.getElementById("totalBtn").addEventListener("click", carRental);

function carRental() {
  let numbersDays = document.getElementById("numbersOfDate").value;
  console.log(numbersDays);
  let carRental = document.getElementById("carRental");
  carRental.innerHTML = numbersDays * 29.99;

  //--------OPTIONS//---------
  let checkbox1 = document.getElementById("electronicTollTag");
  let checkbox2 = document.getElementById("gps");
  let checkbox3 = document.getElementById("roadsideAsistance");
  let options = document.getElementById("options");

  if (
    checkbox1.checked == true &&
    checkbox2.checked == true &&
    checkbox3.checked == true
  ) {
    options.innerHTML = (3.95 + 2.95 + 2.95) * numbersDays;
  } else if (checkbox1.checked == true && checkbox2.checked == true) {
    options.innerHTML = (3.95 + 2.95) * numbersDays;
  } else if (checkbox1.checked == true && checkbox3.checked == true) {
    options.innerHTML = (3.95 + 2.95) * numbersDays;
  } else if (checkbox3.checked == true && checkbox2.checked == true) {
    options.innerHTML = (2.95 + 2.95) * numbersDays;
  } else if (checkbox1.checked == true) {
    options.innerHTML = numbersDays * 3.95;
  } else if (checkbox2.checked == true) {
    options.innerHTML = numbersDays * 2.95;
  } else if (checkbox3.checked == true) {
    options.innerHTML = numbersDays * 2.95;
  }

  //--------Under 25---------//
  let yesNo = document.querySelector("input[name='radio']:checked");
  let surcharge = document.getElementById("surcharge");

  if (yesNo.value == "yes") {
    surcharge.innerHTML = (numbersDays * 29.99 * 30) / 100;
    console.log(yesNo.value);
  } else if (yesNo.value == "no") {
    surcharge.innerHTML = 0;
  }

  //------Total Due ----------//
  //  let totalDue = document.getElementById("totalDue").value;
  //  totalDue.innerHTML = (surcharge + options + carRental);
  //  console.log(totalDue);

  // function total(){
  //   let totalDue = document.getElementById("totalDue").value;
  //   totalDue.innerHTML = (surcharge + options + carRental);
  //   console.log(totalDue);
  // }
  // total()

  let totalDue = document.getElementById("totalDue");
  totalDue.innerHTML = (
    parseInt(surcharge.value) +
    parseInt(options.value) +
    parseInt(carRental.value)
  ).toFixed(2);
}

