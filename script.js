// Xử lý form liên hệ
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        alert(`Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn của bạn.`);
        // Trong thực tế, gửi dữ liệu đến server
        contactForm.reset();
      } else {
        alert("Vui lòng điền đầy đủ thông tin.");
      }
    });
  }

  // Smooth scrolling cho navigation (chỉ cho các link nội trang)
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Animation cho sections khi scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s, transform 0.5s";
    observer.observe(section);
  });

  // Hiệu ứng hover cho menu items
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
