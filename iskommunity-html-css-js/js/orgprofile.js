function toggleMembership() {
    var membershipSection = document.getElementById("membershipSection");
    var statusMembershipBtn = document.getElementById("status-membership");
    var statusText = document.getElementById("statusText");
    var status = document.getElementById("status");
    var statusDiv = document.getElementById("status-div");
  
    if (membershipSection.style.display === "none" || membershipSection.style.display === "" || status.value == 1) {
        membershipSection.style.display = "block";
        statusDiv.style.marginBottom = '1.5rem';
        statusText.innerText = "Membership Status: OPEN";
        statusMembershipBtn.innerText = "Close Membership Application";
        status.value = 0;
        
      } else {
          membershipSection.style.display = "none";
          statusDiv.style.marginBottom = '0';
          statusText.innerText = "Membership Status: CLOSED";
          statusMembershipBtn.innerText = "Open Membership Application";
          status.value = 1;
    }
  }
  
  let membershipSection = document.getElementById("membershipSection");
  let statusMembershipBtn = document.getElementById("status-membership");
  let statusText = document.getElementById("statusText");
  let status = document.getElementById("status");
  let statusDiv = document.getElementById("status-div");
  var statusMembership = document.getElementById("status");
  
  if(statusMembership.value == 1){
      membershipSection.style.display = "block";
      statusDiv.style.marginBottom = '1.5rem';
      statusText.innerText = "Membership Status: OPEN";
      statusMembershipBtn.innerText = "Close Membership Application";
      statusMembership.value = 0;
  } else{
      membershipSection.style.display = "none";
      statusDiv.style.marginBottom = '0';
      statusText.innerText = "Membership Status: CLOSED";
      statusMembershipBtn.innerText = "Open Membership Application";
      statusMembership.value = 1;
  }


