function showHomePage() {
    document.getElementById('main-content').innerHTML = `
        <h2>Galvenā lapa</h2>
        <p>Welcome to Pazaudētās mantas website! This is the main page where you can find lost items in your school.</p>
    `;
}

function showLostItems() {
    document.getElementById('main-content').innerHTML = `
        <h2>Pazaudētās mantas</h2>
        <p>On this page, you can find the lost items reported by students and staff at your school.</p>
    `;
}

function showAboutUs() {
    document.getElementById('main-content').innerHTML = `
        <h2>Par mums</h2>
        <p>This website is dedicated to helping students and staff find lost items within the school premises.</p>
        <p>We aim to provide a convenient platform for reporting lost items and reuniting them with their owners.</p>
    `;
}

function showContacts() {
    document.getElementById('main-content').innerHTML = `
        <h2>Kontakti</h2>
        <p>For any inquiries or assistance, please contact us at:</p>
        <ul>
            <li>Email: info@pazaudetasmantas.lv</li>
            <li>Phone: +371 12345678</li>
            <li>Address: School Name, Street Address, City, Country</li>
        </ul>
    `;
}
