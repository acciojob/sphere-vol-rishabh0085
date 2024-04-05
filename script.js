function volume_sphere() {
    // Retrieve the radius value entered by the user
    var radius = parseFloat(document.getElementById('radius').value);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' for invalid input
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);
        
        // Round the volume to four decimal places
        volume = volume.toFixed(4);
        
        // Display the calculated volume
        document.getElementById('volume').value = volume;
    }

    // Prevent form submission
    return false;
}

// Assign the volume_sphere function to the form submission event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
