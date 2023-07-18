function Slider(slider) {
  const isTouch = "ontouchstart" in document.documentElement;
  const content = slider.querySelector(".sliderContent");
  const items = content.querySelectorAll(".item");
  const pagination = slider.querySelector(".sliderPagination");
  const btnNext = slider.querySelector(".next");
  const btnPrev = slider.querySelector(".prev");
  const focusEls = slider.querySelectorAll(
    ".item a, .item button, .item input"
  );
  let bullets = [];
  let offsetX = 0;
  let index = 0;
  let downX;
  let length = 1;
  let paddingLeft;

  const getLength = () => {
    length = 0;
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].offsetLeft <
        content.scrollWidth - content.offsetWidth + paddingLeft
      ) {
        length++;
      }
    }
  };

  getLength();

  focusEls.forEach((el) => {
    el.onfocus = () => {
      const item = el.closest(".item");
      index = [...item.parentNode.children].indexOf(item);
      if (index > length) index = length;
      goto();
    };
  });

  if (pagination) {
    for (let i = 0; i < items.length; i++) {
      const bullet = document.createElement("button");
      bullet.value = i;
      bullet.setAttribute("aria-hidden", true);
      bullet.setAttribute("tabindex", -1);
      pagination.appendChild(bullet);
      bullets.push(bullet);
    }
  }

  function fakeScrollTo(end) {
    let req;
    let init = null;
    let time;
    const start = content.scrollLeft;
    const duration = 600;
    const easing = (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b;
    const startAnim = (timeStamp) => {
      init = timeStamp;
      draw(timeStamp);
    };
    const draw = (now) => {
      time = now - init;
      content.scrollTo(easing(time, start, end - start, duration), 0);
      req = window.requestAnimationFrame(draw);
      time >= duration && window.cancelAnimationFrame(req);
    };
    req = window.requestAnimationFrame(startAnim);
  }

  const mouseMove = (e) => {
    content.classList.add("onswipe");
    content.scrollTo(-e.clientX + offsetX, 0);
  };

  const resize = () => {
    slider.style.setProperty(
      "--ctr-left",
      `${slider.getBoundingClientRect().left}px`
    );
    slider.style.setProperty("--ctr-width", `${slider.offsetWidth}px`);
    paddingLeft =
      slider.offsetLeft +
      parseInt(
        getComputedStyle(slider).getPropertyValue("--padding-left") * 10
      );
    getLength();
    goto();
  };

  function controlStatus() {
    if (pagination) {
      for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList[i === index ? "add" : "remove"]("active");
        bullets[i].classList[i <= length ? "remove" : "add"]("hide");
      }
      if (bullets.length == 1) bullets[0].classList.add("hide");
    }
    if (btnPrev) {
      if (index <= 0) btnPrev.setAttribute("aria-disabled", true);
      else btnPrev.removeAttribute("aria-disabled");
      btnPrev.classList[length === 0 ? "add" : "remove"]("hide");
    }
    if (btnNext) {
      if (index == length) btnNext.setAttribute("aria-disabled", true);
      else btnNext.removeAttribute("aria-disabled");
      btnNext.classList[length === 0 ? "add" : "remove"]("hide");
    }
  }

  const goto = () => {
    controlStatus();
    const itempos = items[index].offsetLeft - paddingLeft;
    let diff = itempos - (content.scrollWidth - content.offsetWidth);
    if (diff < 0) diff = 0;
    fakeScrollTo(itempos - diff);
    /*content.scrollTo({
			left: itempos - diff,
			behavior: 'smooth'
		});*/
  };

  function getIndex() {
    items.forEach((item) => {
      if (item.offsetLeft < content.scrollLeft + paddingLeft + 100)
        index = index + 1;
    });
    if (offsetX - downX > content.scrollLeft) index = index - 1;
    if (index <= 0) index = 0;
    if (index > length) index = length;
  }

  const mouseUp = (e) => {
    index = 0;
    getIndex();
    goto();
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
    content.classList.remove("onswipe");
  };

  const mouseDown = (val) => {
    downX = val;
    offsetX = downX + content.scrollLeft;
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    return false;
  };

  const next = () => {
    index++;
    if (index >= length) index = length;
    goto();
  };

  const prev = () => {
    index--;
    if (index <= 0) index = 0;
    goto();
  };

  if (btnNext) btnNext.onclick = () => next();
  if (btnPrev) btnPrev.onclick = () => prev();

  bullets.forEach((bullet) => {
    bullet.onclick = () => {
      index = Number(bullet.value);
      goto();
    };
  });

  this.enable = () => {
    slider.classList.add("slider");
    index = 0;
    resize();
    if (!isTouch) {
      content.onmousedown = (e) => mouseDown(e.clientX);
      window.addEventListener("resize", resize, { passive: true });
    } else {
      content.classList.add("touchable");
      content.addEventListener(
        "scroll",
        () => {
          index = -1;
          getIndex();
          controlStatus();
        },
        { passive: true }
      );
    }
  };

  this.disable = () => {
    slider.classList.remove("slider");
    content.onmousedown = null;
    window.removeEventListener("resize", resize);
    mouseUp();
  };
}

/**/
const sliders = document.querySelectorAll(
  ".slider0, .slider1, .slider2, .slider3, .slider4"
);
window.onload = () => {
  sliders.forEach((slider) => {
    const myScroll = new Slider(slider);
    myScroll.enable();
  });
};

// slider 5 : disabled on desktop
const slider5 = document.querySelector(".slider5");
const myScroll = new Slider(slider5);
myScroll.enable();
let once = true;
let isMobile = false;
const resize = () => {
  isMobile = window.innerWidth > 768 ? false : true;
  if (isMobile != once) {
    isMobile ? myScroll.enable() : myScroll.disable();
  }
  once = isMobile;
};
window.addEventListener("resize", resize, { passive: true });
resize();

// avoid links
document.querySelectorAll("a").forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    console.log("click");
  };
});
