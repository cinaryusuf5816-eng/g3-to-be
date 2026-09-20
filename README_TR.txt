BE BRILLIANT — AM, IS & ARE
3. sınıf İngilizce öğrenme uygulaması

NASIL AÇILIR?
ZIP dosyasını tamamen çıkarın. be-brilliant-project klasöründeki index.html dosyasına çift tıklayın. Kurulum, terminal, hesap, API anahtarı veya build gerekmez. İnternet olmadan temel dersler, sorular, resimler ve yazı tipi çalışır.

Alternatif: Be_Brilliant_Tek_Dosya.html tüm görselleri ve kodu içinde taşır. Bu tek dosyayı açmak yeterlidir.

SINIFTA KULLANIM
Home: Start Learning ile derse başlayın veya Choose an Activity ile istediğiniz etkinliği açın. Sol menüden her bölüme doğrudan geçebilirsiniz; dersler kilitli değildir.
Learn: Sekiz kısa ders. Konu başlıkları, özneler ve kelime düğmelerine dokunun. Add not ve Make a question düğmeleri cümleyi değiştirir. Next Lesson bir dersi tamamlandı olarak kaydeder.
Classroom View: Üstteki düğme soruları ve cevapları büyütür, yan menüyü gizler. Exit Classroom View önceki görünüme döner.
Sorular: Bir cevap seçin, Check ile kontrol edin, ardından Next ile ilerleyin. Son soruda See Results sonuç ekranını açar.
Fill in the Blank: Klavyeyle yazabilir veya ekrandaki kelimelere dokunabilirsiniz.
Build a Sentence: Kelimelere sırayla dokunun. Cümledeki bir kelimeye yeniden dokunmak onu geri alır. Clear cümleyi temizler.
Review My Mistakes: Henüz doğru yapılmamış soruları tekrar çalıştırır.
Try Again: Etkinliği yeniden açar; önceden kazanılmış ilerleme korunur.
My Progress: Tamamlanan, doğru yapılan ve tekrar gereken soruları ayrı gösterir. Reset Progress onay alarak bu tarayıcıdaki ilerlemeyi temizler.

İÇERİK
8 konu anlatımı adımı: kullanım alanları; özne eşleşmeleri; olumlu cümleler; kısa biçimler; olumsuz cümleler; sorular; kısa cevaplar; özet.
Guided Practice: 6 soru
Choose the Answer: 30 soru (10 olumlu, 10 olumsuz, 10 soru/kısa cevap)
Fill in the Blank: 15 soru (5 + 5 + 5)
Build a Sentence: 15 soru (5 + 5 + 5)
True or False: 12 soru (6 doğru, 6 yanlış)
Picture Challenge: 12 soru, 6 ayrı sahne
Toplam: 90 soru ve 7 özgün illüstrasyon.

DOSYALARI DÜZENLEME
index.html: giriş sayfası ve belge bilgileri.
styles.css: görünüm. Dosyanın başındaki :root değişkenlerinden renkleri değiştirebilirsiniz.
content.js: konu başlığı, ders verileri, görsel açıklamaları ve bütün soru dizileri.
app.js: ortak etkinlikler, gezinme ve ilerleme mantığı.
assets/: resimler ve yerel yazı tipi. Resimleri değiştirmek için aynı adla yeni dosya koyun veya content.js içindeki scenes yollarını değiştirin.
Soruları değiştirirken benzersiz kimlikleri koruyun. Soruların anlamı ya da cevap anahtarı değişirse content.js başındaki version değerini artırın; böylece eski kayıt yeni soruya bağlanmaz.
Başka dil bilgisi konularında etkinlik bileşenleri yeniden kullanılabilir. Konu anlatımı etkileşimlerinin de yeni konuya göre güncellenmesi gerekir.

GITHUB PAGES VE ALT KLASÖR
Proje klasörünün içindeki index.html, styles.css, content.js, app.js ve assets klasörünü aynı dizine yükleyin. Göreli yollar ve # ile gezinme kullanıldığı için bir alt klasörde de çalışır. Ek bir backend gerekmez.

KAYIT VE SES
İlerleme yalnızca aynı tarayıcıda ve cihazda tutulur; cihazlar arasında senkronize olmaz. Gizli gezinme veya yerel dosya güvenlik ayarları kaydı engelleyebilir. Böyle bir durumda etkinlikler çalışır fakat kayıt uyarısı görünür. Tarayıcı verilerini silmek ilerlemeyi siler.
Listen, cihazın tarayıcı sesli okumasını kullanır. Ses kendiliğinden başlamaz. Sesin ve İngilizce ses paketinin kullanılabilirliği cihaza bağlıdır; çevrimdışı ses garantisi yoktur.

DOĞRULAMA
403 içerik ve DOM etkileşim kontrolü jsdom ortamında geçti; 90 sorunun tüm doğru cevapları, sekiz ders, soru sayıları/dağılımları, benzersiz kimlikler, Back/Next/Check/Clear, son soru sonuç ekranı, hata tekrarı, puan çoğalmaması, sayfa yeniden yükleme, sıfırlama/onay, büyük-küçük harf/boşluk kabulü, engellenen ve bozuk kayıt durumları kontrol edildi. JavaScript sözdizimi ve yerel dosya yolları kontrol edildi. Yedi görsel görsel olarak incelendi.
Bu ortam düz HTML sitesi için canlı tarayıcı önizlemesi sağlamadığından mobil/masaüstü gerçek çizim, taşma, ekran okuyucu ve cihaz sesleri canlı tarayıcıda doğrulanamadı. Responsive düzen, klavye kontrolleri, görünür odak, görsel alt metinleri ve azaltılmış hareket desteği kodda bulunur. WebMCP destekli canlı ortam mevcut değildi; bu isteğe bağlı katman desteklenmeyen tarayıcılarda devre dışıdır.

GÖRSELLER VE YAZI TİPİ
İllüstrasyonlar bu site için yerleşik image_gen aracıyla üretildi. Görsel üretim yönergeleri IMAGE_PROMPTS.json dosyasında bulunur. Mia ve Leo özgün karakterlerdir.
Plus Jakarta Sans yerel olarak eklenmiştir. SIL Open Font License metni FONT-LICENSE.txt dosyasındadır.
