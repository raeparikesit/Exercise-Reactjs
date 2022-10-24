console.log("\n")
console.log("Soal 1")
console.log("\n")
{
    function cetakFunction() {
        return "Hallo Nama saya Muhammad Raehan Parikesit "
      }
       
      var tampung = cetakFunction();
      console.log(cetakFunction())

}

console.log("\n")
console.log("Soal 2")
console.log("\n")
{
    function myFunction(angkaPertama, angkaKedua) {
        return angkaPertama + angkaKedua
      }
       
      let angka1 = 20
      
      let angka2 = 7
      
      let output = myFunction(angka1, angka2)
      
      console.log(output)

}


console.log("\n")
console.log("Soal 3")
console.log("\n")
{
    const Hello = () =>{
  
        return "Hello"
      }      

}

console.log("\n")
console.log("Soal 4")
console.log("\n")
{
    let obj = {

        nama : "john",
        
        umur : 22,
        
        bahasa : "indonesia"
        
        }
        
        console.log(obj.bahasa)
}

console.log("\n")
console.log("Soal 5")
console.log("\n")
{
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
    let objDaftarPeserta = {
        nama: arrayDaftarPeserta[0],
        "jenis kelamin": arrayDaftarPeserta[1],
        hobi:arrayDaftarPeserta[2],
        "tahun lahir": arrayDaftarPeserta[3]
    }
    console.log(objDaftarPeserta)

}

console.log("\n")
console.log("Soal 6")
console.log("\n")
{
    var buah =[
        {nama: "Nanas",warna: "Kuning","ada bijinya": "tidak",harga: 9000 },
        {nama: "Jeruk",warna: "Oranye","ada bijinya": "ada",harga: 8000},
        {nama: "Semangka",warna: "Hijau & Merah","ada bijinya": "ada",harga: 10000},
        {nama: "Pisang",warna: "Kuning","ada bijinya": "tidak",harga: 5000},
    ]

    var buahFilter = buah.filter(function(item){
        return item.warna =="Kuning";

    })
    console.log(buahFilter)
    
}

console.log("\n")
console.log("Soal 7")
console.log("\n")
{
    let phone = {
        name: "Galaxy Note 20",
        brand: "Samsung",
        year: 2020
     }
     const {name,brand,year} = phone 
     
     console.log(name, brand, year)

}

console.log("\n")
console.log("Soal 8")
console.log("\n")
{
    let dataBukuTambahan= {
        penulis: "john doe",
        tahunTerbit: 2020 
      }
      
      let buku = {
        nama: "pemograman dasar",
        jumlahHalaman: 172
      }
      
      let objOutput = {...buku,penulis:"john doe",tahunterbit:2020}
      
      
      console.log(objOutput)

}

console.log("\n")
console.log("Soal 9")
console.log("\n")
{
    let mobil = {

        merk : "bmw",
        
        color: "red",
        
        year : 2002
        
        }
        
        const functionObject = (param) => {
        
        return param
        
        }
        console.log(mobil)

}