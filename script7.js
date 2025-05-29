document.addEventListener("DOMContentLoaded", function() {
  const lightIcon = document.getElementById("theme-toggle-light");
  const darkIcon = document.getElementById("theme-toggle-dark");

  function setTheme(mode) {
      if (mode === "dark") {
          document.body.classList.add("dark-mode");
          document.body.classList.remove("light-mode");
          lightIcon.style.display = "block";
          darkIcon.style.display = "none";
      } else {
          document.body.classList.add("light-mode");
          document.body.classList.remove("dark-mode");
          lightIcon.style.display = "none";
          darkIcon.style.display = "block";
      }
  }

  function toggleMode() {
      if (document.body.classList.contains("dark-mode")) {
          setTheme("light");
          localStorage.setItem("theme", "light");
      } else {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
      }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      setTheme(savedTheme);
  } else {
      setTheme("light");
  }

  darkIcon.addEventListener("click", toggleMode);
  lightIcon.addEventListener("click", toggleMode);
});



document.querySelector(".account-dropdown").onclick = function(event) {
  event.preventDefault();
  var dropdown = document.getElementById("accountDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
};

window.onclick = function(event) {
  if (!event.target.matches('.account-dropdown') && !event.target.closest('.account-dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          dropdowns[i].style.display = "none";
      }
  }
};


document.addEventListener("DOMContentLoaded", function () {
  const notificationIcon = document.getElementById("notification-icon");
  const notificationContainer = document.getElementById("notification-container");

  notificationIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      notificationContainer.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!notificationContainer.contains(event.target) && !notificationIcon.contains(event.target)) {
          notificationContainer.classList.remove("active");
      }
  });
});


document.querySelectorAll('.shorts').forEach(shortsContainer => {
  const commentIcon = shortsContainer.querySelector('.comment-icon');

  commentIcon.addEventListener('click', () => {
    // Toggle the show-comments class on the shorts container
    shortsContainer.classList.toggle('show-comments');
  });
});



   document.addEventListener('DOMContentLoaded', () => {
    const scrollArea = document.querySelector('.scroll-area');
    const shorts = document.querySelectorAll('.shorts');
    const upBtn = document.querySelector('.up-btn');
    const downBtn = document.querySelector('.down-btn');

    let currentIndex = 0;

    function scrollToIndex(index) {
      if (index >= 0 && index < shorts.length) {
        shorts[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        currentIndex = index;
      }
    }

    downBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex + 1);
    });

    upBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex - 1);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.caption-toggle').forEach(button => {
      button.addEventListener('click', () => {
        // Find this caption and its short-video wrapper
        const caption = button.closest('.caption');
        const profile = button.closest('.short-video').querySelector('.profile');
  
        // Toggle the expanded state
        const isExpanded = caption.classList.toggle('expanded');
  
        // Toggle profile shift
        profile.classList.toggle('shift-up', isExpanded);
  
        // Update button text
        button.textContent = isExpanded ? 'see less' : 'see more';
      });
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.commentt').forEach(commentBox => {
      const textarea = commentBox.querySelector('textarea');

      textarea.addEventListener('input', () => {
        if (textarea.value.trim() !== "") {
          commentBox.classList.add('typing');
        } else {
          commentBox.classList.remove('typing');
        }
      });
    });
  });