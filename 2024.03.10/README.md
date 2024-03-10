# ODEV

## basit bir backend yazilmasi

    - express
    -body-parser

## request

    - GET localhost:4000/islem?sayi_1=4&sayi2=6&islem=carp
      response:  {
            "sonuc" : 24,
            "hata":"",
            "istek" : "GET istegi"
        }


    - POST localhost:4000/islem
        body: {
        "sayi_1":4,
        "sayi2":6,
        "islem":"carp"
        }

      respose: {
            "sonuc" : 24,
            "hata":"",
            "istek" : "GET istegi"
        }
