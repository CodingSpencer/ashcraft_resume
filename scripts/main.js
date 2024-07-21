document.addEventListener("DOMContentLoaded", () => {
  // Ensure sidebar is closed initially
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.style.width = "0";
  }

  // Add event listeners to buttons
  const openBtn = document.querySelector(".openbtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      openSide();
    });
  }

  const closeBtn = document.querySelector(".closebtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeSide();
    });
  }
});

function openSide() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.style.width = "250px";
  }
}

function closeSide() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.style.width = "0";
  }
}

function openTab(event, question) {
  const tabcontents = document.getElementsByClassName("tabcontent");
  Array.from(tabcontents).forEach((tabcontent) => {
    tabcontent.style.display = "none";
  });

  const tablinks = document.getElementsByClassName("tablinks");
  Array.from(tablinks).forEach((tablink) => {
    tablink.className = tablink.className.replace(" active", "");
  });

  document.getElementById(question).style.display = "block";
  event.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
  const tabcontents = document.getElementsByClassName("tabcontent");
  Array.from(tabcontents).forEach((tabcontent) => {
    tabcontent.style.display = "none";
  });

  const tablinks = document.getElementsByClassName("tablinks");
  Array.from(tablinks).forEach((tablink) => {
    tablink.addEventListener("click", (e) => {
      openTab(event, event.target.getAttribute("onclick").match(/'(.*?)'/)[1]);
    });

    if (tabcontents.length > 0) {
      tabcontents[0].style.display = "block";
      tablinks[0].className += "active";
    }
  });
});
