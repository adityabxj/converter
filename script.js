const form = document.querySelector("#my-form");
form.addEventListener("submit", function (eventObject) {
  console.log(form);
  eventObject.preventDefault();
  let per = 0;
  const val = eventObject.target[2].value;
  if (eventObject.target[0].checked && eventObject.target[1].checked) {
    alert("please select one value");
    return;
  }
  const output = document.querySelector("#output");

  if (eventObject.target[0].checked) {
    per = val * 9.5;
    output.value = per;
    
  } else if (eventObject.target[1].checked) {
    per = val / 9.5;
    output.value = per.toFixed(1);
  }


});