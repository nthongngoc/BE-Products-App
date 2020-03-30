// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/appota')
  .then(console.log('connect success'));

const listDB = [
  {
    name: 'water-melon',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8759fe3e5364cb5e5bc.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8759fe3e5364cb5e5bc.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159671&Signature=kBl20PUEWP2JB41B%2B%2BESTpitab03LZm1aa0bZyCQtgYIObbvPIvYKkzr%2BXIg1HghfxnrkRB6Ez%2B84VEHXooMO7rMS034FOfX3YQG%2BX9THQPjuhUA3LnweyrbAv2s%2FYTEti21eGgC4QYOS7X67LsM7RFDwRX7ap2yditLJ9KlWOlJDQB442wvvOGr%2FHQjmEvPnpPs9cTlurL2X9etna155i5ML4egzohKFWBl0hYND%2FpZAXAEzYH7NhOabxz4yc8TT5meUUc4pA3yCGRI9J7E1M4yv1apD4AHxYtEYTzIcTspgBSR2GEp34m6MvkrdurCbezPoMYHxpK%2FEq07vAN%2F0Q%3D%3D',
  },
  {
    name: 'almond',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8959fe3e5364cb5e5be.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8959fe3e5364cb5e5be.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159702&Signature=KeG1VCcbbpntF%2BGMbVaVNxFYIjYywURGURbLDReqvWGKLAVnfvbNQ7NXxVsN6pQGCxn9nJQ9jAsULayjYEYv3p%2Flz9b9LZ7OMv7fnLWU3wP0Gfy2qf81tFh5VVESTNAZpsfrmih%2FFaFfSfexv96wL0%2Btn2LwMC0SO1%2Bow1LJZNsXvLtEc%2BgZ5xrgKWerGMzC2Z7cNZRGQelySptDYqZHeT8Kk6FkqMDvy08vzj5bhecO%2BEPnL87TBA1dNyAjyXutNAlmAF%2FecLbRpqKQ83zirKv93gSD8nX1D4Twf%2FIjdy8Bf%2FwYvhdoluz1fJv4d%2FXP20K4JrYMQzCIcz%2Bi8WEtfQ%3D%3D',
  },
  {
    name: 'apple',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8a79fe3e5364cb5e5c0.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8a79fe3e5364cb5e5c0.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159719&Signature=cRrOHRzZ7%2Br0b3Fq6Ct71NVwEwWH6DnkmqjMimTZztxfiRJJfCbCN5inuENrlC1YrdMgPQQVj8oT94qVUUM%2FCSsDIO%2Fe8qzGBIpaL2GMmiF1d79f7JcSpVyksMWcHMY0WfR6VocYANV7moH9qlgYq8LyznDQnWSGIetodFq3h3IBO7kBiffQWnnziPcP6ovNara9VxiyxPr5kjR24nOCsKOtY%2B6zPLTd5MIeRKtgV9onxTvAXNICxrhnUhVUkfyGbckcb0lymKsDj%2FxxOLylsVkwJSyOlGD8R4ka4oT83lBl9m7Hu0qlPNjjrZpsv4SIjqZhgW2rK5A3Og8462Va%2Bg%3D%3D',
  },
  {
    name: 'banana',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8b19fe3e5364cb5e5c2.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8b19fe3e5364cb5e5c2.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159729&Signature=N4lcnDnOsuSKwsQnezdYg66C8MC2sR3JrafChSe01GaQ8E3H6uHa1yvZ8leI7yj1y65ylKNV7LV0nCQAHc%2Fk9twCll3zc35zNJPX0V7T0EJh5TwmpMv5vpPjt0m0e2bOFsN0hMQBzJ4yKch46oXEaYqOVvUN7EloWs7WadKXeYDHn7Y2C46dSj7IBNVgCgVUUcoCdFexQE9F3v94kT9NKEoZ3sZWJWNCNQpIFhpgBD5Di9zo5YF%2BHyaz%2Fxjup4qaGKr1uGGOG8Go16iyYDWZEI%2FQIx4SHVHJYVVDGaRgbuc%2Ft%2Bl3dz%2FO3ShnJvdgkMylGindhtqbd4luqI4T97ixhA%3D%3D',
  },
  {
    name: 'bean',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8b99fe3e5364cb5e5c4.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8b99fe3e5364cb5e5c4.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159738&Signature=BJavF%2BcgJrCoTHhsXFibOQP3WSZJjayOP4QsvRLmK%2BAPyuFWjZD%2F1IXneYWN9mA%2Bzw0tZsr0E%2BoGRKqLurdoXiMWWBVEB41lW4N8eCgcpcVnCAo3kebxFaxb0XseE%2BviHvDmtnAnPC8Kp%2Bu3ujosxB6qgL377Vv90BwDJvvFJIJ9NwvqVdmQHt6Tqm42hJRia5gCzr%2B%2F0Cq4Vk%2FuKXt6CZn8CqRkAKVnyHP9Ka2rYjzxOwfG%2BFnv0BqCQyjRfbJu%2BNO8ygFyj02B%2F92FjbJVuZeHhd2XEbsXKMKDgNVbSznJpEC07ISQQOvRGKoFkzh15CmjXILkWa5EfdugdvcKnQ%3D%3D',
  },
  {
    name: 'beetroot',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8c59fe3e5364cb5e5c6.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8c59fe3e5364cb5e5c6.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159749&Signature=L7mLt6pmMVnqV8zJO48%2Fv0dws%2FI23JLQ2OZ24STvAwjpAkBjQ8PjxoGIIYcgonoIuwAMAzzTPN9KE1cAZI3LuQNPKCCl5D%2FVnURTTpqcLz83xKte5foOyeBkkRPAZ9HTKHxcj6Xyp2XGgtOufNS3MfH3IZZ6fI66bp9CjZFQAo6cWNgg7%2FihLGoLTZWpQDC8SPa5vqCJLDVDU2Q399NsQTpq6%2BnGG8Y3qCfWBbH9xV27GUo74nNf2krIkr77CtzGg42Pss9k%2BaWJJOy0JLjVX2peGt%2F63xWSf97raS5EaL8McBCgDfwllXsYAOIFv4G7cUWE%2FcrJDqkxSJeEylAJxw%3D%3D',
  },
  {
    name: 'brinjial',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8cf9fe3e5364cb5e5c8.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8cf9fe3e5364cb5e5c8.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159760&Signature=bPEIsQP8cGr3TySgx9bGG9SmojsyP0Y7v%2Fq%2F9Vwdho05tRs2uJPfbjONgjaKA1zllPa11lxB%2FUJQHAfZTMHdbbmlIfhdfVARXhsHEvhEsRm8RpNqM08%2Fms%2BXgOXxoLA2JGejh2Q9yqO1qL1wN9ncSEedAWYZiQI6nRhYu2YsPMPgF7p2HSykgu2oCM7g%2B71FtHTmqd9rGV42A8N8TNuxYuDvk1ggy1NcFADUoYTvjOoUlfp%2Bp%2FZz%2FBHYxMhzprszQdSpM7y45AlN5pGg%2F0rhQstwpgIAEjBnrqy2ukjJ%2F9pGuPyxEalXFA7qIEcXjN%2BeRW5OI0mAGc6bik4mroQYqg%3D%3D',
  },
  {
    name: 'brocolli',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8da9fe3e5364cb5e5ca.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8da9fe3e5364cb5e5ca.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159770&Signature=e0m3A2cGGQ6GA8AKcGSBSTazjPkEReN5D3th1NYPBxkMmJm00bcMVnstWXjCIV7RehEQu2zdTTt5SaDEIfCQKC2c67uFADnKxBkKzvZPoAro1vU9fL6XdrC%2FtAbVq1jnTqz9u50KBB2QwtyLDqGGc1ZjlqBlEoS2uitnr1QgxTvGT3fF63dLDXw8za25Zs7O%2BWIiHSC4rJVp2uu%2BIr1OzL%2F%2BSnj1I%2FKUB6R4F2g%2FSwvXMoV45s16%2FQ8T2ngyLTri0Kn5fCKvwZX0sOGgh5fFocSNoOhNE9k%2BppK4JgdbGkxjrXApZhZlVPh1ctmYt5IOlKXv%2FMDREzOAl9OYzE7g4A%3D%3D',
  },
  {
    name: 'mushroom',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8e59fe3e5364cb5e5cc.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8e59fe3e5364cb5e5cc.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159782&Signature=aIP5vY42V%2Bd6qEYNCB1B8PfgWKtx1rFs3ROE9NLN8GLVJb8GMMbGa9WOIPHWPAuAsbOibr00gzx%2BrKlYfL0sJJpUod24StrOAP6vQpCV4R8X00oD5Dz5UWRahrewsdMx0EdUB6JicgACk2H4Qbh1VL1PyTnxmETxC35QDjX5xGiBG2GfD%2FwlykJFRD41RBsLZVCnBNU%2FT9AHRbUcYye%2Fs0y9d5F4y8YwyS1rb%2B3S2I9OYXdPNPbDN1wQWeZg1JXdLKmajf7pcSghs%2F8sGLkwjDidEYf9f92%2FACidOkeSQSYlITBJnCaKwwmPr4vNPWdR1YEM5aQ5vQhAh6T%2FvsYNvQ%3D%3D',
  },
  {
    name: 'capsicum',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8fb9fe3e5364cb5e5ce.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b8fb9fe3e5364cb5e5ce.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159803&Signature=LJ2Uv623BlbtSQjQnCEfDXEMLUSIXSpqKBHQRYXed9KFIaZhcofK8qYmdtrn73Hh6nShsqzFknLt3zvf4CBQMLj2XE%2FD7vMB50r4PDP5WATquuM32uPkulXVjvz6j81Lagn2X%2Fk9rZJeVxO3CSeh9K%2FGgDUSSHsjn%2F4h7Wb2WS06%2BwrYL0mdtUB5bkGl8NXNRactYE1Gmhq9stRIGLaCYrDFVFPktu4B7LVNgXp6Znxpd3bKvC%2BI5rjhkoTPnWN%2BUm9e%2FNtY%2BTF7waB7U2lwv0%2FsgNCP8Qbrugbom3Ok3j4ibxSUXSc9vDKKFxqDaFfVQU8gCdNh8tvbgxAKYDSbPg%3D%3D',
  },
  {
    name: 'carrot',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9069fe3e5364cb5e5d0.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9069fe3e5364cb5e5d0.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159814&Signature=RylcIpZQ1kVMbpgsNuFiJKtEiEtsI%2B5zPhsahpNDi1tWIbzbSe0TaHHqcAR5oULwWN%2BngqQlx5KvWXbARAfnKNsgkXdoxZifpycImDfV%2B%2BJquXF8L0KCBMt70Mohv2ycZD7%2BBenv6Mz7HwBxaGAewcLxb01OlpYaTcX70HQ7bNDk9q1lKyV%2FhGyZN%2BtssPQo8oZkDH1GCpQ0Rxo9aDni%2F9Tn%2FYh7f1qVCRKhBI97sChkU9YdHaroJ2hopNG8O6teWsKNMTHmiPlicPkswdLqfHLEjcEHCZX9QAjePH2WGhv6fustkZUobkEXbOR0n31UJPRILFcaOfJrVeSgifqluA%3D%3D',
  },
  {
    name: 'cashew',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9139fe3e5364cb5e5d2.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9139fe3e5364cb5e5d2.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159827&Signature=A0QmqyATezekY6fR3%2FSrynA8EuyjLDyYSWsQs0XJbS8ZHSNA8aK95k%2B1%2BPOErDy%2BNQCCh6zPNVuOzd9RfHsbYJ1bw74BiFJ7MyAJK9pRdi4PzO7aoWOn%2BovkARBuxxfpZuL9x8Vug4gia2FqAfpA7WSIdvQmvKQkHPwpnWG05ZxmiYr8KC466D5g%2FVSogXOiPXUzNz74YE%2FCKQw7NxIAv0APPFAPQgjklPxc3Cll1%2FisZ0jlMBOa%2B0QVNNvBwgAujRR%2Fctsuv7y8lF4yzW1q8ynT%2BiLFq%2FB7edlp2fUB42xcaYRAA2k0S1jj1nARsYwX4O883UlfjEj2x%2BS5qC2Ddw%3D%3D',
  },
  {
    name: 'cauliflower',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9209fe3e5364cb5e5d4.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9209fe3e5364cb5e5d4.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159840&Signature=e3oLBtaVWF%2Bdk47WG3BG3tCBN2mS38%2BAuf8Oh3GucwgUWMiuYPFvyCHmINB6JeQ%2FujvPrJR%2F%2F5GUNiwC8eJzC%2FgLmDARi8tUEunSLWTuaLjaYg8IjYyZm%2BtGN7ac1r%2F6eRJ8DvO4z%2BDd2BvKEEOmT%2Bo5g0MR1UKwAvzKYscABgeq8vlQ%2BO8NC8XbTrBRfIrVHF89bG6SUBgTAx%2F%2BLSTDuxLwkdgWGiipC5XmE596EjJTNqvP%2FgJC786YkzVbZAalJf6oDQM7FFMdA6Jh61yi6N8Dr%2B9rSDhIEnlPx5RpHPTeDjRgHViSeI%2FR56xZKfyLt5ktA3up8fCa9H4xwIixlw%3D%3D',
  },
  {
    name: 'corn',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9299fe3e5364cb5e5d6.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9299fe3e5364cb5e5d6.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159850&Signature=uh1W5huPyo4d0z1%2B3M2zbd%2BUoeb%2FXd3BTYQvjCp5ZOutQvT3%2BVVCsQ9vVAwKfRKx4hIgsEjGczgJY67acE8qEoGOtaceTEx3hTx8IyedRTxvmRLRCafrXcAy3t0lYNHoXhV0GCbKJg%2Fb%2FoSn3WLdEqbAm3G3JiJHOnLRq8q38I21We5MpmlGq0M7OI96ED21%2F%2BumG5PJCVGyCUp%2Bo4zuMW8%2F9jU3N6nJK4R2jX4%2BcmPdjdEddTuNwPv%2FCAmK1fzFJnuLlSvhDT1GTfkN9oxZXo%2B7LtIiCSvDMzAFsiuVgVR%2FotVDQrJnqCpCNMKwC4mX%2BRanaMKlXwxicK9B1gowSA%3D%3D',
  },
  {
    name: 'cucumber',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9399fe3e5364cb5e5d8.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9399fe3e5364cb5e5d8.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159865&Signature=rWY78qx%2FRQtql7OqZtnCPGdaGpSP60mIkQpsgWgBnkxoAqVPt9GMBDBD%2FjDQstnblBs48wRpVsDD9YLJ1G32HX7ptnK0jjW9hJJt8X%2BUKiHgDwFaqypPWhW9VwUGGkhXBsfJCMrSyYYcS7wHHlZxY%2B9Lytk0PrxJ0e%2FJgJYmk4%2F4C4ObkmopIwpI1iFS7tpfTW6UI%2FjiYSEKlQGn9SSNg2uDvDpvA1NToE3JN2%2FvuO9SeYxXjk8D0dXXxXUZDtBOLDfHC0a3H5gfTdHKKviRmnKXwXl5Bs%2F9AWie8dHKyX4a5VAKHgIAXuW690RBgFAH9Uj3Wla6kUlnlcEDHTWEXQ%3D%3D',
  },
  {
    name: 'grape',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9439fe3e5364cb5e5da.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9439fe3e5364cb5e5da.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159875&Signature=SNyFJthrWomOSI%2FPllRwMVAPQk7cvNzbYBNkjZOtQaHZt8FrPRtrtaWW7uJbg9gNG%2FhbzUI0V07Tv5iFKlzkvx57J%2B7qwqNnpL9ixAcfN0ap7H5BL%2BSmlp7cxHHAuzb06jDWDPv0nGjjdxG16UyTs9v%2BUS3KMaC%2FbhCPE50MGuTGZYz%2FJU1paIzMyQE7JT0Fx1VFAUfDtTwMyPed75O3lgYQyieLc7xOJDFVrIiSuWnXjghknKeG22qErz%2Bf7CMVmXmBjMFd9hT1B6A7PXHQWJlpX4AHQyrCz376jraTdbAnwctsXFn3zSc9T59%2FbmrD8PkoGz%2FmIFZ2bmvPH8GNRA%3D%3D',
  },
  {
    name: 'mango',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b94c9fe3e5364cb5e5dc.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b94c9fe3e5364cb5e5dc.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159884&Signature=MGZ%2FWaJO21fDK547UYmBoXTfIoV4qRD97FHeB%2B63GkUnCKJ%2BdTN%2F9rzXRme20zhWeTcsqcvx0ExAX8bkyBZRmH8ALzsHJjADdNpX%2F%2FLmReaR4tRQT9WL3H70B%2BUBSTUV6yk9ZFt3308cn8U5HMCXW1xKq3bVqOYX3iIh8xwCQrTiO0I3wEqcjFfF9z30bn%2B26Wyeuo9LVkQF0Wi0q%2FlS3xfWqOozMKCI%2B3H8eHzCk7fycop5w%2FZI9Zjr8bQLPsil10p%2BbARLyf%2F1Cqd1ZiN5UORqfubChuTpMVdX%2FU%2F%2FJ1KCv9nNk%2BqWhdm9bblsLjABrArLhxqV0BI1coT0%2B6bSOQ%3D%3D',
  },
  {
    name: 'musk-lemon',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9579fe3e5364cb5e5de.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9579fe3e5364cb5e5de.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159896&Signature=IzS6ceAPUfvxoBrZfBOPJwyDbu07iMQwD5A5pV1mSQZOiIhQ1MFU%2BOMhHhxrA8Xuqa9QsodcLGdhK1hjQl%2ByVrM5AacFQk4JXAZ4RRM8ad90NkN3hDTxVu%2FbiJHUpWBc6Q0bIj2AL6HUNng%2FODCcnBcGoY6%2BP96el7GoYG2xCfABxh7VWvXO5W2OJIsyhey5XAmUDGoVfol4yvT3ruMXa0o5NuhAb5rcO%2FnXY%2B4Q0WndJRMNf3wWh3Isdi%2BRC%2BtjwGu5fuFVJHuunNMPr5PgX9yut9c7H0c%2BfkwdH1G008r1V5g3zAbi5Ai9VLFrAF69EaWZkwja5ej0bgg1H0O%2Buw%3D%3D',
  },
  {
    name: 'nuts-mixture',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b96a9fe3e5364cb5e5e0.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b96a9fe3e5364cb5e5e0.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159915&Signature=QuflJh2Z5DTOfL3KFaYNKMO4H6R%2Bmxjin2XEY9oqCHD1ooOS%2B4wq9A1EsNYYHrIYo7Awve6ghQQaMbQWtKwVhG9cZCE%2BQv9W%2FVF%2FGuwmydHYKSrAddPwM9BC8rLU%2FLSzdUS9GHuKUbCnkmRxYN07tmFn7oofHQwtnLuOT1B%2FejE%2Fkh%2FRj1yqE3lkzzEDI0SMFyiu5ZHESxL6vQaNyjGwp8rLgXG%2FWzvvJyIhvSvq31x762yi%2Fc3ONNi9cFELG740%2BZ0HA%2BjOH2HRSYRur8g%2BdOsJSI5s053p0e63HgHTOskaZgQg5sRaRWtYL05C11M%2FquFpTSfOMSLbQo7ZvbWlzA%3D%3D',
  },
  {
    name: 'onion',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9789fe3e5364cb5e5e2.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9789fe3e5364cb5e5e2.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159929&Signature=eOoqrfdxsT%2FmXSGJUveZNwjEKsFeIUCcR7QjycEVUBr7sTeOAAW1dzGjpMp9MdFaU9J5GJkJ65fSYE16%2BUZtFg5iYHOBNpA5K03P4NGXI%2BXe6r8q8xhecToNhSDbUXNdnnzhyThq2NqHuz1RkEKQ9O4wWnZ0Z7Iv2uJjfR60ojWLMtSxOpMPYPb8vw8Naeh6DHSGg8ls7XICp0gvWfPdEWxHgI46JPzD4amC8FDA6rmzes8Zi1fwJW6TWg4OEGUc5SL3kWjuMkdL28TXODjoInKtBqwS1r8yf4Uxd9cP9dqXi1RA9jWhQHkNUw09%2BntFc9bG1WHXZvXnNH5ZB%2BepJg%3D%3D',
  },
  {
    name: 'orange',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9869fe3e5364cb5e5e4.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9869fe3e5364cb5e5e4.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159943&Signature=aV84BIa8s4NGloWUukoovdxuQn6xyjyfUH8iThdsCSPv9N4x8FKwfgp7cYvk7KDpDbJjKFZ9DikCjjqmN8WEeisg04qOqMljkN2I4ZlpWceC%2BxRTCIRaomncwdoSdFCo27tAh3bc2wLMv5OKcBlwlZo6009tJeZjMxjnWhO1I%2BnLmrIydqYzopNRiyLnnUU3HmFnX2zSshh8pnzdhjxZWYc5QmrwID%2BFnP2pCNNs52T2ukZJYrs1j5%2Bk9nEDYFiOvJflE9Bu0DLuSWEEV7EgkvkfZ9J%2Bdnb%2BlSHvjv1L2cAe9pxzR9XDu0yLL36Q3tQKE15iC3qsRcFm7kEcSDseYA%3D%3D',
  },
  {
    name: 'pear',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9929fe3e5364cb5e5e6.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9929fe3e5364cb5e5e6.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159954&Signature=HEA9JTd7eqx3zKZzzGlnSuSy7PSFOD5D3Lm%2BPJOXKBnhru5e1cYa823YnoCvrHQhM6Clv%2BQBER1zbZSSqSaEt9z1%2FwrDA5tVC0hp9Ql3HaOPw%2BctLA3UF6yGL6sN6FGZAYxhL%2FlFK5UfLye3rrvmee%2BvCp6nPtmEQMw%2FILyvPwNk2SzR0n1T6jkCStqjK%2FvRTUh6yncDWkOAuG6IadPb3s%2BVU1EuPWNxRty%2F30vmBvztvTNtAkE7Nrel8b9r8NAV9iVTlAzaRjfJ9OJKPQJYMl3X4mIfLOcPIF5AcBT89aLGITwh7n1LYKsXkbgVSWA2IQZSAW%2F8S0uBhS2Y2%2BDvLw%3D%3D',
  },
  {
    name: 'pista',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b99e9fe3e5364cb5e5e8.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b99e9fe3e5364cb5e5e8.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159966&Signature=CSnfpeLbQgpUCgBckR5OXm%2B4VavJl5Iw%2BQHQNHa0WVD1M0s0%2FMoDNKN5ex%2BfnK0sNSXBT1ySy5DtX%2F6Czr22AkgR7sWwpeiF3m5qUWEpJjY%2B%2FqmYU7JY%2Bzc1cRIf%2F8G8VyJ7pR1MgPYEBJR1mbG1blMX%2FpOuMVWsIf8by%2FP78dW8mkZ414DpIK9vRXixwhcV4nzGbJ9NyZhpmzyq9JY7F08c7OpFngNtdKiG59fJlM6YOVRTgXiEQLQavR4NnDzGA4Ck4k%2BVHxChJsqF4xj5BoT7lfwNfUQvoPxIlKWWk90%2FrIkiVaNzQbhrs2yUYk2a8cAenTs1wOToohwNqGekDg%3D%3D',
  },
  {
    name: 'pomegranate',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9ac9fe3e5364cb5e5ea.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9ac9fe3e5364cb5e5ea.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159981&Signature=kZXZeyfQ%2BLy4sapAtgXzHbONWox0wI0jpSOXQzKoddEBEXqia%2F7YhPl9c9BT2D3UNYnEeUGt9NZC1L8JBS9%2FGyuddrKORR8OzoKIWYY%2FDWktrtxpGRYlrmMLjX4bINuWavFnfab1bMVUsmhd4%2BxI%2Fokj0hgy0ZOB31f03LVbee0H4U4mHnOgsGiGYn30LQ2T%2Fz5hwjr4emcAvgrMv8YN8nKw3QqANWUSDP3S6zhNlzas2GifhC7bRsuS%2FhO18vqpLfoBPc%2Ba%2FvaNOmJJg3b%2F4BnM1mNTfAiES6qEteasFBhsTiixPRXXVvXOgcueDIXLzs8Z7nGny47aRk0qTCSpiA%3D%3D',
  },
  {
    name: 'potato',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9be9fe3e5364cb5e5ec.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9be9fe3e5364cb5e5ec.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589159998&Signature=RsICRrafi7DyyZXN5pIFzlxUNq3YuwTnn7BTL%2BgGNfK6oIpC%2FALAns%2BY%2B56ff1lfvlAq4Gl6MtZR95ZIlCHLMeKZi2HZicWP5Hz%2BT3yZoe%2F8AhVxW1Z%2BQbOxI9l413%2BgT8eEHaZKJ3WGzfLNZtmM0X78Cvir%2Bd9hpKqxzD2F6Khw3BfutFAVEYz7%2FL4etJUcg2ghUIcD7kt4V5189NIXTx5p8NxyK%2FVz6uBBwj7Llrj7yKlLf1s8DO4JFrgW78AKHiQkURg1ayFYFpZtreid9rs1OkGbGaO9vCH1o%2BWp9vZ6gfa33wC4Ns2vBOvoWaajBFIZwhv5jalqNdnNaCSIUw%3D%3D',
  },
  {
    name: 'pumpkin',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9d09fe3e5364cb5e5ee.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9d09fe3e5364cb5e5ee.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160017&Signature=pmrjFQSu0Oq5JiNKsAGzrQDAK2qrTGqm4%2B9kwkMnH0AEHlFHWaj9eGaLVW1bmHOzSLulH7vYliQR7%2B50fiRBfFh4nt8Eizs8tocs0lEJEgmAlosrCFss6Ju1Et92R%2Fn7%2FgR894AiNxQ6u0wQvx0s%2FvpNQ07kTTcmq2X7qMHBV7aJoGG2UBW7zqBj2jSakzCfKYN5H874e32Qy%2BFFdbNLK%2FAwsBFbK7tuXdoPAo5YOori7JH8LXN0nIAfFHbdHJJpCsmGcZkNnkqMo7IkcRAJdorBebuy1ADL8QbNjqFw3Yv%2Flx%2F0aPH97vpHqRVrNcOohYGRQ3k0mDQLag2WLZRJBg%3D%3D',
  },
  {
    name: 'strawberry',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9fa9fe3e5364cb5e5f0.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81b9fa9fe3e5364cb5e5f0.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160059&Signature=PbMbkk%2FsPbtPx6%2FtY8pJ2hlzvpfa7fSadsWPcO2Tf%2FtSCaZWnNd88wQbIR3vwaFf2nz3YnP20MvXbQvHXXQWd6qM0UdilDWIhmPCJ88AORgXwqIx4f29k5sCKkpOVJ604HjpaJY%2FQGV4S6O93ng1uouF5ai3m1FgyWkK4bxvQwTBkRkewwRVrHVwJ6P%2Frxy1sUZy7AbjUMEGURCuLKpOE%2BZiBSIIVHOOIoRPluqDzHWDJp2PSGTl4HzI69PGgiSxnE80LnoSMp1iaKqllraH9AnRWfq%2BlpV2MrBvGQGIFTmh5DE4aE%2FQ8KSmLXdwS7NJIv5A3GR4WO5bsEeioC9lNQ%3D%3D',
  },
  {
    name: 'tomato',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba059fe3e5364cb5e5f2.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba059fe3e5364cb5e5f2.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160070&Signature=rPIGANX1B0IsPdVTelKqE1wU85KNYe4F%2FN2kGZzN1H3%2FOR4ShX6xKCRYjNvdNLYn4OJT87ld1MbGyt6KdNinKlVNhrJwvizZ7tG9Q%2BqX2GWV8k9flr31YNL565Ay50MP2TGeLfO8AkctNNw9CQHevcuFNpjoF1gpPCC4I0MwCCr7kKOY9lovItwcuBpRfmgWZO3U92sGJolfT4rzX0%2BRYmDp294UJ9mF5Ls9HpwmUdYa3KHNUXOEyMJe9sBpuE7EoXcz%2F4l6zAoyVTC8x94wZ0rcKgC%2ByOeJodqSF4lwdUcdVCB2dR1UvKS31VT7%2FJvRB3hfLyDYpTgaX4I%2B4LtNyA%3D%3D',
  },
  {
    name: 'walnut',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba139fe3e5364cb5e5f4.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba139fe3e5364cb5e5f4.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160083&Signature=jU2i0vqlB1Vz8kW%2B1RoFkWzbG%2BSeTEf8gGnsdqYtU5bapmgTdXLTEVtsSnfskEUA%2FuZkyBhgU5xnUxmfJoVMXwLNFH0SJ1HmBC7JaRiv5xFuagcsgQ1md%2FllYu9hjfesdg9ZE%2FsQv6XEVTjAg%2FAsqrxpxk9ROABIJO2JGYDvFr6bCBBB6pIalLTFpMeQ9lFKHQTkfAJmnQor3G9F7vSSkd%2BU4%2FslptBUp7AnpNI%2BZWHSkc6UbcjKY29OSMlThyPsxFnv4HKgdgW05LZRbl%2FkKCRToeoMNQnJs4YYK6B34%2FRTl8V%2BIlJ00wOdgeQ1efHGbyVAZiVKutD%2FdDfjuQgSww%3D%3D',
  },
  {
    name: 'water-melon',
    price: 1,
    quantity: 10,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba299fe3e5364cb5e5f6.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba299fe3e5364cb5e5f6.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160105&Signature=dOoFdHIV%2BuFJbeRuk6NHwOSxgUtuLlY80u2GekGZ%2BEdzhyp9z%2BoNXZ6T%2F5u0pyBkJZPJ7Ti9FkF6M62OMHkTInwbev%2BFZNqGmh2e%2BefElp8fZH3ZSigVMze7N5XvRMbktniTMmh89YfgZL5A0YIYWhuUM%2BdmnGwfioO757PJYFqkKN2TIxHUvQHkURN2xsEfqSs1JGrsT74KRVJQNH92tz1zKoLiB%2F82QHSa3bXlbe73toeBi%2B9FW7b3ZRKGN9X2KXyEJihNzUk%2FdErty%2FzzAmHNT0iQanroM8W4wOaHalDZVRQmtRItnE3i6HBGIWnHnCQ6F0MCbPERb06C1WY38A%3D%3D',
  },
  {
    name: 'cashew',
    price: 2,
    quantity: 12,
    rootImage:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba699fe3e5364cb5e5f8.jpg',
    imageURL:
      'https://storage.googleapis.com/products-app-50578.appspot.com/5e81ba699fe3e5364cb5e5f8.jpg?GoogleAccessId=firebase-adminsdk-i1zjv%40products-app-50578.iam.gserviceaccount.com&Expires=1589160169&Signature=CivTlnWkZJgykyOprLz4IzqX72drKV5lR%2F0I7XZhAJopIXuQqZLBQny0oVYRw0t0wMBIiP%2B9XKtfwd%2Bz4SfNgJSSs0wQPGajDS83jg5ZZ7yQZ4LiQ5lAGGXXukRkRTv74lXejcTihq6lg99HQFhSOrlpIiJ7rR2yOlRE%2BndReTVnIHJ1xQlJdyJMEMmXuHSc9DVCENIGqZ7gwe8Pb%2BM0n%2BmaV76INn9q%2FfJukiITI%2Fj8vi2ytm5qxQoXIL0h7W%2B1RTuzp58Y4t0c%2FpseEIGc84CFk7aDAbuZE0DV2Z9dzeTYyRQmk2kBf8NCNsV4FpDJBYDUR76tw4VH%2FH3q5KiLQw%3D%3D',
  },
];

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rootImage: { type: String },
  imageURL: { type: String },
  quantity: { type: Number, required: true },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

const Products = mongoose.model('products', productsSchema);

Products.find().exec(function(err, data) {
  if (data.length == 0) {
    for (i = 0; i < listDB.length; i++) {
      const Data = new Products(listDB[i]);
      Data.save();
    }
  }
});

setTimeout(() => {
  process.exit(0);
}, 1000);
