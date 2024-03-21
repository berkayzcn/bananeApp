
export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return "Gecersiz e-posta Adresi";

        case 'auth/email-already - exists':
            return "Kullanici zaten kayitli"

        case 'auth/user-not-found':
            return 'Kullanici Bulunamadi'

        case 'auth/weak-password':
            return 'Parola Cok Zayif'

        case 'auth/wrong-password':
            return 'Kullanici Adi ve Parolayi Kontrol Ediniz'

        default:
            return errorCode;
    }
}