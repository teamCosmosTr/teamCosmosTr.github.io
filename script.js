// Tüm sectionları seçiyoruz
const sections = document.querySelectorAll('section');

// Sectionlar üzerinde gezinmek için döngü
sections.forEach((section) => {
    section.addEventListener('mouseenter', () => {
        // Fare bir section üzerine geldiğinde diğerlerini saydamlaştır
        sections.forEach((s) => {
            if (s !== section) {
                s.style.opacity = '0.5'; // Saydamlığı azalt
            }
        });
    });

    section.addEventListener('mouseleave', () => {
        // Fare section'dan ayrıldığında opaklığı geri yükle
        sections.forEach((s) => {
            s.style.opacity = '1'; // Saydamlığı eski haline getir
        });
    });
}); 


const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Dark mode'u aç/kapa
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Buton simgesini değiştir
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Light mode simgesi
    } else {
        toggleButton.textContent = '🌙'; // Dark mode simgesi
    }
});
