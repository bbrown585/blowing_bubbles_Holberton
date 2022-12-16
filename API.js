<script>
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Process the API response here
        var response = JSON.parse(this.responseText);
        // Use the response data to update the page
        document.getElementById("myDiv").innerHTML = response.data;
      }
    };
    xhttp.open("GET", "https://api.example.com/endpoint", true);
    xhttp.send();
  }
</script>

