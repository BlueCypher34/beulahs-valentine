onload = () => {
    document.body.classList.remove("container");
    initScrollAnimations();
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });

  // Interactive scroll animations for gallery items
  function initScrollAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Keep gallery items static - no scroll animations
  }

  // Auto-generate color overlay on images
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const colors = [
      'rgba(242, 88, 106, 0.15)',
      'rgba(242, 141, 168, 0.15)',
      'rgba(255, 182, 193, 0.15)',
      'rgba(255, 192, 203, 0.15)',
      'rgba(230, 106, 128, 0.15)',
      'rgba(200, 80, 100, 0.15)'
    ];
    item.style.setProperty('--color', colors[index % colors.length]);
  });
  