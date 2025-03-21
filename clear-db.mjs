import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    // Önce VerificationCode kayıtlarını siliyoruz
    console.log('VerificationCode kayıtları siliniyor...');
    await prisma.verificationCode.deleteMany();
    console.log('Tüm doğrulama kodları silindi');
    
    // Sonra User kayıtlarını siliyoruz
    console.log('User kayıtları siliniyor...');
    await prisma.user.deleteMany();
    console.log('Tüm kullanıcılar silindi');
    
    console.log('Veritabanı başarıyla temizlendi!');
  } catch (error) {
    console.error('Veritabanı temizleme sırasında hata:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase(); 