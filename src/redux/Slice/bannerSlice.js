import { createSlice } from "@reduxjs/toolkit";

const bannerSlice= createSlice({
    name:'banner',
    initialState:{details:{
        "itemType": "show",
        "showType": "movie",
        "id": "5667",
        "imdbId": "tt13024674",
        "tmdbId": "movie/796499",
        "title": "Army of Thieves",
        "overview": "In this prequel to \"Army of the Dead,\" a mysterious woman recruits bank teller Dieter to help her crew crack three legendary safes across Europe.",
        "releaseYear": 2021,
        "originalTitle": "Army of Thieves",
        "genres": [
          {
            "id": "action",
            "name": "Action"
          },
          {
            "id": "comedy",
            "name": "Comedy"
          },
          {
            "id": "crime",
            "name": "Crime"
          }
        ],
        "directors": [
          "Matthias Schweighöfer"
        ],
        "cast": [
          "Matthias Schweighöfer",
          "Nathalie Emmanuel",
          "Ruby O. Fee",
          "Stuart Martin",
          "Guz Khan",
          "Jonathan Cohen",
          "Noémie Nakai"
        ],
        "rating": 64,
        "imageSet": {
          "verticalPoster": {
            "w240": "https://cdn.movieofthenight.com/show/5667/poster/vertical/en/240.jpg?Expires=1741748085&Signature=Gt4hFGmbXI7gqLH3CfC~3E55RR6KJSSmRxVALMAjW5jhcWBxzZeZ55XjVBkloNaZMjdNSs-P4omZHooRGtOwawvxaWuyaj1aR0WwdgCZPOr7c8q6X~ulb~7TJdieBxwOX7LeB7DyuVy0JsHi0mmfLDaQEhSP8X89tAQpAeT4tPGIy5E6KmtPM877KO5JnWqjlIMaUqvh4BSvBvhI6EjT8yndTsKBQbuKUYkF9fjNaG~5ANgbQ1aEX-MoU8cZMSgZR1xM1vANGCIE066CbnjU~AA69gzWoZ5ThXXL66vepChWKmqQdUm-7-VUt11gkQCRWEk9nY-ILS4DaYYA1tju9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w360": "https://cdn.movieofthenight.com/show/5667/poster/vertical/en/360.jpg?Expires=1741748085&Signature=b6YplG5lsNGKFhFnjY8aEIhW-RqU3lU9IWiXGWHQgvILJTfoHXzQUd1Zk71LgiGMuVVdshi9V2BL6G90332Y4Hf~XKBUvE3fhB~OdUXBVnTyTtIeA-PTs3UcQ9FgbS3os9G~1gI-X93Fo1RiJ2MIPAs98Q96CExg7gbSoCGmuYxOMWfFtyUpkxmBgwb7l2yeGP8RrMawxDjI-s79N38kxVMxhC3nWnd649YkLsm7BvwAkqrOSqo3WoUfwiMLdHzgCvXl-~pX0BX9cFysq43WUeG-TmB3VY3DZSriaJRzwCidALYhRmOfjDrOs~7Y~Ig0wvGTW1P7A1hBVW9KbMKzrA__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w480": "https://cdn.movieofthenight.com/show/5667/poster/vertical/en/480.jpg?Expires=1741748085&Signature=YucleYzxUDCX5OrHrON92VLNzl1z5IBlWpd5psfisIp9bhrnj6Oy1oJk5pRH8lCkoDrQ-Ub4gFz3w56wJ8yPFmRTdnylqU3YBSZbhp5wewi6RCD5L807p-Kf3Ct-~hMCALSydXp-RKipwnl-iU5a8y-ZHWYu-267km1VRQE5tbIi9FMImIrFg1cWhZeBRH-tV43V2NhsgVFU21ThscO5QAn6O~66D1eGYdmtJb6ZEE5RTrB2ErNefkFK2OpEle2MDQNyv6aAUCtAbgvyGua139dAcgh0FLQ6BiDrnLpaElux-nxhhdBog8Yxso6lK~EWNQ~qpTBLTrQcKExkZwy63A__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w600": "https://cdn.movieofthenight.com/show/5667/poster/vertical/en/600.jpg?Expires=1741748085&Signature=Mrt9~5WlVYVrmZFqFB5T4Tyecablam2MBORwUPxNElzahTQqRuYXu7ejY2NQtxlFP8ccDKX1bdr1HT0u7nDddH7JPR1KayuPpjtUdXaWErGB0qzP6rIi0TI9PazT5MHEzslSgqHBFRPmppFLjuCU38xfjVgcOBhtJ7NbCB5EQ~r6CemcqTBVDzsiFrsOoaBs66DTCoXfojki0A37FMv8P2JfdigZeCp44JGra59nQimSylmnc9RkY1Nu2UdRSFmh6UdWGvfj2c2wND8BFNLTFvx25tEJO~RfSJdG548-0R3OKWheUd89HJpSndjBHXIUIXKnVw9W8noXzv0tEBPZLQ__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w720": "https://cdn.movieofthenight.com/show/5667/poster/vertical/en/720.jpg?Expires=1741748085&Signature=gExO~C2ZK-pPCGRkRgnSkWRXqCDGAzGbwrNV8jsIAtxXvqTfN6mwtCxGehB6GRHuLOrP25xDl-1H3P9fOcY5X7-GMFgEW-vOohq1FcyN926Zg0Gq1l9zYrih8iwVEsJnNteOi4WmUlTcNTgqJDKZCktTlMZmD8zUEJK4VZqtfeQ6YeC-v8qRVHdiB99O7HF1GEMWIlm8CIGM~mm53Kif6peWCZYTcbZXUWFP8bUt1dfjg~MlnyzQJbGTa2M7aUd--l-Sr6JFzZl3zssBZQdEGHUNNtB9tRV9qWHHfzWA~LvhECjmdJXty4AMyGQHP5sGKp5dREgBfTjSzhVLpzcBFg__&Key-Pair-Id=KK4HN3OO4AT5R"
          },
          "horizontalPoster": {
            "w360": "https://cdn.movieofthenight.com/show/5667/poster/horizontal/en/360.jpg?Expires=1741748087&Signature=Cp-upH5Ohy036p9aRojXoiMK2hHJ1fyugPxGIX0RcCqudWPBaa8jf5sBIONAb0Tm9e1uKweNasi0udrc15lbgsWOIJbCGbcQFFnlN4P87D8aMQQ~nzsy7vpiprX9ZmTX2IPAZIQuyp4938OwD~GPTdgaQDnjQLARbhq0hrYEzJ6j2RVcZK~iK1v-beA3~8tLUEk-oVWnTktWEmS1zxL5p6DKE5mlt0Bp-WXNRaSvn0iyFEUQMWhs4E5MHymS5i30oK0kNn6S610hlAm1Tpo6ND0FXfySxMZHRuFujVyP1lVOIRUh209GFfOqSkwQBDsaGMopctV22R3hhVz0v6yfrA__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w480": "https://cdn.movieofthenight.com/show/5667/poster/horizontal/en/480.jpg?Expires=1741748087&Signature=HgBG4XRNh25H0w1wG1Zrwz9qyVjYjSf8YpoTr2j4RQmr3tYz04ae0FNaDwObfjwTFP9YNtS6pHZqDkUFYz54Fdykel197eZ~RYCCQgMhgA68OG27K888efa8jF~Qy~5CAq-x6-rIVxOVi84EfXSReW-J3Q1RceKADhIZ6Cg8nYnaD9dblCzYV4m7Zp9PjI0XiJa8pOfr29qaYV-M9Ipg1cfRYKYq9FnsTUTeO1mRi5JEZ4Gaxea1odZ8qklzLMu8LOrgOzUQ~5SpbeNsxgwFXsRTj4zUjMHX85Xy48IdzgBUFEiMw9aBoh2jc1-pFGfTTWrfEmWuhki2CrWMBxx3Dg__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w720": "https://cdn.movieofthenight.com/show/5667/poster/horizontal/en/720.jpg?Expires=1741748087&Signature=ZTG914TW4d6ftxH0MW-wE4vbZdXLU4dme2ngRaa7OH8PLuzSUvYCLFScQiFwouAICYqX9aBzYFRFMYw-BMNFqj-ze2QKv8z5Jh0UvbvA1YPwaw2dlJjLTYMDW4YUEbhKA6oZRJUDu8DmZ2OxKO80XltLW3PkH4md3s5rDxUcha79KT9exNNDnxZufp9cY-2dgWYqZ2aaEBVoz4THTW~rT5qOyJIijS7waf9F7Y33xUv29J18SGNAQRicGEjHEaT6ygXQvr5YRSlXzL1wMaMsKDq1zdl5xiJktJLLxN4BJjawStRv1V3SnesK3C-ECovg6v7QJdwKXEoq~B8Une-fSQ__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w1080": "https://cdn.movieofthenight.com/show/5667/poster/horizontal/en/1080.jpg?Expires=1741748087&Signature=j57~zrj79~kjTp11g8KTkbNBhBsiGj6g2WCXsHVToZk4RPHIMilianXqlnFC-8WyDcZaPrFE1W6RjUEWxgza8T2M6GdfEvPfyBZPm3ua-CqAWcQTrE3CJxt~LSdfyG51LTBIAKbdGBTsk8LCyHAG9anfxamypT8xxbfLqXwZipkfTrQdvC4dtvEP0xwGBta2oIbpmustb2fjqYydfWgnuINcfEHN0vw4xROhohXcRsUTmfZ2-SljzwrVJB9Hbl4wTisE4VnmQf1fV10waR~dqimDKhUmv9AxCFVhaYrRPWOBpPAQUjJ2YC51Vw2wH-ujm3Fg09YH7Kh3pd7~JaYBJg__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w1440": "https://cdn.movieofthenight.com/show/5667/poster/horizontal/en/1440.jpg?Expires=1741748087&Signature=hPri6-FKOPfeGVmx-6giVe-dw6op8kAe51Y8BStz5brdIDbmgqZqTKmwMrK~mXfu2uMawytKfVOK-fzpvmkSgDx-3ZIoT-FXoN4y4fiAr5REnG8VmCnKv~um0EOoR4c9SftkmloeCtlNHtoi-pZeIZE16bXnYkmiIB6lU-mGIcvZjbOnGfJhywf7eCXTIcPkKEAJrrK3QiAeUvF7g6S5cMxbtqYIltmrpLyK3a9kPCtg2uI72qsOcax1vSyGa62vlFcFvNYgiJFtPzDv1j4fj~1MLfs~-QQdYM7U2zw5MjGRQkV1Eu7OgGQ6Vxp0Y0QsNWz8pRJiI9DdfDmKrCVyXw__&Key-Pair-Id=KK4HN3OO4AT5R"
          },
          "horizontalBackdrop": {
            "w360": "https://cdn.movieofthenight.com/show/5667/backdrop/horizontal/360.jpg?Expires=1741748084&Signature=hd2EREuJpG4NHk9JyH0g1tN4V5bDlQfHYO~oULK4iyQVUjgDEYH2uDz6WWzBuLqpy6N0NM7h6kHFPskRyQ0QqmfpG1SJEPZq~r2uOW04DTag096bqSzfgckVD7UZrX25iJ5O1znHqlScLAXQjxulTo8BT8I1ZsKbwNZPPfMfPDp7J-YCUx-WG5vU2pzA3hBRqZhID1nLNm4x1VkLqaAHTObOvFn-~aoHsWaOzS4us1ZwXyBD737b4WuEtpvTfCw1~xCZvG3Mq6T-FAx7lvOafU5E3rploBqS5FHtEzkyDVF8cHXKdWlGwd2RFFriV8JuXTMX09cQL4wc~cHUQxjJ5w__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w480": "https://cdn.movieofthenight.com/show/5667/backdrop/horizontal/480.jpg?Expires=1741748084&Signature=Ugnuu3ZVQU6KXgIHtraSICDtTDA4GbdrtV-c9gAEVJ~G~GLf4hpFbDOpfrvvrzfERoSq9ZVjxq4vht6d5us~uvkMghkQZZRR20WP-oaMqKViVKuuXhkK90kjyUm-vmWxgqQRqKVKGo8qGlNaQBcpEJ9YA91fxVe-7LLFB6pLJhkm4Ib9-dvfMxoCz2z0wrPSx~6WAzIaSV4-GfDPYB~zCFLQXanTD6nur-7C-7g8WhmvYcKFZjisOSng9zP64IKWhgywUSJ8d2b0rXR3TDKmE3ZArh4FJxQ1u66xMaHIHQOAFfkQ-KremHxGIU3tqPc~f0pgSbdc-TLmJxuVajYK2Q__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w720": "https://cdn.movieofthenight.com/show/5667/backdrop/horizontal/720.jpg?Expires=1741748084&Signature=DOE5dStbfMAMrYdWPX6nyI7IpK1EOVMT05LEkXZsiIQCeXZKSCCverSstE0xM3MxDi0Qnl5Xjdhbo~pjnNP73VimbfQ5IpP36r7icDEfw1QLFaz4FGp66rYtj3hTw11nRN4y~SVduu9TjKfEorPDzEhEpy2srnBGwHVxyk5qE8RV9DtVxeMaKAsvqJqMFwTmmSvj0-MWs~FNh64wsL-Re0w43iq-yXy4uZLAvo-mI3u4qTG6~7No0VggAZEXgLfrOeGqu7aHZQnBbfDq18qqK9BcqNSWaWnx0qEWVpLtpWMQRpwD3LosVKMg3tZIOml6fLgw2Ls9aCmLAuqdcAzQCw__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w1080": "https://cdn.movieofthenight.com/show/5667/backdrop/horizontal/1080.jpg?Expires=1741748084&Signature=ZbD5BXePe3WPV83ctQIvoaFvxQYRb3ACt1jHimtHYwTnRVxfvClm-xUH91t4xp5kKHjvpgEg4wS4QFp5F7XR3HOMjVK20C1NXYFBF14Mt3qj78Bhwv0Poc-h6RKFzi0m7AS7OxoCPb9rivtv6ZJKWsjjYWSWL1-J1IRyMMBro2HGfcczFYmzCzRTnmoShHxfDwyB7GO364VRARvb~VijWtRbbKanp-QyTr4dSk9XPZFGVLBd3mAdN2vzSGvJlwpk5CMLrWwQKisd~dt-ZduvVXLkpGgtNEncH0mA1RDZwFrBppU-Twa5Rcac3D~Dzo~uCIb4bAlOPDHyFq3SnlgbOw__&Key-Pair-Id=KK4HN3OO4AT5R",
            "w1440": "https://cdn.movieofthenight.com/show/5667/backdrop/horizontal/1440.jpg?Expires=1741748084&Signature=HYnC38bOIMm~WVNZgg1cJsCvUneg-eTD2TYexP2jeh9F9XLGCd9SyrXJdvzRGP6wavRlvVpPmUWz2HpAoIgWsFIsunOzLpdqTnrfrGaVh1-h2JKfQ4TV~1HqPWm5b7-kC7yAsxV6HanXy~hvDKKW0iSz0JZHHUScq2V8vwKpRWECXaF8o7RApehF51z6ZTwwyC7OJM4EG9HGGG9U5jSJTQYVIVQiV7KIqWh0K1TZYS731ugzg2NNpmJOFA1frgiFBoMSpHIHzkWIfPtdztFf3O4xML46h~m8Cw1pfFgzI6S8vUEferAd8maSlQEDuw2mbTKkznz9ga0GyKLKBuaN2g__&Key-Pair-Id=KK4HN3OO4AT5R"
          }
        }}},
    reducers:{
        chngeBanner:(state,action)=>{
            state.details=action.payload

        }
    }
})

export const {chngeBanner}= bannerSlice.actions
export default bannerSlice.reducer