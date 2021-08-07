function login (email, password) {
    const gmail = 'akmal@gmail.com'
    const pass = '12345'
    function goHome () {
        console.log ('Login Berhasil');
    }
    function backLogin () {
        console.log('Login Gagal');
    }
    if (email == gmail && password == pass) {
        return goHome ()
    } else if (email != gmail || password != pass) {
        return backLogin ()
    } else if (email != gmail && password != pass) {
        return backLogin ()
    } else {
        console.error('Tidak Terdaftar');
    }
}
 let newEmail = prompt ('Masukkan Email :')
 let newPassword = prompt ('Masukkan Password :')

 login (newEmail, newPassword)