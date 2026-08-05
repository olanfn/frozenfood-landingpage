document.addEventListener('DOMContentLoaded', () => {
    // GANTI DENGAN NOMOR WHATSAPP ANDA (format 628...)
    const whatsappNumber = '6281234567890'; 

    const buttons = document.querySelectorAll('.btn-whatsapp');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productAttr = e.target.getAttribute('data-product') || e.target.closest('button').getAttribute('data-product');
            const priceAttr = e.target.getAttribute('data-price') || e.target.closest('button').getAttribute('data-price');
            
            let message = '';

            if (priceAttr) {
                // Formatting untuk produk yang punya harga
                const formattedPrice = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                }).format(priceAttr);
                message = `Halo admin, saya ingin memesan produk berikut:%0A%0A📦 *${productAttr}*%0A💰 Harga: ${formattedPrice}%0A%0AMohon info ketersediaan dan total harga beserta ongkir. Terima kasih.`;
            } else {
                // Formatting untuk CTA umum (Tanya Admin, Pesan Cepat)
                message = `Halo admin FrozenFood Yummy, saya tertarik dengan produk Anda. Mohon info promo dan pricelist-nya. Terima kasih.`;
            }
            
            // URL WhatsApp Web/App
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            // Buka link WhatsApp di tab baru
            window.open(whatsappUrl, '_blank');
        });
    });

    // Smooth Scrolling untuk Anchor Links di Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('active');
        });

        // Close sidebar when a link is clicked
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('active');
            });
        });
    }

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            // Tutup FAQ lain yang sedang terbuka
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle FAQ yang diklik
            faqItem.classList.toggle('active');
        });
    });
});
