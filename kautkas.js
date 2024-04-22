function showHomePage() {
    document.getElementById('main-content').innerHTML = `
        <h2>Galvenā lapa</h2>
        <p>Welcome to Pazaudētās mantas website! This is the main page where you can find lost items in your school.</p>
    `;
}

function showLostItems() {
    document.getElementById('main-content').innerHTML = `
        <h2>Pazaudētās mantas</h2>
        <div id="categories">
            <button onclick="showCategory('Electronics')">Electronics</button>
            <button onclick="showCategory('Sports Clothes')">Sports Clothes</button>
            <button onclick="showCategory('Men\'s Clothes')">Men's Clothes</button>
            <button onclick="showCategory('Women\'s Clothes')">Women's Clothes</button>
            <button onclick="showCategory('Accessories')">Accessories</button>
        </div>
        <div id="items"></div>
    `;
}

function showAboutUs() {
    document.getElementById('main-content').innerHTML = `
        <h2>Par mums</h2>
        <p>Par mums: Sveiki! Laipni lūgti mūsu mājaslapā, kur atradīsi risinājumu savu zaudēto lietu problēmai skolā. Mēs esam izveidojuši šo vietni ar mērķi palīdzēt skolēniem atrast pazaudētās mantas viegli un ātri.</p>
        <h3>Mūsu Misija:</h3>
        <p>Mūsu misija ir atvieglot skolēnu ikdienu, piedāvājot vienkāršu un efektīvu risinājumu zaudēto priekšmetu jautājumos.</p>
        <h3>Kā Tas Darbojas?</h3>
        <p>Šeit vari viegli ievadīt informāciju par to, ko esi pazaudējis vai atradis. Mūsu sistēma automātiski sakārto datus, padarot tos pieejamus citiem lietotājiem.</p>
        <p>Paldies, ka izmanto mūsu pakalpojumus un palīdz kopā ar mums veidot draudzīgu un izglītojošu kopienas telpu skolēniem!</p>
    `;
}

function showContacts() {
    document.getElementById('main-content').innerHTML = `
        <h2>Kontakti</h2>
        <p>E-pasts:</p>
        <ul>
            <li>kautkaste@marupe.edu.lv</li>
            <li>velcitskautkas@marupe.edu.lv</li>
        </ul>
        <p>Meklē skolā:</p>
        <ul>
            <li>Parlamentu telpās</li>
            <li>2.08 klase</li>
            <li>2.13 klase</li>
        </ul>
        <p>Ja ir defekti šai mājaslapai, lūdzu, ziņojiet uz šo e-pastu:</p>
        <ul>
            <li><a href="mailto:dana.gordenko@marupe.edu.lv">dana.gordenko@marupe.edu.lv</a></li>
        </ul>
    `;
}


function showCategory(category) {
    // Simulate fetching announcements for the selected category from a database
    const announcements = getAnnouncementsByCategory(category);

    // Display announcements in the selected category
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = `<h3>${category}</h3>`;
    if (announcements.length > 0) {
        itemsContainer.innerHTML += `<ul>`;
        announcements.forEach(announcement => {
            itemsContainer.innerHTML += `<li><button onclick="reserveItem('${announcement}')">${announcement}</button></li>`;
        });
        itemsContainer.innerHTML += `</ul>`;
    } else {
        itemsContainer.innerHTML += `<p>No announcements found in this category.</p>`;
    }
}

function reserveItem(announcement) {
    alert(`You have reserved: ${announcement}`);
}

// Function to simulate fetching announcements from a database based on category
function getAnnouncementsByCategory(category) {
    // Simulate fetching announcements from a database based on category
    // Replace this with actual database query in a real application
    switch (category) {
        case 'Electronics':
            return [
                'Laptop announcement 1',
                'Smartphone announcement 1',
                'Headphones announcement 1',
            ];
        case 'Sports Clothes':
            return [
                'Running Shoes announcement 1',
                'Workout Leggings announcement 1',
                'Sport T-shirt announcement 1',
            ];
        case 'Men\'s Clothes':
            return [
                'Men\'s Jacket announcement 1',
                'Men\'s Jeans announcement 1',
                'Men\'s Shirt announcement 1',
            ];
        case 'Women\'s Clothes':
            return [
                'Women\'s Dress announcement 1',
                'Women\'s Skirt announcement 1',
                'Women\'s Blouse announcement 1',
            ];
        case 'Accessories':
            return [
                'Watch announcement 1',
                'Backpack announcement 1',
                'Sunglasses announcement 1',
            ];
        default:
            return [];
    }
}




