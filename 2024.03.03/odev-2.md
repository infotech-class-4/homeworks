## Kronometre yapimi

### const timer = new Kronometre()

- timer.sonuc // 0 sn
- timer.basla()
- timer.dur()
- timer.sonuc 34.345 sn

### hints

- basla() // komutu verildikten sonra ekranda bir sey görünmeyecek
- timer.dur() // komutu verildikten sonra ekranda bir sey görünmeyecek
- timer.sonuc // sonucu gösterecek

- basla = date()
- dur = date()

### acceptance criteria

- timer.basla() // ok
- timer.basla() // hata 'zaten calisiyor'

- timer.dur() // ok
- timer.dur() // hata 'calismiyorki dursun :)'
