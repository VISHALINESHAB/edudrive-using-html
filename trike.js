function showAutoOwnerDetails() {
    var selectedAuto = document.getElementById("availableauto").value;
    var autoOwnerDetailsDiv = document.getElementById("autoOwnerDetails");

    // Assume details are fetched from a database or hardcoded for simplicity
    var autoDetails = {
        "auto1": {
            "name": "John Doe",
            "contact": "123-456-7890",
            "address": "123 Main St, City"
        },
        "auto2": {
            "name": "Jane Smith",
            "contact": "987-654-3210",
            "address": "456 Oak St, Town"
        },
        "auto3": {
            "name": "Bob Johnson",
            "contact": "555-555-5555",
            "address": "789 Elm St, Village"
        }
    };

    if (selectedAuto in autoDetails) {
        var ownerName = autoDetails[selectedAuto].name;
        var ownerContact = autoDetails[selectedAuto].contact;
        var ownerAddress = autoDetails[selectedAuto].address;

        document.getElementById("ownerName").innerText = "Name: " + ownerName;
        document.getElementById("ownerContact").innerText = "Contact: " + ownerContact;
        document.getElementById("ownerAddress").innerText = "Address: " + ownerAddress;

        autoOwnerDetailsDiv.style.display = "block";
    } else {
        autoOwnerDetailsDiv.style.display = "none";
    }
}

function showBookingDetails() {
    var userName = document.getElementById("firstname").value.trim();
    var userRollNo = document.getElementById("rollno").value.trim();
    var userPhone = document.getElementById("phonenumber").value.trim();
    var selectedAuto = document.getElementById("availableauto").value;
    var numMembers = parseInt(document.getElementById("members").value);

    // Check if any input field is empty
    if (!userName || !userRollNo || !userPhone || !selectedAuto || !numMembers) {
        alert("Please fill out all fields.");
        return;
    }

    // Ensure numMembers is within the allowed range
    if (numMembers > 6) {
        alert("Maximum number of members allowed is 6.");
        return;
    }

    // Calculate the amount based on the number of members
    var amount = 0;
    if (numMembers === 1) {
        amount = 120;
    } else if (numMembers === 2) {
        amount = 120/2;
    } else if (numMembers === 3) {
        amount = 120/3;
    } else if (numMembers === 4) {
        amount = 120/4;
    } else if(numMembers == 5){
        amount=120/5;
    }
    else {
        amount = 20;
    }

    // Display booking details
    var bookingDetailsDiv = document.getElementById("bookingDetails");

    document.getElementById("userName").innerText = "Name: " + userName;
    document.getElementById("userRollNo").innerText = "Roll Number: " + userRollNo;
    document.getElementById("userPhone").innerText = "Phone Number: " + userPhone;
    document.getElementById("selectedAuto").innerText = "Selected Auto: " + selectedAuto;
    document.getElementById("numMembers").innerText = "Number of Members: " + numMembers;
    document.getElementById("amount").innerText = "Each Member Amount: Rs " + amount;

    bookingDetailsDiv.style.display = "block";
}