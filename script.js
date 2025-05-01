document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tempForm");
    const inputSuhu = document.getElementById("inputSuhu");
    const inputTipe = document.getElementById("inputTipe");
    const hasilKonversi = document.getElementById("hasilKonversi");
    const penjelasanKonversi = document.getElementById("penjelasanKonversi");
    const btnReset = document.getElementById("btnReset");
    const btnReverse = document.getElementById("btnReverse");

    function konversiSuhu() {
        const nilai = parseFloat(inputSuhu.value);
        if (isNaN(nilai)) {
            hasilKonversi.textContent = "-";
            penjelasanKonversi.textContent = "Masukkan angka suhu yang valid!";
            return;
        }
        let hasil, penjelasan;
        if (inputTipe.value === "cToF") {
            hasil = (nilai * 9/5) + 32;
            hasilKonversi.textContent = `${hasil.toFixed(2)} °F`;
            penjelasan = `${nilai}°C × 9/5 + 32 = ${hasil.toFixed(2)}°F`;
        } else {
            hasil = (nilai - 32) * 5/9;
            hasilKonversi.textContent = `${hasil.toFixed(2)} °C`;
            penjelasan = `(${nilai}°F - 32) × 5/9 = ${hasil.toFixed(2)}°C`;
        }
        penjelasanKonversi.textContent = penjelasan;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        konversiSuhu();
    });

    btnReset.addEventListener("click", function () {
        inputSuhu.value = "";
        hasilKonversi.textContent = "-";
        penjelasanKonversi.textContent = "";
    });

    btnReverse.addEventListener("click", function () {
        inputTipe.value = inputTipe.value === "cToF" ? "fToC" : "cToF";
        konversiSuhu();
    });
});
