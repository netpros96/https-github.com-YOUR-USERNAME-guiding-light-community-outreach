const prayers = {
  guidance: [
    "Heavenly Father, guide us in our daily work.",
    "Lord, help us bring light to those in darkness."
  ],
  healing: [
    "Lord, heal the sick in body, mind, and spirit.",
    "Grant comfort to those in pain."
  ],
  strength: [
    "Give us strength for every challenge.",
    "Fill us with courage."
  ]
};

document.getElementById('prayerSelect').addEventListener('change', function() {
  const topic = this.value;
  const output = document.getElementById('prayerOutput');
  if (!topic) { output.innerHTML = ''; return; }
  output.innerHTML = '<ul>' + prayers[topic].map(p => `<li>${p}</li>`).join('') + '</ul>';
});

const quotes = [
  "Be the change you wish to see in the world.",
  "No act of kindness is ever wasted."
];

document.getElementById('quoteBtn').addEventListener('click', () => {
  const rand = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteOutput').innerText = quotes[rand];
});
