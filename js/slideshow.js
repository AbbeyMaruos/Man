const images = document.getElementById('carouselImages');
    const totalImages = images.children.length;
    let currentIndex = 0;

    const updateCarousel = () => {
      const offset = -currentIndex * 1226; // 每张图片的宽度为1226px
      images.style.transform = `translateX(${offset}px)`;
    };

    document.getElementById('prevButton').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    });

    document.getElementById('nextButton').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    });

    // 自动轮播
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }, 4000); // 每4秒切换一次