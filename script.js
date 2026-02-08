// REVEAL on scroll (animacija sekcija)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));


let score = 0;
const correct = 1777;

const scoreEl = document.getElementById("score");
const barEl = document.getElementById("bar");
const resultEl = document.getElementById("result");

document.querySelectorAll(".answer").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = Number(btn.dataset.a);

    document.querySelectorAll(".answer").forEach(b => b.disabled = true);

    if (a === correct) {
      score += 1;
      scoreEl.textContent = score;
      resultEl.textContent = "Točno! 🎉";
      resultEl.style.color = "green";
      btn.style.borderColor = "rgba(0,128,0,.45)";
    } else {
      resultEl.textContent = "Netočno 😢";
      resultEl.style.color = "crimson";
      btn.style.borderColor = "rgba(220,20,60,.45)";
    }

    // demo progress (1/5)
    barEl.style.width = "20%";
  });
});
