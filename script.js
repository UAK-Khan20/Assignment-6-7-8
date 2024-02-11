                            // Assignment-6

                            // Question-1

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button Clicked!');
  });

                            // Question-2

  var div = document.getElementById('myDiv');

  div.addEventListener('mouseenter', function() {
    div.style.backgroundColor = 'blue';
  });
  
  div.addEventListener('mouseleave', function() {
    div.style.backgroundColor = ' #d33232';
  });

                            // Assignment-7

                            // Question-1

document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault();
    
  var username = document.getElementById('username').value;
    
  if (/^[a-zA-Z0-9]{5,}$/.test(username)) {
    alert('Username is valid!');
  } else {
    alert('Username should be at least 5 characters long and contain only alphanumeric characters.');
  }
});

                            // Question-2

var button = document.getElementById('toggleButton');
var div = document.getElementById('hiddenDiv');
                            
button.addEventListener('click', function() {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});              

                            // Assignment-8

function AsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve('Operation successful');
        } else {
          reject('Operation failed');
        }
      }, 2000);
    });
  }

                            // Question-2

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data processed: ' + data);
      }, 2000); 
    });
  }
  
  fetchData()
    .then(data => processData(data))
    .then(result => console.log(result))
    .catch(error => console.error(error));
                              
